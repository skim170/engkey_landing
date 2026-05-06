function AgeTabs() {
  const ages = [
    {
      key: 5, label: "5세",
      desc: "단어 인식 + 간단한 패턴. 시각·청각을 동시에 활용한 어휘 확장.",
      stats: [
        { lbl: "주간 학습 어휘", val: "18 words" },
        { lbl: "활동 1회 시간", val: "10–12 min" },
      ],
      activities: [
        { name: "Show Word" },
        { name: "Find Word" },
        { name: "Match Pair" },
        { name: "Sticker Reward" },
      ],
      sample: [
        { en: "happy / sad", kr: "행복한 / 슬픈" },
        { en: "big / small", kr: "큰 / 작은" },
        { en: "I like cats.", kr: "나는 고양이를 좋아해요." },
      ],
    },
    {
      key: 6, label: "6세",
      desc: "단어에서 짧은 문장으로 확장. 듣고 따라 말하기·단어 찾기·철자 활동을 함께 구성합니다.",
      stats: [
        { lbl: "주간 학습 어휘", val: "24 words" },
        { lbl: "활동 1회 시간", val: "12–14 min" },
      ],
      activities: [
        { name: "Show Word" },
        { name: "Guided Speak", isNew: true },
        { name: "Unscramble", isNew: true },
        { name: "Find Word" },
        { name: "Sticker Reward" },
      ],
      sample: [
        { en: "I have a pencil.", kr: "나는 연필이 있어요." },
        { en: "Where is the cat?", kr: "고양이는 어디 있어요?" },
        { en: "It's red.", kr: "그것은 빨간색이에요." },
      ],
    },
    {
      key: 7, label: "7세",
      desc: "문장 단위 따라 말하기와 읽기·쓰기 기초. 학교 영어 진입을 위한 단계.",
      stats: [
        { lbl: "주간 학습 어휘", val: "30 words" },
        { lbl: "활동 1회 시간", val: "13–15 min" },
      ],
      activities: [
        { name: "Show Word" },
        { name: "Guided Speak" },
        { name: "Unscramble" },
        { name: "Sentence Build", isNew: true },
        { name: "Sticker Reward" },
      ],
      sample: [
        { en: "I am going to school.", kr: "나는 학교에 가고 있어요." },
        { en: "She likes apples.", kr: "그녀는 사과를 좋아해요." },
        { en: "What day is it today?", kr: "오늘은 무슨 요일이에요?" },
      ],
    },
  ];

  const [active, setActive] = React.useState(0);
  const a = ages[active];

  return (
    <section className="section section--cream" id="ages">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">Age Programs</span>
          <h2 className="section-title">연령별로 정교하게 설계된 3단계</h2>
          <p className="section-subtitle">
            아이의 발달 단계에 맞춰 어휘 양·문장 길이·활동 유형이 자연스럽게 확장됩니다.
          </p>
        </div>
        <div className="ages__nav reveal" role="tablist">
          {ages.map((age, i) => (
            <button key={age.key}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls={`age-panel-${age.key}`}
              className={i === active ? "is-active" : ""}
              onClick={() => setActive(i)}>
              {age.label}
            </button>
          ))}
        </div>
        <div className="ages__panel reveal" id={`age-panel-${a.key}`} role="tabpanel" key={a.key}>
          <div>
            <h3><span className="age-num">{a.label}</span> 프로그램</h3>
            <p className="desc">{a.desc}</p>
            <div className="ages__stats">
              {a.stats.map(s => (
                <div key={s.lbl} className="ages__stat">
                  <div className="lbl">{s.lbl}</div>
                  <div className="val">{s.val}</div>
                </div>
              ))}
            </div>
            <div className="ages__activities">
              {a.activities.map(act => (
                <span key={act.name} className={act.isNew ? "new" : ""}>
                  {act.isNew && "✨ "}{act.name}
                </span>
              ))}
            </div>
          </div>
          <div className="ages__sample">
            <h4>학습 샘플</h4>
            <ul>
              {a.sample.map(s => (
                <li key={s.en}>
                  <span className="en">{s.en}</span>
                  <span className="kr">{s.kr}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
window.AgeTabs = AgeTabs;
