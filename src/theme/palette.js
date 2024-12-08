import { alpha } from "@mui/material";

// SETUP COLORS
const PRIMARY = {
  lighter: "#D7E7D9", //
  light: "#8ac265",
  main: "#6DB33F", //
  dark: "#62a138", //
  darker: "#578f32",
};
const SECONDARY = {
  lighter: "#F4F7FA",
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  darker: "#091A7A",
};
const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
};
const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
};
const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFCA3A",
  dark: "#B78103",
  darker: "#7A4F01",
};
const ERROR = {
  lighter: "#f14a74",
  light: "#ef3363",
  main: "#EE1D52", //
  dark: "#d61a49",
  darker: "#be1741",
};

const GREY = {
  0: "#FFFFFF",
  100: "#E1E9EE", //
  200: "#C4CFD7", //
  300: "#F8F8F8", //
  400: "#93A1AA", ///
  500: "#D9D9D9", //
  600: "#757D8A",
  700: "#454F5B",
  800: "#111928", //
  900: "#324C5B", //
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  info: { ...INFO, contrastText: "#fff" },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: "#fff" },
  grey: GREY,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  ...COMMON,
  mode: "light",
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: SECONDARY.lighter,
  },
  action: {
    active: GREY[600],
    ...COMMON.action,
  },
};

export default palette;
