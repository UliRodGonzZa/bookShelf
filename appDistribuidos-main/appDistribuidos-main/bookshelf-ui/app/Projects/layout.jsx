// app/login/layout.jsx
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../styles/GlobalTheme";

// Layout component specifically for the login page route
export default function LoginLayout({ children }) {
  return (
    // In Next.js app directory, <html> and <body> tags should only be in the root layout
    <html lang="en">
      <body>
        {/* 
          Wrap the content with Material UI's ThemeProvider to apply the custom theme 
          CssBaseline applies a consistent CSS reset across browsers 
        */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* Render the nested child components here */}
          {/* Note: No global AppBar is included in this layout */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
