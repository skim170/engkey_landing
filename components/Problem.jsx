function Problem() {
  const items = [
    { n: "01", t: "반복 학습의 한계", d: "교사 한 명이 여러 아이에게 같은 패턴을 반복하기엔 시간도, 에너지도 부족합니다." },
    { n: "02", t: "흩어지는 집중력", d: "5~7세 아이들의 집중 시간은 짧습니다. 흥미가 없으면 5분도 어렵습니다." },
    { n: "03", t: "보이지 않는 진도", d: "학생마다 학습 속도가 다른데, 누가 어디까지 했는지 한눈에 파악하기 어렵습니다." },
  ];
  return (
    <section className="section section--ivory">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">Why Engkey</span>
          <h2 className="section-title">
            유아 영어 수업, 지금 이 순간에도<br/>이런 어려움을 겪고 계시지 않나요?
          </h2>
        </div>
        <div className="problem__grid">
          {items.map((it, i) => (
            <div key={it.n} className="problem-card reveal" style={{transitionDelay: `${i*80}ms`}}>
              <div className="problem-card__num">{it.n}</div>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
        <div className="problem__solution reveal">
          <h3>
            Engkey가 <span>아이 스스로 학습</span>하고<br/>
            교사는 진도를 관리하는 새로운 방식을 제안합니다.
          </h3>
          <a href="#features" className="btn btn--yellow">
            해결 방법 보기 <Icon name="arrow" size={18}/>
          </a>
        </div>
      </div>
    </section>
  );
}
window.Problem = Problem;
