function Testimonials() {
  const stats = [
    { num: "120", suf: "+", lbl: "도입 기관" },
    { num: "3,400", suf: "+", lbl: "학습 중인 학생" },
    { num: "92", suf: "%", lbl: "교사 만족도" },
    { num: "15", suf: "min", lbl: "평균 학습 시간" },
  ];
  const tms = [
    { quote: "아이들이 키오스크 앞에 줄을 서요. 활동 시작 5분 전부터 자기가 먼저 하겠다고 합니다. 반복 학습 부담이 정말 많이 줄었어요.",
      name: "김OO 원장", role: "OO어린이집 · 분당", c: "c1", initial: "K" },
    { quote: "스티커 보상이 바로 보이니까 아이들이 수업을 끝까지 해내려는 분위기가 생겼어요. 교사도 진도 확인이 훨씬 편해졌습니다.",
      name: "박OO 교사", role: "OO유치원 · 송파", c: "c2", initial: "P" },
    { quote: "대시보드에서 누가 며칠째 안 했는지 한눈에 보여요. 학부모 상담 때 진도 이야기를 구체적으로 할 수 있어 신뢰가 올라갔습니다.",
      name: "이OO 원장", role: "OO어린이집 · 일산", c: "c3", initial: "L" },
  ];
  return (
    <section className="section section--ivory">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">Social Proof</span>
          <h2 className="section-title">현장이 검증한 도입 효과</h2>
          <p className="section-subtitle">
            실제로 Engkey를 도입한 유치원·어린이집 선생님들의 후기입니다.
          </p>
        </div>
        <div className="stats">
          {stats.map((s, i) => (
            <div key={s.lbl} className="stat reveal" style={{transitionDelay: `${i*60}ms`}}>
              <div className="num">{s.num}<small>{s.suf}</small></div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
        <div className="testimonials">
          {tms.map((t, i) => (
            <div key={t.name} className="testimonial reveal" style={{transitionDelay: `${i*80}ms`}}>
              <p className="quote">{t.quote}</p>
              <div className="testimonial__author">
                <div className={`testimonial__avatar ${t.c}`}>{t.initial}</div>
                <div>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Testimonials = Testimonials;
