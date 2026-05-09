function Features() {
  const features = [
    { icon: "mic", color: "c-purple", title: "매일 듣고 말하는 노출",
      desc: "하루 10~15분, 아이가 태블릿에서 단어를 듣고 따라 말하며 영어에 꾸준히 닿습니다.",
      tag: "Daily Routine" },
    { icon: "play", color: "c-pink", title: "미국식 발음 음성",
      desc: "단어와 예문을 미국식 발음 기준의 음성 파일로 제공해 처음부터 자연스러운 소리에 익숙해집니다.",
      tag: "Pronunciation" },
    { icon: "sparkle", color: "c-yellow", title: "매주 새로운 단어",
      desc: "매주 15개 단어 콘텐츠가 바뀌어 같은 화면만 반복하지 않고 다양한 어휘를 접합니다.",
      tag: "Weekly Update" },
  ];
  return (
    <section className="section section--cream" id="features">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">Core Features</span>
          <h2 className="section-title">영어를 더 자주 접하게 만드는 기본 구조</h2>
          <p className="section-subtitle">
            Engkey의 기본 가치는 거창한 수업보다, 아이들이 매일 조금씩 듣고 말하는 환경을 만드는 데 있습니다.
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
