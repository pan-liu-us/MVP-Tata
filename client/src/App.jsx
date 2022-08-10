import React from 'react';
import Video from './components/Video.jsx'
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>🚀 TATA, Get Started </h1>
      <div className="app_videos">
        <Video
         url="https://i.imgur.com/eg945rz.mp4"
         channel="george"
         description="😠 How are you feeling today 😄"
         song="original sound - george"
         likes="123"
         comments="456"
         shares="78"
        />
      </div>
    </div>
  );
}

export default App;