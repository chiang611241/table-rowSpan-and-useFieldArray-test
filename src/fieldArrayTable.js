import React, { useContext } from "react";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";

import { Context } from "./fieldArray";
import ArrayItem from "./fieldArrayItem";

const useStyle = makeStyles({
  tableBorder: {
    borderLeft: "1px  solid rgba(224, 224, 224, 1)"
  }
});

const FieldArrayTable = () => {
  const classes = useStyle();
  const { fields, secFields } = useContext(Context);
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
                <React.Fragment key={`test-${index}`}>
                  <ArrayItem
                    arrayName="test"
                    index={index}
                    rowSpan={sl[index]}
                    classes={classes}
                  />
                  {secFields.length > 0 &&
                    secFields.map((sub, index) => {
                      return (
                        <ArrayItem
                          arrayName="secTest"
                          index={index}
                          classes={classes}
                        />
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
