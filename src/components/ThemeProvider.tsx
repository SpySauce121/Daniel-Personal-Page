// ThemeProvider.tsx
"use client";
import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../theme/theme"; // Import light and dark themes

// Context for managing theme state
const ThemeContext = createContext({
  toggleTheme: () => {},
  currentTheme: "light",
});

// Custom hook to access theme context
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light"); // Default to light theme

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const theme = currentTheme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme, currentTheme }}>
      <MUIThemeProvider theme={createTheme(theme)}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
