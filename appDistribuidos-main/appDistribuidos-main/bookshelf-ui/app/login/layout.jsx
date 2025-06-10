// app/login/layout.jsx
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../styles/GlobalTheme";

// Layout component for the login route
export default function LoginLayout({ children }) {
  return (
    // HTML and body tags should not be used here in Next.js app folder layouts
    <html lang="en">
      <body>
        {/* Apply Material UI theme and baseline styles */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* Render child components here; no global AppBar included */}
          {children} {/* Without AppbarGlobal here */}
        </ThemeProvider>
      </body>
    </html>
  );
}
