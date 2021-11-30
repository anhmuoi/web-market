import React from 'react';
import heart from '../../images/heart.png';
import img1 from '../../images/img1.png';
import img10 from '../../images/img10.png';
import img11 from '../../images/img11.png';
import img12 from '../../images/img12.png';
import img13 from '../../images/img13.png';
import img14 from '../../images/img14.png';
import img15 from '../../images/img15.png';
import img16 from '../../images/img16.png';
import img17 from '../../images/img17.png';
import img18 from '../../images/img18.png';
import img19 from '../../images/img19.png';
import img2 from '../../images/img2.png';
import img20 from '../../images/img20.png';
import img21 from '../../images/img21.png';
import img22 from '../../images/img22.png';
import img23 from '../../images/img23.png';
import img24 from '../../images/img24.png';
import img25 from '../../images/img25.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';
import img6 from '../../images/img6.png';
import img7 from '../../images/img7.png';
import img8 from '../../images/img8.png';
import img9 from '../../images/img9.png';


const imgList = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, ];

function Products(props) {
  return (
    <div className="product">
      <div className="product__container">
        <div className="product__container__img">
          {imgList.map((img, index) => (
            <div className="product__list" key={index}>
              <div className="product__img">
                <img src={img} alt="product" />
              </div>
              <div className="product__content">
                <div className="product__top">[what happen] How to create </div>
                <div className="product__bottom">
                  <div className="product__price">2,500 won</div>
                  <div className="product__like">
                    <img src={heart} alt="" />
                    <p>236</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a className="product__button" href="/#">SEE MORE</a>
      </div>
    </div>
  );
}

export default Products;
