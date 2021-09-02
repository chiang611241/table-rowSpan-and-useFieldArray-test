import React, { useContext } from "react";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";

import { Context } from "./fieldArray";

const useStyle = makeStyles({
  tableBorder: {
    borderLeft: "1px  solid rgba(224, 224, 224, 1)"
  }
});

const FieldArrayTable = () => {
  const classes = useStyle();
  const { fields, secFields, watch } = useContext(Context);
  let sl = [];

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>fields</TableCell>
              {secFields.length > 0 && <TableCell>secField</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {fields.map((s, index) => {
              if (secFields.length) {
                sl[index] = 0;
                sl[index] += secFields.length + 1;
              }
              return (
                <React.Fragment key={index}>
                  <TableRow>
                    <TableCell rowSpan={sl[index]}>
                      <p>{watch(`test[${index}].type`)}</p>
                    </TableCell>
                  </TableRow>
                  {secFields.length > 0 &&
                    secFields.map((sub, index) => {
                      return (
                        <React.Fragment key={index}>
                          <TableRow>
                            <TableCell className={classes.tableBorder}>
                              <p>{watch(`secTest[${index}].type`)}</p>
                            </TableCell>
                          </TableRow>
                        </React.Fragment>
                      );
                    })}
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FieldArrayTable;
