import React, { useState, useRef }  from 'react';
import VideoFooter from './VideoFooter.jsx';
// import VideoSidebar from './VideoSidebar.jsx';
import './Video.css';


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
        src="https://v16m-webapp.tiktokcdn-us.com/998cdd57361c8f9ade52debb3b31d0da/62f32c46/video/tos/useast5/tos-useast5-ve-0068c003-tx/075125710d2142989e1e81098994aa6a/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1522&bt=761&cs=0&ds=3&ft=ebtHKH-qMyq8ZqMw_we2NtMtfl7Gb&mime_type=video_mp4&qs=0&rc=NDdmN2U5aTw5O2kzNmg3NkBpMzNwPGc6ZmpuZTMzZzczNEBfY18xXzNgNWAxNmM1LWMuYSNiXl9vcjRvNTJgLS1kMS9zcw%3D%3D&l=202208092155418BE7900292420982F96B"></video>
      <VideoFooter />
      {/* <VideoSidebar /> */}
    </div>
  );
}

export default Video;