import React from 'react';
import go1 from '../../images/go1.png';
import number1 from '../../images/number1.png';
import number2 from '../../images/number2.png';
import number3 from '../../images/number3.png';
import img1 from '../../images/product1.png';
import img2 from '../../images/product2.png';
import img3 from '../../images/product3.png';

function BestProducts(props) {
  return (
    <div className="best">
      <div className="best__container">
        
        <h1 className="best__title">Best Product</h1>
      
        <p className="best__desc">How to create mobile-optimized videos in minutes. Not a designer, 
every team makes a lot of videos Can be trimmed. Take the first </p>
          <div className="best__list">
            <div className="best__product1">
              <img className="best__number" src={number1} alt="" />
              <img className="best__img" src={img1} alt="" />
              <img className="best__go" src={go1} alt="" />
            </div>
            <div className="best__product2">
              <img className="best__number" src={number2} alt="" />
              <img className="best__img" src={img2} alt="" />
              <img className="best__go" src={go1} alt="" />
            </div>
            <div className="best__product3">
              <img className="best__number" src={number3} alt="" />
              <img className="best__img" src={img3} alt="" />
              <img className="best__go" src={go1} alt="" />
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default BestProducts;
