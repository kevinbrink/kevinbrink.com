import {Link, useLocation} from "react-router-dom";
import { Box, Paper, Typography} from "@mui/material";
import { useTheme } from "@emotion/react";

const Navigation = ({ link, title, smallScreen }) => {
  const theme = useTheme();
  return (
    <Link style={{ textDecoration: "none" }} to={link}>
      <Typography variant="h4" sx={{
        padding: "16px",
        borderRadius: "5px",
        opacity: "0.7",
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.main,
        fontSize: smallScreen ? "1.5rem" : null
      }}>{title}</Typography>
    </Link>
  );
}

const Page = ({ background, children, vOffset = "97vh", smallScreen = true }) => {
  const theme = useTheme();
  const { pathname: currentPage } = useLocation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.grey[200],
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: theme.palette.grey[200],
          backgroundImage: `url(${background})`,
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: smallScreen ? "auto 100vh" : "cover",
          position: "fixed",
          height: "100vh",
          width: "100vw"
        }}
      />
        <Box sx={{
          position: "absolute",
          marginTop: theme.spacing(2),
          display:"flex",
          width: "100%",
          justifyContent: "space-between",
          width: "80%",
          alignItems: "center"
        }}
        >
          {["/", "/blogs"].includes(currentPage.toLowerCase()) ? 
          <Navigation smallScreen={smallScreen} link="/about" title="About"/> :
          <Navigation smallScreen={smallScreen} link="/blogs" title="Blogs"/>
      }
      <Typography variant="h2" sx={{
        color: theme.palette.primary.dark,
        textAlign: "center",
        textShadow: currentPage.toLowerCase().includes("stories") ? `-1px 0 ${theme.palette.primary.main}, 0 1px ${theme.palette.primary.main}, 1px 0 ${theme.palette.primary.main}, 0 -1px ${theme.palette.primary.main}` : "",
        fontSize: smallScreen ? "3.5rem" : null
      }}>The Brink</Typography>
      {currentPage.toLowerCase().includes("stories") ? 
          <Navigation smallScreen={smallScreen} link="/about" title="About"/> :
          <Navigation smallScreen={smallScreen} link="/stories" title="Stories"/>
      }
    </Box>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "85%",
          padding: smallScreen ? "25px" : "50px",
          margin: `${vOffset} 0 10px 0px`,
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.primary.main,
          boxShadow: "0 -25px 100px rgba(0,0,0)",
          boxSizing: "border-box",
          zIndex: "1"
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}

export default Page;
