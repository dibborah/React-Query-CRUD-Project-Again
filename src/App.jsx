import React from "react";
import { Route, Routes } from "react-router-dom";
import { EditPost, Post, PostList } from "./pages";

const App = () => {
  return (
    <div>
      <h1>Awesome Blog</h1>
      <Routes>
        <Route path="/" element={<PostList />}></Route>
        <Route path="/post/:id" element={<Post />}></Route>
        <Route path="/post/:id/edit" element={<EditPost />}></Route>
      </Routes>
    </div>
  );
};

export default App;
