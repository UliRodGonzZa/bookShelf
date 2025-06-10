'use client';

import { createTheme } from "@mui/material";
export const defaultTheme = createTheme({
    palette: {
      primary: {
        dark: '#2a4759',    
        main: '#FFFFFF',    
        light: '#F79B72',
        grey: '#DDDDDD',
        black: '#000000',
        red: '#e7191f',
      },
      background: {
        default: '#DDDDDD', 
        paper: '#FFFFFF'    
      },
      text: {
        primary: '#000000', 
        secondary: '#F79B72' 
      }
    },
    typography: {
      fontFamily: 'Arial, sans-serif',
      button: {
        textTransform: 'none', 
        fontWeight: 'bold'
      }
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#2a4759', 
            color: '#EEEEEE'            
          }
        }
      },
      
    }
  });


