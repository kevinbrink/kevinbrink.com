import "./App.css";
import { Fragment } from "react";
import { blogs } from "./data/blogs.js";

function App() {
  return (
    <div className="App">
      {blogs.map((blog) => {
        return (
          <Fragment>
            <h1>{blog.title}</h1>
            <h3>{blog.date}</h3>
            <p>{blog.body}</p>
          </Fragment>
        );
      })}
    </div>
  );
}

export default App;
