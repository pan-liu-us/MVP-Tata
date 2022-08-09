import React from 'react';
import Video from './components/Video.jsx'
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>🚀 TATA, Get Started </h1>
      <div className="app_videos">
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;