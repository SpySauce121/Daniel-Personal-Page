// src/sections/SignUpView.tsx

"use client";

import {
  Button,
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GithubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { useState } from "react";

export default function SignUpView() {
  const [gdprAccepted, setGdprAccepted] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleGdprChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGdprAccepted(event.target.checked);
  };

  const handleSignUp = (provider: string) => {
    if (!gdprAccepted) {
      setOpenError(true); // Show error popup if GDPR not accepted
    } else {
      signIn(provider); // Proceed with sign-in if GDPR is accepted
    }
  };

  const handleCloseError = () => {
    setOpenError(false); // Close the error popup
  };

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
      {/* Logo / Title */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Registrácia
      </Typography>

      {/* Sign-in link */}
      <Typography variant="body1" sx={{ mb: 6 }}>
        Už máte účet? <a href="/auth/prihlasenie">Prihláste sa</a>
      </Typography>

      {/* Error Message (above the checkbox) */}
      {openError && (
        <Alert severity="error" sx={{ mb: 2, width: "100%" }}>
          Musíte súhlasiť s GDPR, aby ste sa mohli zaregistrovať.
        </Alert>
      )}

      {/* GDPR Consent Checkbox */}
      <FormControlLabel
        control={
          <Checkbox
            checked={gdprAccepted}
            onChange={handleGdprChange}
            color="primary"
          />
        }
        label={
          <span>
            Súhlasím s{" "}
            <Link href="/gdpr" passHref>
              GDPR
            </Link>
            {" "}a{" "}
            <Link href="/podmienky" passHref>
              Podmienky používania
            </Link>
          </span>
        }
        sx={{
          mt: 2,
          justifyContent: "flex-start", // Ensure the label is aligned with the checkbox
          alignItems: "center", // Align checkbox with the text
        }}
      />

      {/* Google Sign Up */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={() => handleSignUp("google")}
        sx={{ mb: 1 }}
      >
        Registrovať sa účtom Google
      </Button>

      {/* Github Sign Up */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GithubIcon />}
        onClick={() => handleSignUp("github")}
        sx={{ mb: 1 }}
      >
        Registrovať sa účtom Github
      </Button>
    </Container>
  );
}
