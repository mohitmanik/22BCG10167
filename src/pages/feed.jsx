import React from 'react'
import { useEffect, useState } from 'react';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http:/20.244.56.144/test/users/:userid/posts") 
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div>
      <h2>Feed</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.userid}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Feed;
