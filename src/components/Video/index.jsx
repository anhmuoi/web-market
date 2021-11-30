import React from 'react';
import video1 from '../../images/video1.png';
import error from '../../images/error.png';

function Video(props) {
  return (
    <div className="video">
      <div className="video__container">
        <h1 className="video__title">what happened</h1>
        <p className="video__desc">How to create mobile-optimized videos in minutes. Not a designer</p>
        <p className="video__desc video__desc2">every team makes a lot of videos Can be trimmed. Take the first</p>
        <a className="video__button" href="/#">
          SEE MORE
        </a>
        <img className="video__center" alt="" src={video1}></img>
        <img  className='video__error' alt='' src={error} />
      </div>
    </div>
  );
}

export default Video;
