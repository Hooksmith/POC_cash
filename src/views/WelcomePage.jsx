import { Box } from "@mui/system";

function WelcomePage() {
  return (
    <Box
      sx={{
        backgroundColor: "green",
        minHeight: "100vh", // Ensures the green background fills the entire screen height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: { xs: "80%", md: "400px" }, // Responsive width
          padding: 2,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          alt="DocCast Logo"
          sx={{ width: "50%", height: "auto" }}
          src="/logo.png"
        />
      </Box>
    </Box>
  );
}

export default WelcomePage;
