import React from 'react';
import './Video.css';

function Video() {
  return (
    <div className="video">
      <video
        className="video_player"
        loop
        src="https://v16m-webapp.tiktokcdn-us.com/998cdd57361c8f9ade52debb3b31d0da/62f32c46/video/tos/useast5/tos-useast5-ve-0068c003-tx/075125710d2142989e1e81098994aa6a/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1522&bt=761&cs=0&ds=3&ft=ebtHKH-qMyq8ZqMw_we2NtMtfl7Gb&mime_type=video_mp4&qs=0&rc=NDdmN2U5aTw5O2kzNmg3NkBpMzNwPGc6ZmpuZTMzZzczNEBfY18xXzNgNWAxNmM1LWMuYSNiXl9vcjRvNTJgLS1kMS9zcw%3D%3D&l=202208092155418BE7900292420982F96B"></video>
    </div>
  );
}

export default Video;