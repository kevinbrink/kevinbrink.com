import "./App.css";
import { blogs } from "./data/blogs.js";
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      {blogs.map((blog) => {
        return (
          <Box>
            <Typography variant="h1">{blog.title}</Typography>
            <Typography variant="h3">{blog.date}</Typography>
            <Typography variant="body">{blog.body}</Typography>
          </Box>
        );
      })}
    </div>
  );
}

export default App;
