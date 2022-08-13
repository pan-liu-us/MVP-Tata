import React from 'react';
import './Share.css'

function Share() {
  return (
    <div className="share">
      <span>Rate & Share</span>
      <nav>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
        <a href="#">
          <i className="fa fa-instagram" />
        </a>
        <a href="#">
          <i className="fa fa-github" />
        </a>
      </nav>
    </div>
  )
}

export default Share;

