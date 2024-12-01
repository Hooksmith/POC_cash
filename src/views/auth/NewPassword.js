import { Box, Button, TextField, Typography } from "@mui/material";
// import InputAdornment from "@mui/material/InputAdornment";
// import IconButton from "@mui/material/IconButton";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
function NewPassword() {
  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#f0f0f0", // Light gray background
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "80%", md: "400px" },
          padding: 4,
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Box
          component="img"
          src="/logo.png"
          alt="DocCash Logo"
          sx={{ width: "100px", height: "auto", marginBottom: 2 }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          Please enter a new password below
        </Typography>

        <TextField
          label="New password"
          // type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment position="end">
          //       <IconButton
          //         aria-label="toggle password visibility"
          //         onClick={handleClickShowPassword}
          //         edge="end"
          //       >
          //         {showPassword ? <VisibilityOff /> : <Visibility />}
          //       </IconButton>
          //     </InputAdornment>
          //   ),
          // }}
        />
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Use 8 or more characters with a mix of letters, numbers & symbols
        </Typography>

        <TextField
          label="Confirmed password"
          // type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment position="end">
          //       <IconButton
          //         aria-label="toggle password visibility"
          //         onClick={handleClickShowPassword}
          //         edge="end"
          //       >
          //         {showPassword ? <VisibilityOff /> : <Visibility />}
          //       </IconButton>
          //     </InputAdornment>
          //   ),
          // }}
        />

        <Typography variant="body1" color="error" gutterBottom>
          Error message
        </Typography>

        <Button variant="contained" color="primary" fullWidth>
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default NewPassword;
