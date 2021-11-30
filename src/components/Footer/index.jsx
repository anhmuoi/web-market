import React from 'react';
import nImg from '../../images/n.png';
import fbImg from '../../images/fb.png';
import chatImg from '../../images/chat.png';

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__topLeft">
            <div className="footer__title footer__happen">
              <p>what happened</p>
            </div>
            <div className="footer__content footer__textLeft">
              <p>[공지] 개인 정보 처리 방침 변경 사전 안내 </p>
              <p>[공지] 29CM 강남 스토어 영업 종료 </p>
              <p>[공지] 개인 정보 처리 방침 변경 사전 안내</p>
              <p>[공지] iOS 10 이하 버전 지원 중단 안내</p>
              <p>[공지] 개인 정보 처리 방침 변경 사전 안내</p>
            </div>
          </div>
          <div className="footer__topRight">
            <div className="footer__topRight1">
              <div className="footer__title">
                <p>about us</p>
              </div>
              <div className="footer__content">
                <p>회사 소개</p>
                <p>인재 채용</p>
                <p>상시 할인 혜택</p>
              </div>
            </div>
            <div className="footer__topRight2">
              <div className="footer__title">
                <p>my order</p>
              </div>
              <div className="footer__content">
                <p>내 주문</p>
                <p>주문 배송</p>
                <p>취소 / 교환 / 반품 내역</p>
                <p>상품 리뷰 내역</p>
                <p>증빙 서류 발급</p>
              </div>
            </div>
            <div className="footer__topRight3">
              <div className="footer__title">
                <p>my account</p>
              </div>
              <div className="footer__content">
                <p>회원 정보 수정</p>
                <p>회원 등급</p>
                <p>마일리지 현황</p>
                <p>쿠폰</p>
              </div>
            </div>
            <div className="footer__topRight4">
              <div className="footer__title">
                <p>help</p>
              </div>
              <div className="footer__content">
                <p>1 : 1 상담 내역</p>
                <p>상품 Q & A 내역</p>
                <p>공지 사항</p>
                <p>자주하는 질문</p>
                <p>고객의 소리</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottomLeft">
            <p>
              © 2020-2021 what happened corp l <span> (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 </span>: 356-00-00000 ㅣ test0101@what
              happened.co.kr
            </p>
            <p>
              서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l<span> 서비스 이용약관 l 개인정보처리방침</span>
            </p>
          </div>
          <div className="footer__bottomRight">
            <img src={nImg} alt="n" />
            <img src={fbImg} alt="fb" />
            <img src={chatImg} alt="chat" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
