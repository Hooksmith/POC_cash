import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function IncomeItem({ category, date, description, amount }) {
  return (
    <StyledTableRow>
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              backgroundColor: "green",
              padding: "4px",
              borderRadius: "50%",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              alt="logo"
              src="/briefcase.png"
              width={24}
              height={19}
              sx={{ objectFit: "scale-down" }}
            />
          </Box>

          <Typography variant="body1" sx={{ ml: 1 }}>
            {category}
          </Typography>
        </Box>

        {/*  */}
      </TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>${amount.toFixed(2)}</TableCell>
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
