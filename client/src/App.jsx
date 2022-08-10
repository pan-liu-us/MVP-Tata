import React from 'react';
import Video from './components/Video.jsx'
import './App.css';
import sampleVideo from './assets/IMG_0624.MOV';

function App() {
  return (
    <div className="app">
      <h1>🚀 TATA, Get Started </h1>
      <div className="app_videos">
        <Video
         url={sampleVideo}
         channel="george"
         description="😠 How are you feeling today 😄"
         song="original sound - george"
         likesCount={123}
         sharesCount={456}
         messagesCount={78}
        />
      </div>
    </div>
  );
}

export default App;