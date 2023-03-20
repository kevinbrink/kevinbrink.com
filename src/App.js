import { blogs } from "./data/blogs.js";
import { Box, Typography, Paper, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import background from './background.jpeg';
import logo from "./logo.svg";

        //<img src={logo} className="App-logo" alt="logo" />
function App() {
  const theme = useTheme();
  const smallScreen = useMediaQuery('(max-width:800px)');
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.grey[200],
      }}
  >
      <img src={logo} />
      <img src={background} />
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
      <Typography variant="h2" sx={{
        position: "absolute",
        marginTop: theme.spacing(2),
        color: theme.palette.primary.dark
      }}>The Brink</Typography>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "85%",
          padding: smallScreen ? "25px" : "50px",
          margin: "97vh 0 10px 0px",
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.primary.main,
          boxShadow: "0 -25px 100px rgba(0,0,0)",
          boxSizing: "border-box",
          zIndex: "1"
        }}
      >
        {blogs.map((blog) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h3" sx={{ textAlign: "center" }}>{blog.title}</Typography>
              <Typography
                variant="h6"
                sx={{
                  width: "100%",
                  textAlign: smallScreen ? "center" : "right",
                }}
              >
                {blog.date}
              </Typography>
              {blog.body.split("\n").map((paragraph, index) => {
                return (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{ textAlign: "center" }}
                  >
                    {paragraph.length > 0 ? paragraph : "\u00A0"}
                  </Typography>
                );
              })}
            </Box>
          );
        })}
      </Paper>
    </Box>
  );
}

export default App;
