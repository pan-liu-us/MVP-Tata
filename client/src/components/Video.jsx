import React, { useState, useRef }  from 'react';
import VideoFooter from './VideoFooter.jsx';
import VideoSidebar from './VideoSidebar.jsx';
import './Video.css';
import sampleVideo from '../assets/IMG_0624.MOV';


function Video() {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (isPlay) {
      videoRef.current.pause();
      setIsPlay(false);
    } else {
      videoRef.current.play();
      setIsPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video_player"
        loop
        ref={videoRef}
        src={sampleVideo}></video>
      <VideoFooter channel='george' description='😠 How are you feeling today 😄' song='original sound - george' />
      <VideoSidebar likesCount={123} messagesCount={456} sharesCount={78}/>
    </div>
  );
}

export default Video;