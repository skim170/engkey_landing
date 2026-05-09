function AgeTabs() {
  const ages = [
    {
      key: 5, label: "5세",
      titleLabel: "5세",
      desc: "촉감과 모양을 표현하는 형용사 중심. 한 단어를 보고 듣고 선택하는 활동으로 시작합니다.",
      stats: [
        { lbl: "1주차 학습 어휘", val: "15 words" },
        { lbl: "활동 1회 시간", val: "10–12 min" },
      ],
      activities: [
        { name: "Show Word" },
        { name: "Guided Speak", isNew: true },
        { name: "Listen & Choose" },
        { name: "Find Word" },
        { name: "Sticker Reward" },
      ],
      sample: [
        "fluffy",
        "furry",
        "hairy",
        "scaly",
        "wet",
        "dry",
        "smooth",
        "bumpy",
        "spiky",
        "round",
        "flat",
        "long",
        "short",
        "big",
        "small",
      ],
    },
    {
      key: "6-7", label: "6·7세",
      titleLabel: "6·7세 통합",
      desc: "형용사와 동물 명사를 결합한 짧은 어구. 크기·형태 표현을 자연스럽게 말하고 찾습니다.",
      stats: [
        { lbl: "1주차 학습 어휘", val: "15 phrases" },
        { lbl: "활동 1회 시간", val: "12–14 min" },
      ],
      activities: [
        { name: "Show Phrase" },
        { name: "Guided Speak", isNew: true },
        { name: "Find Phrase" },
        { name: "Sticker Reward" },
      ],
      sample: [
        "big dog",
        "small cat",
        "tiny bird",
        "tall giraffe",
        "short pig",
        "long snake",
        "fat bear",
        "thin deer",
        "huge elephant",
        "little rabbit",
        "giant whale",
        "mini frog",
        "wide hippo",
        "slim fox",
        "round owl",
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
          <h2 className="section-title">연령별로 정교하게 설계된 프로그램</h2>
          <p className="section-subtitle">
            5세 과정과 6·7세 통합 과정으로 1주차 어휘부터 단계적으로 확장됩니다.
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
        <div className="ages__panel reveal" id={`age-panel-${a.key}`} role="tabpanel">
          <div>
            <h3><span className="age-num">{a.titleLabel}</span> 프로그램</h3>
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
            <h4>1주차 단어</h4>
            <div className="ages__word-list">
              {a.sample.map(word => (
                <span key={word} className="ages__word-chip">{word}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.AgeTabs = AgeTabs;
