import React, { useState, useRef }  from 'react';
import VideoFooter from './VideoFooter.jsx';
import VideoSidebar from './VideoSidebar.jsx';
import './Video.css';


function Video({ url, channel, description, song, likes, comments, shares}) {
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
        src={url}></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} comments={comments} shares={shares}/>
    </div>
  );
}

export default Video;