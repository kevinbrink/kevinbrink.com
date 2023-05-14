import Page from "../components/Page";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { blogs } from "../data/blogs.js";
import background from '../images/_DSC1261.jpeg';
import { useTheme } from "@emotion/react";

function Blog() {
  const smallScreen = useMediaQuery('(max-width:800px)');
  const theme = useTheme();
  return (
    <Page background={background} smallScreen={smallScreen}>
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
        </Page>
          );
}

export default Blog;
