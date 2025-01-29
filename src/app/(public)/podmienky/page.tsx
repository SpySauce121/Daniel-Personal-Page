// src/app/podmienky/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const metadata = { title: "Podmienky | NaPrdAplikacia" }

export default function TermsConditions() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Podmienky používania
      </Typography>
      
      <Typography paragraph>
        Tieto podmienky používania ("Podmienky") upravujú prístup a používanie našej webovej stránky, aplikácie a akýchkoľvek služieb, ktoré poskytujeme (ďalej len "Služby"). Používaním Služieb vyjadrujete súhlas s týmito Podmienkami. Ak s nimi nesúhlasíte, nepokračujte v používaní Služieb.
      </Typography>
      
      <Box>
        <Typography variant="h6" gutterBottom>1. Prístup k Službám</Typography>
        <Typography paragraph>
          Služby sú k dispozícii iba osobám, ktoré dosiahli vek minimálne 18 rokov. Ak máte menej ako 18 rokov, nemôžete používať naše Služby. Taktiež je nutné mať platný účet na našej platforme na prístup k určitému obsahu.
        </Typography>

        <Typography variant="h6" gutterBottom>2. Používateľské účty</Typography>
        <Typography paragraph>
          Pri registrácii účtu na našich Službách ste povinní poskytnúť presné a úplné informácie a pravidelne ich aktualizovať. Ste zodpovední za udržiavanie bezpečnosti vášho účtu a všetkých aktivít vykonávaných prostredníctvom vášho účtu.
        </Typography>

        <Typography variant="h6" gutterBottom>3. Práva duševného vlastníctva</Typography>
        <Typography paragraph>
          Všetok obsah, vrátane textov, obrázkov, log, grafiky, a softvéru, ktorý je sprístupnený prostredníctvom našich Služieb, je chránený autorskými právami a ďalšími právami duševného vlastníctva. Používatelia nesmú tento obsah kopírovať, distribuovať alebo upravovať bez výslovného súhlasu vlastníka práv.
        </Typography>

        <Typography variant="h6" gutterBottom>4. Zákony a regulácie</Typography>
        <Typography paragraph>
          Používanie našich Služieb musí byť v súlade s platnými zákonmi a predpismi. Používatelia nesmú používať naše Služby na nelegálne účely, ako sú podvody, porušovanie práv duševného vlastníctva alebo šírenie škodlivého obsahu.
        </Typography>

        <Typography variant="h6" gutterBottom>5. Ochrana osobných údajov</Typography>
        <Typography paragraph>
          Vaša ochrana osobných údajov je pre nás dôležitá. Naša Politika ochrany osobných údajov poskytuje podrobnosti o tom, ako zhromažďujeme, používame a chránime vaše osobné údaje. Používaním našich Služieb súhlasíte s podmienkami tejto politiky.
        </Typography>

        <Typography variant="h6" gutterBottom>6. Zodpovednosť</Typography>
        <Typography paragraph>
          Naša zodpovednosť voči používateľovi je obmedzená na škody vzniknuté z našich vlastných zavinení, pričom nezodpovedáme za nepriamu, následnú alebo náhodnú škodu. Používanie našich Služieb je na vlastné riziko používateľa.
        </Typography>

        <Typography variant="h6" gutterBottom>7. Zmena podmienok</Typography>
        <Typography paragraph>
          Vyhradzujeme si právo tieto Podmienky kedykoľvek zmeniť, a to zverejnením upravených Podmienok na našich Službách. Používaním našich Služieb po zverejnení zmien vyjadrujete súhlas s upravenými Podmienkami.
        </Typography>

        <Typography variant="h6" gutterBottom>8. Zrušenie a ukončenie</Typography>
        <Typography paragraph>
          Služby môžeme kedykoľvek pozastaviť alebo ukončiť, ak používateľ poruší tieto Podmienky. Používateľ môže ukončiť používanie našich Služieb v prípade, že už nebude súhlasiť s Podmienkami.
        </Typography>
      </Box>
    </Container>
  );
}
