import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";



function App() {
  return (
    <div className="App">
      <Header blogData={blogData} />
      <About blogData={blogData} />
      <ArticleList blogData={blogData} />
      <Article blogData={blogData} />
    </div>
  );
}

export default App;
