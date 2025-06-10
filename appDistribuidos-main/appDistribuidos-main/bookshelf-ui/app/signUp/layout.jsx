// app/login/layout.jsx
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../styles/GlobalTheme";

// Layout component used specifically for the login page
export default function LoginLayout({ children }) {
  return (
    // In Next.js app router, only the root layout should include <html> and <body> tags
    <html lang="en">
      <body>
        {/* 
          Wrap the content with Material UI's ThemeProvider to apply the custom theme 
          CssBaseline resets CSS for consistent styling across browsers 
        */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* Render the nested child components here */}
          {/* Note: No global AppBar component included in this layout */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
