import Page from "../components/Page";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { blogs } from "../data/blogs.js";
import background from '../images/_DSC1261.jpeg';

const fromMarkdown = (paragraph, index) => {
  const regex = /(?<prefix>[^_*]*)(?<openingTag>[_*])(?<content>.*?)(?<closingTag>[_*])(?<postfix>[^_*]*)/g;
  let elements = [];
  let results;
  let lastIndex;
  while ((results = regex.exec(paragraph)) !== null) {
    if (results.groups.prefix) {
      elements.push(<span>{results.groups.prefix}</span>);
    }
    if (results.groups.openingTag === "_") {
      elements.push(<i>{results.groups.content}</i>);
    } else if (results.groups.openingTag === "*") {
      elements.push(<b>{results.groups.content}</b>);
    }
    if (results.groups.postfix) {
      elements.push(<span>{results.groups.postfix}</span>);
    }
    lastIndex = regex.lastIndex;
  }
  const remainder = paragraph.substring(lastIndex);
  return (
    <Typography
      key={index}
      variant="body1"
      sx={{ textAlign: "center" }}
    >
      {elements}
    {remainder.length > 0 ? remainder : "\u00A0"}
    </Typography>
  );
};

function Blog() {
  const smallScreen = useMediaQuery('(max-width:800px)');
  return (
    <Page background={background} smallScreen={smallScreen}>
        {blogs.map((blog, index) => {
          return (
            <Box
              key={index}
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
                return fromMarkdown(paragraph, index);
              })}
            </Box>
          );
        })}
        </Page>
          );
}

export default Blog;
