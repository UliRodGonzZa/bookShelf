'use client';

import { createTheme } from "@mui/material";

// Create a custom Material UI theme using createTheme function
export const theme = createTheme({
  // Define the color palette for the application
  palette: {
    primary: {
      main: "#2D2D2D", // Primary color used throughout the app (dark gray)
    },
    secondary: {
      main: "#DC004E", // Secondary accent color (bright pink/red)
    },
    text: {
      light: '#566573' // Custom light text color
    }
  },
  typography: {
    // Define the font family for the entire app; fallback to sans-serif
    fontFamily: "Arial, sans-serif",
  },
});
