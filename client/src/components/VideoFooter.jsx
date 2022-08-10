import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';
import record from '../assets/music_record.png'

function VideoFooter({ channel, description, song}) {
  return (
    <div className="video_footer">
      <div className="video_footer_text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="video_footer_music">
          <MusicNoteIcon className="video_footer_music_note" />
          <Ticker mode="smooth">
            {({ index }) => (
                <>
                    <p>{song}</p>
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

