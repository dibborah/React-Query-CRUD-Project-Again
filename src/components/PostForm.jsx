import React, { useState } from "react";

const PostForm = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const renderField = (label) => {
    const handleInputChange = (e) => {
      setPost({
        ...post,
        [e.target.name]: e.target.value,
      });
    };

    return (
      <div>
        <label>{label}</label>
        <input
          type="text"
          name={label.toLowerCase()}
          value={post[label.toLowerCase()]}
          onChange={handleInputChange}
        />
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
    setPost({
      title: "",
      body: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      {renderField("Title")}
      {renderField("Body")}
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
