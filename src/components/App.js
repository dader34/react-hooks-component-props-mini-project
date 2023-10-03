import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header";
import About from "./About";

// console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Test"/><Header name="Test"/>
      <About about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
