import * as React from "react";
import { Box, Typography } from "@mui/material";
import "./categoryItem.css";

function CategoryItem({ label }) {
  const type = () => {
    if (label) {
      return label.toLowerCase().replace(/\s+/g, "-");
    }
    return "";
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Box
        className={`category-icon ${type()}`}
        sx={{
          padding: "4px",
          borderRadius: "50%",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          alt="logo"
          src={`/${type()}.png`}
          width={24}
          height={19}
          sx={{ objectFit: "scale-down" }}
        />
      </Box>

      <Typography
        variant="body1"
        className={`category-label ${type()}`}
        sx={{ ml: 1 }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default CategoryItem;
