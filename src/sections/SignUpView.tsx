// src/sections/SignUpView.tsx

"use client";

import {
  Button,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GithubIcon from "@mui/icons-material/Github";

export default function SignUpView() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Title */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Registrácia
      </Typography>

      {/* Sign-in Link */}
      <Typography variant="body1" sx={{ mb: 6 }}>
        Už máte účet? <a href="/auth/prihlasenie">Prihláste sa</a>
      </Typography>

      {/* Google Sign Up Button */}
      <Button
        variant="outlined"
        fullWidth
        onClick={() => signIn("google")}
        sx={{
          mb: 1,
          border: `2px solid`,
          borderImageSlice: 1,
          borderImageSource: `linear-gradient(45deg, 
            red, orange, yellow, green, blue, indigo, violet)`,
          color: "text.primary",
          fontWeight: "bold",
          "&:hover": {
            borderImageSource: `linear-gradient(45deg, 
              violet, indigo, blue, green, yellow, orange, red)`,
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 1,
            background: `linear-gradient(45deg, 
              red, orange, yellow, green, blue, indigo, violet)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <GoogleIcon />
        </Box>
        Registrovať sa účtom Google
      </Button>

      {/* GitHub Sign Up Button */}
      <Button
        variant="contained"
        fullWidth
        startIcon={<GithubIcon />}
        onClick={() => signIn("github")}
        sx={{
          mb: 1,
          backgroundColor: "#000",
          color: "#fff",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#333",
          },
        }}
      >
        Registrovať sa účtom Github
      </Button>
    </Container>
  );
}
