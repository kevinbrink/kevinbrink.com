import Page from "../components/Page";
import { Box, Typography, useMediaQuery } from "@mui/material";
import background from '../images/About.jpeg';
import kendraAndMe from '../images/kendraAndMe.jpeg';
import coffee from '../images/coffee.jpeg';
import { useTheme } from "@emotion/react";

function About() {
  const smallScreen = useMediaQuery('(max-width:800px)');
  const theme = useTheme();
  return (
    <Page background={background} smallScreen={smallScreen} vOffset="85vh">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <Typography variant="h3" sx={{ textAlign: "center", marginBottom: theme.spacing(3) }}>About</Typography>
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: theme.spacing(1) }}>Hello There.</Typography>
      <Typography
        variant="h6"
        sx={{
          width: "100%",
          textAlign: "center",
          marginBottom: theme.spacing(1)
        }}
      >
        As you may have guessed by now, my name is Kevin Brink, and this is my website.
    </Typography>
      <Typography
        variant="h6"
        sx={{
          width: "100%",
          textAlign: "center",
          marginBottom: theme.spacing(1)
        }}
      >
        If you have a desire to contact me, feel free to shoot me an email at <a style={{ backgroundColor: theme.palette.primary.dark, color: theme.palette.primary.light, textDecoration: "none"}} href="mailto:Kevin@KevinBrink.com">Kevin@KevinBrink.com</a>
    </Typography>
      <Typography
        variant="h6"
        sx={{
          width: "100%",
          textAlign: "center",
          marginBottom: theme.spacing(1)
        }}
      >
        With that said, here are some miscellaneous bits & bites about me:
    </Typography>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: smallScreen ? "1fr" : "1fr 1fr",
        alignItems: "center",
        gap: theme.spacing(1)
      }}
  >
      <Box>
        <Typography
          variant="body1"
          sx={{ marginBottom: theme.spacing(1) }}
        >
        I am a combination Jesus freak, adoring husband, aspiring writer, nature lover, wanna-be coffee aficionado, coding geek, and amatuer photographer.
        </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: theme.spacing(1) }}
          >
            My ultimate goal & desire in life is to live in such a way to delight my Creator, Jesus Christ.
        </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: theme.spacing(1) }}
          >
            Along the way, I find an abundance of joy in relationships, hobbies, and dreams, all of which I firmly believe were planted in me by that same God.
        </Typography>
      </Box>
      <img style={{ maxWidth: "100%", height: "auto" }} src={coffee}/>
      <img style={{ maxWidth: "100%", height: "auto", order: smallScreen ? 1 : 0 }} src={kendraAndMe}/>
      <Typography
        variant="body1"
      >
        I may not know a lot in life, but I know Jesus really loves me. My wife, Kendra, is the easiest proof I have. I am grateful every day God brought us together and keeps us stuck together for life!
      </Typography>
    </Box>
    </Box>
    </Page>
  );
}

export default About;
