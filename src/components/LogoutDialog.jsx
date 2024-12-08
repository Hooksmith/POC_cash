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
        <Box sx={{ display: "flex", alignItems:'center', justifyContent:'space-evenly' }}>
          <Button onClick={onConfirm} color="primary" variant="outlined" sx={{px:5}}>
            Yes
          </Button>
          <Button
            onClick={onClose}
            sx={{
              backgroundColor: "#FCE444",
              color: "black",
              borderColor: "transparent",
              px:5
            }}
            variant="outlined"
          >
            No
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}

export default LogoutDialog;
