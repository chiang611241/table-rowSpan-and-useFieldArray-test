import React from "react";
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

const useStyles = makeStyles(() => ({
  tableCell: {
    borderBottom: "none"
  }
}));

const FieldArrayController = ({
  fields,
  control,
  errors,
  fieldName,
  handleRemove,
  handleAdd
}) => {
  const classes = useStyles();
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
              {fields.map((field, index) => {
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
                        onClick={() => handleRemove(index)}
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
                    onClick={handleAdd}
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
