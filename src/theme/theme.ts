import { createTheme } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize the primary color
    },
    secondary: {
      main: "#dc004e", // Customize the secondary color
    },
    background: {
      default: "#f5f5f5", // Background color for the app
      paper: "#fff", // Background for cards/paper elements
    },
    text: {
      primary: "#000", // Default text color
    },
  },
  typography: {
    h5: {
      fontWeight: "bold",
      fontSize: "1.25rem",
      color: "#333",
    },
    body1: {
      color: "#555",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          textTransform: "none",
        },
        outlined: {
          borderWidth: "2px",
          borderImageSlice: 1,
          borderImageSource: "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)",
          "&:hover": {
            borderImageSource: "linear-gradient(45deg, violet, indigo, blue, green, yellow, orange, red)",
            backgroundColor: "transparent",
          },
        },
        contained: {
          backgroundColor: "#000",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#333",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          marginBottom: "1rem", // Margin for title
        },
        body1: {
          marginBottom: "1.5rem", // Margin for body text
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1976d2",
        },
      },
    },
  },
});

export default theme;
