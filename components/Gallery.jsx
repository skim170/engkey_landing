function Gallery() {
  const activities = [
    {
      key: "show",
      label: "Show Word",
      sub: "단어 제시 + 미국식 발음",
      title: "단어를 듣고 보기",
      desc: "단어와 함께 그림, 미국식 발음 음성을 동시에 제공해 자연스럽게 어휘를 익히게 합니다.",
      age: "5세 이상",
      bg: "bg-pink",
      render: () => (
        <>
          <div className="word-image">🍎</div>
          <div className="big-word">apple</div>
          <div className="audio-btn"><Icon name="play" size={28}/></div>
        </>
      ),
    },
    {
      key: "speak",
      label: "Guided Speak",
      sub: "따라 말하기",
      title: "듣고 따라 말하기",
      desc: "미국식 발음의 예문을 듣고 아이가 직접 따라 말하며 자연스럽게 영어 표현에 익숙해집니다.",
      age: "6세 이상",
      bg: "bg-mint",
      render: () => (
        <>
          <div className="big-word big-word--sentence">"I like apple."</div>
          <div className="audio-btn" style={{background: "var(--purple)", color: "white"}}>
            <Icon name="mic" size={28}/>
          </div>
          <div style={{marginTop: 20, fontFamily: "var(--font-en)", fontWeight: 600, color: "var(--purple-deep)"}}>
            듣고 따라 말해요
          </div>
        </>
      ),
    },
    {
      key: "find",
      label: "Find Word",
      sub: "단어 찾기 게임",
      title: "단어 찾기 챌린지",
      desc: "그림에 맞는 단어를 빠르게 찾아 어휘를 강화합니다.",
      age: "5세 이상",
      bg: "bg-yellow",
      render: () => (
        <>
          <div className="word-image">🐶</div>
          <div className="word-options">
            <div className="opt">cat</div>
            <div className="opt correct">dog</div>
            <div className="opt">bird</div>
            <div className="opt">fish</div>
          </div>
        </>
      ),
    },
    {
      key: "scramble",
      label: "Unscramble",
      sub: "단어 순서 맞추기",
      title: "흩어진 알파벳 맞추기",
      desc: "철자 감각을 기르고 단어 구조를 이해합니다.",
      age: "6세 이상",
      bg: "bg-purple",
      render: () => (
        <>
          <div style={{fontSize: 56, marginBottom: 24}}>🐱</div>
          <div className="scramble">
            <div className="letter">C</div>
            <div className="letter">A</div>
            <div className="letter">T</div>
          </div>
          <div style={{marginTop: 24, fontFamily: "var(--font-en)", fontWeight: 600, color: "var(--purple-deep)"}}>
            철자를 순서대로 눌러보세요
          </div>
        </>
      ),
    },
    {
      key: "reward",
      label: "Reward Screen",
      sub: "스티커 획득 화면",
      title: "오늘의 보상 시간!",
      desc: "학습을 완료한 아이에게 즉각적인 보상을 제공합니다.",
      age: "전 연령",
      bg: "bg-pink",
      render: () => (
        <>
          <div className="reward-star">⭐</div>
          <div className="reward-text">Great Job!</div>
          <div style={{marginTop: 12, fontSize: 16, color: "var(--purple-deep)", fontWeight: 600}}>
            오늘의 스티커를 획득했어요 🎉
          </div>
        </>
      ),
    },
  ];

  const [active, setActive] = React.useState(0);
  const a = activities[active];

  return (
    <section className="section section--ivory gallery" id="gallery">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">Activity Gallery</span>
          <h2 className="section-title">아이들이 실제로 만나는 학습 화면</h2>
          <p className="section-subtitle">
            5가지 학습 활동이 유기적으로 연결되어 어휘 → 듣기 → 따라 말하기 → 단어 찾기 → 쓰기까지 자연스럽게 이어집니다.
          </p>
        </div>
        <div className="gallery__layout reveal">
          <div className="gallery__tabs" role="tablist">
            {activities.map((act, i) => (
              <button key={act.key}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-controls={`activity-panel-${act.key}`}
                className={`gallery__tab ${i === active ? "is-active" : ""}`}
                onClick={() => setActive(i)}>
                <span className="num">0{i+1}</span>
                <span>
                  <strong>{act.label}</strong>
                  <small>{act.sub}</small>
                </span>
              </button>
            ))}
          </div>
          <div className="gallery__panel" id={`activity-panel-${a.key}`} role="tabpanel">
            <div className={`activity-screen ${a.bg}`} key={a.key}>
              {a.render()}
            </div>
            <div className="gallery__caption">
              <div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
              <span className="age-tag">{a.age}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Gallery = Gallery;
