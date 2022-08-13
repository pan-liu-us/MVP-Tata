import React, { useState } from 'react';
import './VideoSidebar.css';
import { MdFavorite } from 'react-icons/md';
import { RiMessage2Fill } from 'react-icons/ri';
import { FaShare } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';

function VideoSidebar({ likesCount, commentsCount, sharesCount, onShowComments, comments}) {
  const [isLiked, setIsLiked] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false)

  return (
    <div className="video_sidebar">
      <div className="video_sidebar_button">
      {isLiked ? (
          <MdFavorite fontSize="xx-large"  style={{color: "#E34A6F"}} onClick={(e) => setIsLiked(false)}/>
       ) : (
          <MdFavorite fontSize="xx-large" style={{color: "#EDE1CF"}} onClick={(e) => setIsLiked(true)}/>
       )}
        <p>{isLiked ? likesCount + 1 : likesCount}</p>
      </div>
      <div className="video_sidebar_button">
        <RiMessage2Fill fontSize="xx-large" onClick={() => setIsCommentsOpen(true)}/>
        <BottomSheet open={isCommentsOpen}>
        <AiFillCloseCircle style={{position: "absolute", top: "10px", right: "10px", fontSize: "30px", color: "e73c7e"}} onClick={() => setIsCommentsOpen(false)}/>
          {comments.map((comment, idx) =>
            <div className="commentText" key={idx}>{comment}</div>
          )}
        </BottomSheet>
        <p>{commentsCount}</p>
      </div>
      <div className="video_sidebar_button">
        <FaShare fontSize="xx-large" />
        <p>{sharesCount}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;