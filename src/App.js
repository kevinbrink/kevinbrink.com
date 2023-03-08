import { blogs } from "./data/blogs.js";
import { Box, Typography, createStyles, Paper } from "@mui/material";
import { useTheme } from "@emotion/react";

function App() {
  const theme = useTheme();
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
          padding: "20px",
          backgroundColor: "#f5db4f",
          width: "100%",
          textAlign: "center",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          "&:after": {
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            content: "''",
            position: "absolute",
            background:
              "repeating-linear-gradient(315deg, transparent, transparent 8px, #19213E73 8px, #19213E73 16px)",
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            padding: "8px",
            borderRadius: "5px",
            backgroundColor: theme.palette.text.primary,
            color: theme.palette.primary.contrastText,
            zIndex: "1",
          }}
        >
          Warning: Construction In Progress...
        </Typography>
      </Box>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "75%",
          padding: "50px",
          margin: "10px 0px",
          backgroundColor: theme.palette.grey[50],
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
              <Typography variant="h3">{blog.title}</Typography>
              <Typography
                variant="h6"
                sx={{
                  width: "100%",
                  textAlign: "right",
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
