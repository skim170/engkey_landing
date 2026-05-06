function Features() {
  const features = [
    { icon: "target", color: "c-purple", title: "연령별 맞춤 커리큘럼",
      desc: "5·6·7세 별도 프로그램. 어휘부터 문장까지 단계적으로 설계된 학습 흐름.",
      tag: "Curriculum" },
    { icon: "chart", color: "c-pink", title: "교사 대시보드",
      desc: "학생별 학습 일수·스티커·진도 현황을 실시간 모니터링합니다.",
      tag: "Dashboard" },
    { icon: "star", color: "c-yellow", title: "스티커 보상 시스템",
      desc: "하루 학습을 완료하면 디지털 스티커를 지급해 성취감과 지속성을 강화합니다.",
      tag: "Reward" },
  ];
  return (
    <section className="section section--cream" id="features">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">Core Features</span>
          <h2 className="section-title">아이는 즐겁게, 교사는 든든하게.</h2>
          <p className="section-subtitle">
            Engkey는 5~7세의 학습 특성에 맞춰 설계된 3가지 핵심 기능을 제공합니다.
          </p>
        </div>
        <div className="features__grid">
          {features.map((f, i) => (
            <div key={f.title} className={`feature-card ${f.color} reveal`} style={{transitionDelay: `${i*80}ms`}}>
              <div className="feature-card__icon">
                <Icon name={f.icon} size={28}/>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <span className="feature-card__tag">{f.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Features = Features;
