'use client';

import { AutoStories } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItemsMain, navItemsProjects } from '../constants/AppBarGlobal2';

const AppbarGlobal = () => {
  const pathname = usePathname();

  // Decide qué menú mostrar según la ruta actual
  const navItems = pathname.startsWith('/Projects') ? navItemsProjects : navItemsMain;

  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar>
        <AutoStories sx={{ display: { xs: 'flex' }, mr: 1 }} />

        <Typography
          variant="h6"
          noWrap
          component={Link}
          href="/"
          sx={{
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: '700',
            letterSpacing: '0.2rem',
          }}
        >
          FUSE
        </Typography>

        <Box sx={{ ml: 'auto', display: { xs: 'block' } }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              href={item.path}
              color={pathname === item.path ? 'secondary' : 'inherit'}
              sx={{ textTransform: 'none' }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppbarGlobal;
