import Page from "../components/Page";
import { Box, Typography, Paper, useMediaQuery } from "@mui/material";
import background from '../images/Writing.jpeg';
import { useTheme } from "@emotion/react";

function Stories() {
  const smallScreen = useMediaQuery('(max-width:800px)');
  const theme = useTheme();
  return (
    <Page background={background} smallScreen={smallScreen} vOffset="75vh">
      <Typography variant="h4">Coming Soon!</Typography>
    </Page>
  );
}

export default Stories;
