import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6C63FF',
      light: '#9B94FF',
      dark: '#4A43CC',
    },
    secondary: {
      main: '#00D4AA',
      light: '#33DDBB',
      dark: '#009977',
    },
    background: {
      default: '#050816',
      paper: '#0D1117',
    },
    text: {
      primary: '#F0F0F0',
      secondary: '#A0A0B0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.75,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #6C63FF 0%, #9B94FF 100%)',
          boxShadow: '0 4px 24px rgba(108, 99, 255, 0.35)',
          '&:hover': {
            background: 'linear-gradient(135deg, #5A52E0 0%, #8880EE 100%)',
            boxShadow: '0 6px 32px rgba(108, 99, 255, 0.5)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(255,255,255,0.06)',
        },
      },
    },
  },
})

export default theme
