import React from 'react';
import coin from '../../images/coin.png';
import hot from '../../images/hot.png';
import lol from '../../images/lol.png';
import new1 from '../../images/new1.png';
import new2 from '../../images/news2.png';
import new3 from '../../images/news3.png';
import new4 from '../../images/news4.png';
import new5 from '../../images/news5.png';
import xx1 from '../../images/xx1.png';
import xx2 from '../../images/xx2.png';

function Issue(props) {
  return (
    <div className="issue">
      <div className="issue__container">
        <h1 className="issue__title">Happened’s issue</h1>
        <p className="issue__desc">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도, 모든 팀에서</p>
        <p className="issue__desc issue__desc2">
          다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
        <a className="issue__button" href="/#">
          SEE MORE
        </a>

        <div className="issue__list"></div>
        <img className="issue__xx1" src={xx1} alt="#"></img>
        <img className="issue__xx2" src={xx2} alt="#"></img>
        <div className="issue__img">
          <img src={new1} alt="#" />
          <img src={new2} alt="#" />
          <img src={new3} alt="#" />
          <img src={new4} alt="#" />
          <img src={new5} alt="#" />
          <img className="issue__hot" src={hot} alt="#" />
          <img className="issue__coin" src={coin} alt="#" />
          <img className="issue__lol" src={lol} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default Issue;
