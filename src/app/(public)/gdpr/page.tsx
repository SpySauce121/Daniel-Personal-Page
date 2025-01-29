// src/app/gdpr/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const metadata = { title: "GDPR | NaPrdAplikacia" }

export default function GDPR() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Ochrana osobných údajov (GDPR)
      </Typography>
      <Typography paragraph>
        Vaša ochrana osobných údajov je pre nás veľmi dôležitá. Tieto zásady ochrany osobných údajov vysvetľujú, aké osobné údaje zhromažďujeme, ako ich používame a aké máte práva v súvislosti s vašimi údajmi.
      </Typography>
      
      <Box>
        <Typography variant="h6" gutterBottom>1. Zhromažďovanie osobných údajov</Typography>
        <Typography paragraph>
          Zhromažďujeme osobné údaje, ktoré nám poskytnete pri registrácii, používaní našich služieb alebo komunikácii s nami. Môže ísť o údaje ako meno, e-mailová adresa, kontaktné údaje a ďalšie informácie, ktoré nám dobrovoľne poskytujete.
        </Typography>

        <Typography variant="h6" gutterBottom>2. Použitie osobných údajov</Typography>
        <Typography paragraph>
          Vaše osobné údaje používame na poskytovanie našich služieb, správu účtu, komunikáciu a vylepšovanie našich služieb. Môžeme ich tiež použiť na marketingové účely, ak ste nám dali súhlas.
        </Typography>

        <Typography variant="h6" gutterBottom>3. Zdieľanie údajov</Typography>
        <Typography paragraph>
          Vaše osobné údaje nezdieľame s tretími stranami, pokiaľ to nie je nevyhnutné na plnenie našich zmluvných záväzkov, v súlade s právnymi predpismi alebo s vaším súhlasom.
        </Typography>

        <Typography variant="h6" gutterBottom>4. Bezpečnosť údajov</Typography>
        <Typography paragraph>
          Zabezpečujeme adekvátne opatrenia na ochranu vašich osobných údajov pred neoprávneným prístupom, zneužitím alebo zničením.
        </Typography>

        <Typography variant="h6" gutterBottom>5. Vaše práva</Typography>
        <Typography paragraph>
          Podľa GDPR máte právo na prístup k vašim osobným údajom, ich opravu, vymazanie, obmedzenie spracovania, prenosnosť údajov a odvolanie súhlasu. Ak chcete uplatniť ktorékoľvek z týchto práv, kontaktujte nás na info@vasadomena.com.
        </Typography>

        <Typography variant="h6" gutterBottom>6. Doba uchovávania údajov</Typography>
        <Typography paragraph>
          Vaše osobné údaje uchovávame len počas obdobia, ktoré je potrebné na splnenie účelu ich spracovania, pokiaľ zákon nevyžaduje dlhšie uchovávanie.
        </Typography>

        <Typography variant="h6" gutterBottom>7. Zmena zásad</Typography>
        <Typography paragraph>
          Tento dokument môžeme aktualizovať podľa potreby. Zmeny budú zverejnené na našej webovej stránke. Pokračovaním v používaní našich služieb po zverejnení zmien vyjadrujete súhlas s aktualizovanými zásadami ochrany osobných údajov.
        </Typography>
      </Box>
    </Container>
  );
}
