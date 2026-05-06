function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <EngkeyWordmark className="hero__brand" />
          <span className="hero__badge">
            <span className="dot"></span>
            5~7세 유치원·어린이집을 위한 Engkey 키오스크
          </span>
          <h1>
            아이 스스로 배우는<br/>
            <span className="accent">Engkey</span> 영어 수업
          </h1>
          <p className="hero__sub">
            터치 한 번으로 시작하는 체계적인 영어 학습.
            교사는 대시보드에서 모든 학생의 진도를 한눈에 확인하세요.
          </p>
          <div className="hero__ctas">
            <a href="#contact" className="btn btn--primary">
              무료 데모 신청하기
              <Icon name="arrow" size={18}/>
            </a>
            <a href="#gallery" className="btn btn--ghost">
              <Icon name="play" size={16}/>
              학습 활동 둘러보기
            </a>
          </div>
          <div className="hero__platforms">
            <strong>지원 플랫폼</strong>
            <span className="pf">📱 Android</span>
            <span className="pf">🍎 iOS</span>
            <span className="pf">💻 Windows</span>
            <span className="pf">🌐 Web</span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="float-chip float-chip--sticker float">
            <div className="ico">⭐</div>
            <div>
              오늘의 스티커 획득!
              <div className="float-chip__sub">학습 완료 · 7일 연속</div>
            </div>
          </div>
          <div className="profile-device">
            <div className="profile-screen">
              <div className="profile-rainbow profile-rainbow--top"></div>
              <div className="profile-rainbow profile-rainbow--bottom"></div>
              <div className="profile-cloud profile-cloud--top"><span></span><span></span><span></span></div>
              <div className="profile-cloud profile-cloud--mid"><span></span><span></span><span></span></div>
              <div className="profile-cloud profile-cloud--bottom"><span></span><span></span><span></span></div>
              <span className="profile-star profile-star--one">★</span>
              <span className="profile-star profile-star--two">★</span>
              <span className="profile-heart">♥</span>

              <div className="profile-topbar">
                <EngkeyWordmark className="profile-logo" />
                <h3><span>★</span> Find Your Name</h3>
              </div>

              <div className="profile-section-title">CLASS ROSTER</div>
              <div className="profile-roster">
                <button type="button" className="profile-student-card">
                  <span className="profile-student-badge">지</span>
                  <strong>지우</strong>
                  <small>Week 2</small>
                  <span className="profile-status profile-status--pending">
                    <i></i> Not finished today
                  </span>
                </button>
                <button type="button" className="profile-student-card">
                  <span className="profile-student-badge">서</span>
                  <strong>서아</strong>
                  <small>Week 2</small>
                  <span className="profile-status profile-status--done">
                    <i></i> Finished today
                  </span>
                </button>
              </div>

              <div className="profile-bottom-bar">
                <div className="profile-selected">
                  <span>?</span>
                  <div>
                    <strong>No name selected</strong>
                    <small>Class roster</small>
                  </div>
                </div>
                <button type="button" className="profile-start" disabled>Let's Go! →</button>
              </div>
            </div>
          </div>
          <div className="float-chip float-chip--mic float-delay">
            <div className="ico">👆</div>
            <div>
              이름을 눌러 시작
              <div className="float-chip__sub">Find Your Name</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
