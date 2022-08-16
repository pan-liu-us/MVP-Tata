import React from 'react';
import './Share.css'

function Share() {
  return (
    <div className="share">
      <span>Rate & Share</span>
      <nav>
        <a href="https://twitter.com/">
          <i className="fa fa-twitter" />
        </a>
        <a href="https://www.facebook.com/">
          <i className="fa fa-facebook" />
        </a>
        <a href="https://www.instagram.com/">
          <i className="fa fa-instagram" />
        </a>
        <a href="https://github.com/">
          <i className="fa fa-github" />
        </a>
      </nav>
    </div>
  )
}

export default Share;

