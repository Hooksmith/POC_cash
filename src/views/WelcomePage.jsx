import { Box } from "@mui/system";

function WelcomePage() {
  return (
    <Box
      sx={{
        backgroundColor: "green",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: { xs: "80%", md: "400px" },
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
