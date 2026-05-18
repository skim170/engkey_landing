function HowItWorks() {
  const steps = [
    { n: "1", emoji: "👩‍🏫", t: "교사 설정",
      d: "학생 등록, 연령 프로그램 선택, 시작일 설정. 단 한 번의 세팅으로 준비 완료." },
    { n: "2", emoji: "👆", t: "학생 선택",
      d: "아이가 자신의 이름 카드를 터치해 학습을 시작합니다. 별도 로그인 불필요." },
    { n: "3", emoji: "⭐", t: "학습 → 보상",
      d: "10~15분 활동 완료 후 디지털 스티커 획득. 진도는 자동 저장됩니다." },
  ];
  return (
    <section className="section section--purple" id="how">
      <div className="container">
        <div className="how__layout">
          <div className="how__left">
            <div className="reveal">
              <span className="eyebrow">How It Works</span>
              <h2 className="section-title" style={{margin: "0 0 12px"}}>도입부터 수업까지, 단 3단계</h2>
              <p className="section-subtitle" style={{margin: "0 0 48px"}}>
                복잡한 셋업 없이 키오스크를 두는 즉시 운영을 시작할 수 있습니다.
              </p>
            </div>
            <div className="how__steps">
              {steps.map((s, i) => (
                <div key={s.n} className="how-step reveal" style={{transitionDelay: `${i*120}ms`}}>
                  <div className="how-step__circle">
                    <span style={{fontSize: 32}}>{s.emoji}</span>
                    <span className="how-step__num">{s.n}</span>
                  </div>
                  <div className="how-step__body">
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <figure className="how__photo reveal" aria-label="교실에 배치된 Engkey 태블릿 키오스크">
            <img
              src="assets/images/kiosk_in_class-rotated-display.jpg"
              alt="어린이집 교실에 배치된 Engkey 태블릿 키오스크"
              loading="lazy"
              onError={(event) => {
                const frame = event.currentTarget.closest(".how__photo");
                if (frame) frame.classList.add("is-missing");
                event.currentTarget.hidden = true;
              }}
            />
            <figcaption>교실 한쪽에 바로 놓고 시작</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
window.HowItWorks = HowItWorks;
