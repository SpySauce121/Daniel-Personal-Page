// src/sections/SignInView.tsx
import { Box, Typography, Button } from '@mui/material';
import { signIn } from 'next-auth/react';

const SignInView = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(to bottom, #ffffff, #f7f7f7)',
      }}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        Prihlásenie užívateľa
      </Typography>
      <Button
        onClick={() => signIn('google')}
        sx={{
          background: `linear-gradient(45deg, 
            red, orange, yellow, green, blue, indigo, violet)`,
          backgroundSize: '200% 200%',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: 'bold',
          textTransform: 'none',
          animation: 'rainbow 5s ease infinite',
          '@keyframes rainbow': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
          '&:hover': {
            opacity: 0.9,
          },
        }}
      >
        Sign in with Google
      </Button>
    </Box>
  );
};

export default SignInView;
