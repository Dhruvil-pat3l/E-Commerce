import React, { useState, useEffect } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    text: "",
    user: "",
    rate: ""
  });

  useEffect(() => {
    // retrieve comments from session storage
    const storedComments = sessionStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    // store new comment in session storage
    const updatedComments = [...comments, newComment];
    sessionStorage.setItem("comments", JSON.stringify(updatedComments));
    setComments(updatedComments);
    setNewComment({
      text: "",
      user: "",
      rate: ""
    });
  };

  const handleChange = e => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="comments">
      <h3>Comments</h3>
      {comments.map((comment, i) => (
        <div key={i} className="comment">
          <h4>User: {comment.user}</h4>
          <p><strong>Rating: </strong>{comment.rate} star</p>
          <p>Comment: {comment.text}</p>
          
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          placeholder="Your Name"
          value={newComment.user}
          onChange={handleChange}
        />
       
        <select name="rate" onChange={handleChange}>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>


        <textarea
          name="text"
          placeholder="Leave a Comment"
          value={newComment.text}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Comments;