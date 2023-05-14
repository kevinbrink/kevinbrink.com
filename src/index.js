import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Stories from "./pages/Stories";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/about"
          element={<About />}
          />
          <Route
          path="/stories"
            element={<Stories />}
          />
          <Route
            path="*"
            element={<Blog />}
          />
        </Routes>
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
