import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';
import record from '../assets/music_record.png'

function VideoFooter() {
  return (
    <div className="video_footer">
      <div className="video_footer_text">
        <h3>@bellapoarch</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
      {/* <img
        className="video_footer_record"
        src="https://pixy.org/src2/689/6893569.png" alt="spinning music record"
      /> */}
      <img
        className="video_footer_record"
        src={record} alt="spinning music record"
      />
    </div>
  );
}

export default VideoFooter;

