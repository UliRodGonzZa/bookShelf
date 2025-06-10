'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

// Global AppBar component that receives navigation items as props
const AppBarGlobal = ({ navItems = [] }) => {
  // Get current pathname from Next.js router to highlight active nav item
  const pathname = usePathname();

  return (
    // Material UI AppBar with static position and bottom margin
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        {/* Place here your logo or title if needed */}

        {/* Container aligned to the right to hold navigation buttons */}
        <Box sx={{ ml: 'auto' }}>
          {/* Map through navigation items to render buttons */}
          {navItems.map(({ label, path }) => (
            <Button
              key={label}
              component={Link}          // Use Next.js Link for client-side navigation
              href={path}               // Link path
              color={pathname === path ? 'secondary' : 'inherit'}  // Highlight if active
              sx={{ textTransform: 'none' }}  // Prevent uppercase styling on button text
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarGlobal;
