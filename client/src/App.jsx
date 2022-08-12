import React, { useState, useEffect } from 'react';
import Video from './components/Video.jsx';
import Mood from './components/Mood.jsx';
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
      <Mood />
      <div className="app_videos">
      {posts.map((post) => (
        <Video key={post._id}
         url={post.url}
         channel={post.channel}
         description={post.description}
         song={post.song}
         likesCount={Number(post.likesCount)}
         commentsCount={Number(post.commentsCount)}
         sharesCount={Number(post.sharesCount)}
         comments={post.comments}
        />
      ))}
      </div>
    </div>
  );
}

export default App;