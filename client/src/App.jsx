import React, { useState, useEffect } from 'react';
import Video from './components/Video.jsx';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get('/tata/posts');
      setPosts(res.data);
      return res;
    }

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <h1>🚀 TATA, Get Started </h1>
      <div className="app_videos">
      {posts.map((post) => (
        <Video
         url={post.url}
         channel={post.channel}
         description={post.description}
         song={post.song}
         likes={post.likes}
         comments={post.comments}
         shares={post.shares}
        />
      ))}
      </div>
    </div>
  );
}

export default App;