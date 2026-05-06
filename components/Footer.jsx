function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#top" className="nav__logo" aria-label="Engkey 홈으로 이동">
              <EngkeyMark />
              <EngkeyWordmark />
            </a>
            <p>5~7세 유치원·어린이집을 위한 키오스크 영어 학습 서비스. 아이는 즐겁게, 교사는 든든하게.</p>
          </div>
          <div className="footer__col">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">핵심 기능</a></li>
              <li><a href="#how">도입 흐름</a></li>
              <li><a href="#gallery">학습 활동</a></li>
              <li><a href="#ages">연령별 프로그램</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><a href="#contact">도입 문의</a></li>
              <li><a href="#">자주 묻는 질문</a></li>
              <li><a href="#">파트너십</a></li>
              <li><a href="#">채용</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:hello@engkey.kr">hello@engkey.kr</a></li>
              <li><a href="#">카카오톡 채널</a></li>
              <li><a href="#">인스타그램</a></li>
              <li><a href="#">블로그</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Engkey. All rights reserved.</span>
          <span>
            <a href="#" style={{marginRight: 16}}>개인정보처리방침</a>
            <a href="#">이용약관</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
