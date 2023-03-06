import { blogs } from "./data/blogs.js";
import { Box, Typography, createStyles } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
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
            <Typography variant="h1">{blog.title}</Typography>
            <Typography variant="h3">{blog.date}</Typography>
            {blog.body.split("\n").map((paragraph) => {
              return <Typography variant="body1">{paragraph}</Typography>;
            })}
          </Box>
        );
      })}
    </Box>
  );
}

export default App;
