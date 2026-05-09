function MarketDay() {
  const highlights = [
    {
      icon: "tablet",
      title: "매주 15개 단어 노출",
      desc: "아이들은 태블릿 키오스크에서 매주 새롭게 바뀌는 단어를 듣고, 따라 말하고, 선택 활동으로 확인합니다.",
    },
    {
      icon: "star",
      title: "월 1회 포인트 교환",
      desc: "한 달 동안 쌓은 포인트로 원하는 보상을 고르거나, 더 큰 보상을 위해 다음 달로 저축할 수 있습니다.",
    },
    {
      icon: "sparkle",
      title: "Self 또는 방문 운영",
      desc: "선생님이 Market Box로 직접 운영하고, 필요할 때만 방문 Market Day 옵션으로 복습 게임과 마켓을 맡길 수 있습니다.",
    },
  ];

  const plans = [
    { name: "Lite", text: "키오스크 앱과 포인트 적립으로 가볍게 시작" },
    { name: "Standard", text: "Market Box와 리워드 상품, 어린이집 홍보용 랜딩페이지 포함" },
    { name: "Plus", text: "아이별 월간 AI 리포트와 복습 추천 단어 추가" },
    { name: "방문 옵션", text: "월 1회 영어 미션과 리워드 마켓을 Engkey가 진행" },
  ];

  return (
    <section className="section section--cream" id="market-day">
      <div className="container">
        <div className="market-day__layout">
          <div className="market-day__copy reveal">
            <span className="eyebrow">Market Day</span>
            <h2 className="section-title">포인트를 모아 선택하는 월간 리워드 마켓</h2>
            <p className="section-subtitle">
              Engkey Market Day는 아이들이 평소 영어를 더 자주 접하도록 돕는 리워드 프로그램입니다.
              매일의 짧은 영어 활동을 포인트와 월 1회 보상 경험으로 연결합니다.
            </p>
            <div className="market-day__flow" aria-label="Market Day 운영 흐름">
              <span>단어 듣기</span>
              <span>따라 말하기</span>
              <span>포인트 적립</span>
              <span>Market Day</span>
            </div>
          </div>

          <div className="market-day__box reveal">
            <div className="market-day__box-label">Engkey Market Box</div>
            <div className="market-day__box-window">
              <div className="market-day__reward c-yellow">5P</div>
              <div className="market-day__reward c-pink">10P</div>
              <div className="market-day__reward c-mint">SAVE</div>
            </div>
            <div className="market-day__box-note">
              월말에 선생님이 박스를 열고, 아이들은 본인의 포인트로 원하는 상품을 선택합니다.
            </div>
          </div>
        </div>

        <div className="market-day__cards">
          {highlights.map((item, i) => (
            <div key={item.title} className="market-day__card reveal" style={{transitionDelay: `${i * 80}ms`}}>
              <div className="market-day__icon">
                <Icon name={item.icon} size={26} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="market-day__plans reveal">
          {plans.map((plan) => (
            <div key={plan.name} className="market-day__plan">
              <strong>{plan.name}</strong>
              <span>{plan.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.MarketDay = MarketDay;
