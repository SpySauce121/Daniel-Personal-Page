// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.google-login': {
            background: `linear-gradient(45deg, 
              red, orange, yellow, green, blue, indigo, violet)`,
            backgroundSize: '200% 200%',
            color: '#fff',
            borderRadius: '8px',
            animation: 'rainbow 5s ease infinite',
            '@keyframes rainbow': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
          },
        },
      },
    },
  },
});

export default theme;
