import "./styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
function Reddit() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then((res) => {
      const resArray = res.data.data.children;
      console.log(res.data.data.children);
      setPosts(resArray);
    });
  }, []);
  return (
    <div className="App">
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.data.id}>
            <strong>{post.data.author}</strong> -{" "}
            <a href={post.data.url}>Link to author</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Reddit;
