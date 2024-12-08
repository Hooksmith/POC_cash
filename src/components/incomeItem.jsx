import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { TableCell, TableRow, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import CategoryItem from "./categoryItem";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function IncomeItem({ category, date, description, amount }) {
  const theme = useTheme();

  function formatMoney() {
    return `$ +${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }

  return (
    <StyledTableRow>
      <TableCell>
        <CategoryItem label={category} />
      </TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell sx={{ color: theme.palette.primary.main }}>
        {formatMoney()}
      </TableCell>
      <TableCell>
        <IconButton>
          <Box
            component="img"
            alt="logo"
            src="/edit.png"
            width={24}
            sx={{ objectFit: "scale-down" }}
          />
        </IconButton>
        <IconButton>
          <Box
            component="img"
            alt="logo"
            src="/delete.png"
            width={24}
            sx={{ objectFit: "scale-down" }}
          />
        </IconButton>
      </TableCell>
    </StyledTableRow>
  );
}
export default IncomeItem;
