import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

function LogoutDialog({ open, onClose, onConfirm }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{ pb: 5, px: 3, pt: 3 }}>
        <DialogTitle>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                borderColor: "green",
                borderWidth: 1,
                borderStyle: "solid",
                p: 2,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <QuestionMarkIcon fontSize="large" sx={{ color: "green" }} />
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6">
              Are you sure you want to logout?
            </Typography>
          </Box>
        </DialogContent>
        <Box sx={{ display: "flex" }}>
          <Button
            onClick={onClose}
            sx={{
              backgroundColor: "yellow",
              color: "black",
              borderColor: "transparent",
            }}
            borderColor="yellow"
            variant="outlined"
          >
            No
          </Button>
          <Button onClick={onConfirm} color="primary" variant="outlined">
            Yes
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}

export default LogoutDialog;
