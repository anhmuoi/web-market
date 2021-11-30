import React from 'react';
import arrowImg from '../../images/arrow.png';
import imgMainBanner from '../../images/whathappen.png';

function MainBanner(props) {
  return (
    <div className="mainbanner">
      <div className="mainbanner__container">
        <h1 className="mainbanner__title">launching open event!</h1>
        <img src={imgMainBanner} alt="" />
        <div className="mainbanner__step">
          <div className="mainbanner__step1">Lorem Ipsum</div>
          <div className="mainbanner__arrow1">
            <img src={arrowImg} alt="" />
          </div>
          <div className="mainbanner__step2">market Launching!</div>
          <div className="mainbanner__arrow2">
            <img src={arrowImg} alt="" />
          </div>
          <div className="mainbanner__step1">Lorem Ipsum</div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
