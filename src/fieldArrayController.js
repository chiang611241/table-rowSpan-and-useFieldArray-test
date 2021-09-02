import React, { useContext } from "react";
import { Controller } from "react-hook-form";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

import { Context } from "./fieldArray";

const useStyles = makeStyles(() => ({
  tableCell: {
    borderBottom: "none"
  }
}));

const FieldArrayController = ({ fieldName }) => {
  const classes = useStyles();
  const {
    fields,
    secFields,
    control,
    errors,
    addField,
    removeField,
    addSecField,
    removeSecField
  } = useContext(Context);

  const mainType = fieldName === "test";
  const fieldNameArray = mainType ? fields : secFields;

  return (
    <Grid container item xs={12} style={{ marginBottom: 5, minHeight: "auto" }}>
      <Grid item sm={2} style={{ textAlign: "center" }}></Grid>
      <Grid item xs={12} style={{ backgroundColor: "#f0f0f0" }}>
        <TableContainer style={{ overflow: "hidden" }}>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell rowSpan="51" className={classes.tableCell}>
                  Option
                </TableCell>
              </TableRow>
              {fieldNameArray?.map((field, index) => {
                return (
                  <TableRow key={field.id}>
                    <TableCell className={classes.tableCell}>
                      {/* 
                        start width error
                        in react hook form v7, need to use Controller to solve 
                      */}
                      <Controller
                        name={`${fieldName}[${index}].type`}
                        control={control}
                        defaultValue={field?.type}
                        render={({ field: { onChange, value } }) => (
                          <TextField
                            label="Option"
                            variant="outlined"
                            value={value}
                            onChange={onChange}
                            error={!!errors?.test?.message}
                            helperText={errors ? errors?.test?.message : null}
                            fullWidth
                            size="small"
                          />
                        )}
                      />
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Button
                        aria-label="del"
                        onClick={() => {
                          mainType ? removeField(index) : removeSecField(index);
                        }}
                        size="small"
                        variant="contained"
                        color="primary"
                      >
                        del
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell align="center" className={classes.tableCell}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => (mainType ? addField() : addSecField())}
                  >
                    append
                  </Button>
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <></>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default FieldArrayController;
