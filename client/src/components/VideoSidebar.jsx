import React, { useState } from 'react';
import './VideoSidebar.css';
import { MdFavorite } from 'react-icons/md';
import { RiMessage2Fill } from 'react-icons/ri';
import { FaShare } from 'react-icons/fa';

function VideoSidebar({ likes, comments, shares}) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="video_sidebar">
      <div className="video_sidebar_button">
      {isLiked ? (
          <MdFavorite fontSize="xx-large"  style={{color: "#E34A6F"}} onClick={(e) => setIsLiked(false)}/>
       ) : (
          <MdFavorite fontSize="xx-large" style={{color: "#EDE1CF"}} onClick={(e) => setIsLiked(true)}/>
       )}
        <p>{isLiked ? likes + 1 : likes}</p>
      </div>
      <div className="video_sidebar_button">
        <RiMessage2Fill fontSize="xx-large" />
        <p>{comments}</p>
      </div>
      <div className="video_sidebar_button">
        <FaShare fontSize="xx-large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;