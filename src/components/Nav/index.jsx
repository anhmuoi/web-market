import React from 'react';
import logo from '../../images/logo.png';


function Nav(props) {
  // const [showNavGray, setShowNavGray] = useState(false);

  // const transitionNavBar = () =>{
  //     if(window.scrollY < 100)
  //     {
  //         setShowNavGray(false);
  //     }
  //     else{
  //         setShowNavGray(true);
  //     }
  // };
  // useEffect(()=>{
  //     window.addEventListener('scroll', transitionNavBar);
  //     return () => window.removeEventListener('scroll', transitionNavBar);
  // }, [])
  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="nav__button">
          <a href="/#">INTRODUCTION</a>
          <a href="/#">SOLUTION</a>
          <a href="/#" className="nav__gach">
            RATE PLAN
          </a>
          <a href="/#">LOGIN</a>
          <a href="/#">APPLY FOR FREE USE</a>
        </div>
        <div className="nav__menu">
          <ion-icon name="menu"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default Nav;
