import React, { useContext } from "react";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import { Context } from "./fieldArray";

const ArrayItem = ({ arrayName, index, rowSpan = 1, classes }) => {
  const { watch } = useContext(Context);

  return (
    <React.Fragment key={`${arrayName}-${index}`}>
      <TableRow>
        <TableCell rowSpan={rowSpan} className={classes.tableBorder}>
          <p>{watch(`${arrayName}[${index}].type`)}</p>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default ArrayItem;
