import * as React from "react";
import Typography from "@mui/material/Typography";
import "./statusPill.css";

function StatusPill({ label }) {
  console.log("label::", label);
  const mode = () => {
    if (label === "Completed") {
      return "success";
    } else if (label === "In Progress") {
      return "info";
    } else if (label === "Cancelled") {
      return "error";
    } else {
      return "warning";
    }
  };

  return <Typography className={`status ${mode()}`}>{label}</Typography>;
}

export default StatusPill;
