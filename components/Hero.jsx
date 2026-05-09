function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <EngkeyWordmark className="hero__brand" />
          <span className="hero__badge">
            <span className="dot"></span>
            매일 듣고 말하는 5~7세 영어 루틴
          </span>
          <h1>
            매일 10분,<br/>
            아이 스스로 <span className="accent">듣고 말하는</span> 영어
          </h1>
          <p className="hero__sub">
            태블릿에서 미국식 발음 음성을 듣고 따라 말하며, 매주 새로운 단어를 포인트 보상과 함께 익힙니다.
            교사는 대시보드에서 학습 일수와 진도를 한눈에 확인합니다.
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
            <strong>핵심 루틴</strong>
            <span className="pf">미국식 발음 음성</span>
            <span className="pf">매주 새 단어</span>
            <span className="pf">포인트 보상</span>
            <span className="pf">교사 대시보드</span>
          </div>
        </div>

        <div className="hero__visual hero__visual--scene">
          <figure className="hero-photo" aria-label="Children using Engkey on a classroom tablet">
            <div className="hero-photo__fallback" aria-hidden="true">
              <div className="hero-photo__tablet">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <img
              className="hero-photo__image"
              src="assets/images/engkey-hero-kids.png"
              alt="Children using Engkey on a tablet in a bright classroom"
              loading="eager"
              onError={(event) => {
                const frame = event.currentTarget.closest(".hero-photo");
                if (frame) frame.classList.add("is-missing");
                event.currentTarget.hidden = true;
              }}
            />
          </figure>
          <div className="float-chip float-chip--sticker float">
            <div className="ico">▶</div>
            <div>
              미국식 발음 듣기
              <div className="float-chip__sub">Listen & Repeat</div>
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
            <div className="ico">⭐</div>
            <div>
              이번 주 새 단어 15개
              <div className="float-chip__sub">Week 2 · Updated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
