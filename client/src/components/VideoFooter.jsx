import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';
import record from '../assets/music_record.png'

function VideoFooter() {
  return (
    <div className="video_footer">
      <div className="video_footer_text">
        <h3>@george</h3>
        <p>😠 How are you feeling today 😄</p>
        <div className="video_footer_music">
          <MusicNoteIcon className="video_footer_music_note" />
          <Ticker mode="smooth">
            {({ index }) => (
                <>
                    <p>This is a song!</p>
                </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="video_footer_record"
        src={record} alt="spinning music record"
      />
    </div>
  );
}

export default VideoFooter;

