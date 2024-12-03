import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

Logo.propTypes = {
  className: PropTypes.string,
};

function Logo({ className, ...other }) {
  return (
    <Box
      component="img"
      alt="logo"
      src="/logo.png"
      height={40}
      className={className}
      {...other}
    />
  );
}

export default Logo;
