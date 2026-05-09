function DailyRoutine() {
  const steps = [
    {
      icon: "play",
      label: "01",
      title: "미국식 발음 듣기",
      desc: "단어와 짧은 표현을 먼저 듣고 소리의 리듬에 익숙해집니다.",
    },
    {
      icon: "mic",
      label: "02",
      title: "따라 말하기",
      desc: "Guided Speak 활동으로 아이가 직접 소리 내어 말합니다.",
    },
    {
      icon: "target",
      label: "03",
      title: "단어 선택 활동",
      desc: "그림과 단어를 연결하며 뜻을 확인하고 기억을 강화합니다.",
    },
    {
      icon: "star",
      label: "04",
      title: "포인트 적립",
      desc: "완료 경험을 포인트와 스티커로 연결해 다음 활동을 기대하게 합니다.",
    },
  ];

  return (
    <section className="section section--ivory routine" id="routine">
      <div className="container">
        <div className="routine__header reveal">
          <span className="eyebrow">Lite Routine</span>
          <h2 className="section-title">Lite만으로도 매일 영어 노출이 쌓입니다</h2>
          <p className="section-subtitle">
            기본 플랜은 태블릿 1대로 시작하지만, 아이가 매일 영어를 듣고 말하는 흐름은 빠지지 않습니다.
            매주 새로운 15개 단어가 들어와 반복과 새로움의 균형을 맞춥니다.
          </p>
        </div>

        <div className="routine__layout">
          <div className="routine__steps">
            {steps.map((step, i) => (
              <article key={step.title} className="routine-step reveal" style={{transitionDelay: `${i * 70}ms`}}>
                <div className="routine-step__icon">
                  <Icon name={step.icon} size={24} />
                </div>
                <div>
                  <span>{step.label}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="routine__preview reveal">
            <div className="routine__device">
              <div className="routine__screen">
                <div className="routine__top">
                  <strong>Week 3</strong>
                  <span>15 new words</span>
                </div>
                <div className="routine__word">
                  <span>fluffy</span>
                  <button type="button" aria-label="단어 음성 재생">
                    <Icon name="play" size={22} />
                  </button>
                </div>
                <div className="routine__speak">
                  <Icon name="mic" size={24} />
                  <strong>Listen and repeat</strong>
                  <small>미국식 발음 음성으로 듣고 따라 말해요</small>
                </div>
                <div className="routine__progress">
                  <span>Today</span>
                  <strong>12 min · 3 stickers</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <figure className="routine-scene reveal" aria-label="Children using Engkey together in class">
          <div className="routine-scene__fallback" aria-hidden="true">
            <div className="routine-scene__window"></div>
            <div className="routine-scene__table"></div>
          </div>
          <img
            src="assets/images/engkey-classroom-routine.png"
            alt="Children gathered around a tablet during an Engkey classroom routine"
            loading="lazy"
            onError={(event) => {
              const frame = event.currentTarget.closest(".routine-scene");
              if (frame) frame.classList.add("is-missing");
              event.currentTarget.hidden = true;
            }}
          />
        </figure>
      </div>
    </section>
  );
}
window.DailyRoutine = DailyRoutine;
