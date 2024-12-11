// theme/theme.ts
import { PaletteOptions, Components } from "@mui/material/styles";

export const lightTheme = {
  palette: {
    mode: 'light',
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
      paper: "#fff",
    },
    text: {
      primary: "#000",
    },
  } as PaletteOptions,
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
          marginBottom: "1rem",
        },
        body1: {
          marginBottom: "1.5rem",
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
  } as Components,
};

export const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#121212", // Dark background
      paper: "#1d1d1d",   // Dark paper background
    },
    text: {
      primary: "#fff", // Light text on dark background
    },
  } as PaletteOptions,
  typography: {
    h5: {
      fontWeight: "bold",
      fontSize: "1.25rem",
      color: "#fff",
    },
    body1: {
      color: "#ccc",
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
          marginBottom: "1rem",
        },
        body1: {
          marginBottom: "1.5rem",
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
  } as Components,
};
