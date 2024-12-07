import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Checkbox, FormControlLabel, Grid2, Link } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const theme = useTheme();
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const [showPassword, setShowPassword] = React.useState(true);
  const [userInfo, setUserInfo] = React.useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeUserInfo = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleShowPassword = (event) => {
    setShowPassword(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Temporary Validation
    if (
      userInfo.email !== "" &&
      userInfo.password !== "" &&
      userInfo.confirmPassword !== "" &&
      emailRegex.test(userInfo.email) &&
      passwordRegex.test(userInfo.password) &&
      userInfo.password === userInfo.confirmPassword
    ) {
      navigate("/login");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid2 container spacing={2}>
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{ display: { xs: "none", md: "grid" } }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              minHeight: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src="/logo.png"
              alt="DocCast Logo"
              sx={{ width: "100px", height: "auto", marginBottom: 2 }}
            />
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ p: 8 }}>
          <Typography
            variant="h4"
            fontWeight="500"
            color={theme.palette.primary.main}
          >
            Create an Account
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{ mb: 2 }}
            fontWeight="400"
            color={theme.palette.grey[900]}
          >
            Already have an account?{" "}
            <Link color={theme.palette.primary.main} href="/login">
              Log in
            </Link>
          </Typography>

          <InputLabel sx={{ mb: 1 }}>First Name</InputLabel>
          <TextField
            fullWidth
            sx={{ mb: 2 }}
            value={userInfo.firstName}
            name="firstName"
            onChange={onChangeUserInfo}
          />

          <InputLabel sx={{ mb: 1 }}>Last Name</InputLabel>
          <TextField
            fullWidth
            value={userInfo.lastName}
            name="lastName"
            sx={{ mb: 2 }}
            onChange={onChangeUserInfo}
          />

          <Grid2 container spacing={2} sx={{ mb: 2 }}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <InputLabel sx={{ mb: 1 }}>Gender</InputLabel>
              <TextField
                fullWidth
                select
                name="gender"
                value={userInfo.gender}
                labelId="gender-label"
                id="gender-select"
                onChange={onChangeUserInfo}
              >
                <MenuItem value="custom">Custom</MenuItem>
              </TextField>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
              <InputLabel sx={{ mb: 1 }}>Date of Birth (MM/DD/YY)</InputLabel>
              <TextField
                fullWidth
                type="date"
                name="dateOfBirth"
                value={userInfo.dateOfBirth}
                onChange={onChangeUserInfo}
              />
            </Grid2>
          </Grid2>

          <InputLabel sx={{ mb: 1 }}>Email Address</InputLabel>
          <TextField
            required
            fullWidth
            name="email"
            value={userInfo.email}
            sx={{ mb: 2 }}
            error={userInfo.email !== "" && !emailRegex.test(userInfo.email)}
            helperText={
              userInfo.email !== "" && !emailRegex.test(userInfo.email)
                ? "Invalid Email"
                : ""
            }
            onChange={onChangeUserInfo}
          />

          <InputLabel sx={{ mb: 1 }}>Password</InputLabel>
          <TextField
            fullWidth
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={userInfo.password}
            sx={{ mb: 2 }}
            error={
              userInfo.password !== "" && !passwordRegex.test(userInfo.password)
            }
            helperText={
              userInfo.password !== "" && !passwordRegex.test(userInfo.password)
                ? "Use 8 or more characters with a mix of letters, numbers & symbols"
                : ""
            }
            onChange={onChangeUserInfo}
          />

          <InputLabel sx={{ mb: 1 }}>Confirm Password</InputLabel>
          <TextField
            required
            fullWidth
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={userInfo.confirmPassword}
            sx={{ mb: 2 }}
            error={
              userInfo.confirmPassword !== "" &&
              userInfo.confirmPassword !== userInfo.password
            }
            helperText={
              userInfo.confirmPassword !== "" &&
              userInfo.confirmPassword !== userInfo.password
                ? "Password not matched"
                : ""
            }
            onChange={onChangeUserInfo}
          />

          <FormControlLabel
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: theme.palette.grey[900],
            }}
            control={
              <Checkbox
                // defaultChecked
                sx={{
                  color: theme.palette.background.primary,
                  "&.Mui-checked": {
                    color: theme.palette.background.primary,
                  },
                }}
                checked={showPassword}
                onChange={handleShowPassword}
              />
            }
            label="Show password"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end", // Align items to the end
            }}
          >
            <Button type="submit" variant="contained">
              Create an Account
            </Button>
          </Box>
        </Grid2>
      </Grid2>
    </form>
  );
}

export default CreateAccount;
