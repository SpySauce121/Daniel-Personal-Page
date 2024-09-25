// src/app/auth/odhlasenie/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const metadata = { title: "Odhlasenie | NaPrdAplikacia" }

export default function SignOut() {

  return (
    <Container>
        <Typography> Konecne si sa odhlasil | Si zachraneny! </Typography>
    </Container>
  );
}