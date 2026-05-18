function MarketDay() {
  const marketParts = [
    {
      label: "BOX",
      title: "3개월 분량의 리워드 상자",
      desc: "상품을 미리 담아 교실에 배치해 아이들이 매일 목표를 떠올리게 합니다.",
    },
    {
      label: "SCHEDULE",
      title: "월 1회 Market Day",
      desc: "한 달에 한 번 교환 날짜를 정해 영어 활동이 기다리는 이벤트로 이어지게 합니다.",
    },
    {
      label: "EXCHANGE",
      title: "쓰거나 모으는 선택 경험",
      desc: "아이들은 Balance로 바로 교환하거나 더 큰 보상을 위해 저축하는 경험을 합니다.",
      featured: true,
    },
    {
      label: "RULE",
      title: "남은 포인트 안에서만 구매",
      desc: "정해진 Balance를 넘겨 사용할 수 없어 교환 규칙이 명확합니다.",
    },
  ];

  const marketFlow = [
    {
      step: "01",
      title: "매일 활동으로 Balance 적립",
      desc: "듣기와 따라 말하기 루틴에 참여할수록 아이별 Balance가 쌓입니다.",
    },
    {
      step: "02",
      title: "월말에 Market Box 오픈",
      desc: "정해둔 날짜에 상품 상자를 열어 한 달 동안의 영어 참여를 보상 경험으로 연결합니다.",
    },
    {
      step: "03",
      title: "아이별 Balance 확인",
      desc: "Dashboard의 Market Day 화면에서 아이가 사용할 수 있는 Balance와 상품 수량을 확인합니다.",
    },
    {
      step: "04",
      title: "상품 선택 후 3개월 사이클 관리",
      desc: "Spend와 Confirm으로 선택한 상품만 차감하고, 3개월 Market Box 운영이 끝나면 Reset으로 새 사이클을 시작합니다.",
    },
  ];

  const systemNotes = [
    "선생님은 상품별 스티커 수량과 아이별 Balance를 한 화면에서 확인합니다.",
    "Balance보다 큰 상품은 교환할 수 없어 현장에서 계산 부담이 줄어듭니다.",
    "아이들은 남은 Balance를 다음 Market Day까지 모으며 저축과 목표 설정의 의미를 자연스럽게 배웁니다.",
    "Reset은 3개월치 Market Box 운영이 끝난 뒤 새 상자 사이클을 시작할 때 진행합니다.",
  ];

  const photos = [
    {
      src: "assets/images/market-day-box-display.jpg",
      label: "실제 Market Box",
      title: "아이들이 직접 고르는 리워드 상자",
      desc: "상품은 포인트별로 나눠 담아 Market Box로 배달해드립니다.",
    },
    {
      src: "assets/images/market-day-classroom-display.jpg",
      label: "어린이집 배치 예시",
      title: "교실과 현관 어디든 보이는 위치에 배치",
      desc: "태블릿 옆에 배치해 아이들이 영어 활동 목표를 떠올리며 동기부여를 받을 수 있게 합니다.",
    },
  ];

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
            <h2 className="section-title">매일의 영어 활동이 기다리는 보상 경험으로 이어집니다</h2>
            <p className="section-subtitle">
              Engkey Market Day는 태블릿 영어 활동으로 쌓은 Balance를 월 1회 리워드 마켓에서 사용하는 구조입니다.
              아이에게는 분명한 목표가 생기고, 바로 쓰기와 저축하기를 선택하며 어릴 때부터 돈을 모으는 감각도 함께 배웁니다.
            </p>
            <div className="market-day__flow" aria-label="Market Day 운영 흐름">
              <span>Market Box 배치</span>
              <span>Balance 적립</span>
              <span>상품 선택</span>
              <span>3개월 후 Reset</span>
            </div>
          </div>

          <div className="market-day__photos reveal" aria-label="Market Day 실제 사진">
            {photos.map((photo, i) => (
              <figure key={photo.title} className={`market-day__photo market-day__photo--${i + 1}`}>
                <div className="market-day__photo-media">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    onError={(event) => {
                      const frame = event.currentTarget.closest(".market-day__photo");
                      if (frame) frame.classList.add("is-missing");
                    }}
                  />
                  <div className="market-day__photo-fallback" aria-hidden="true">
                    <span>{photo.label}</span>
                    <div className="market-day__box-window">
                      <div className="market-day__reward c-yellow">5P</div>
                      <div className="market-day__reward c-pink">10P</div>
                      <div className="market-day__reward c-mint">SAVE</div>
                    </div>
                  </div>
                </div>
                <figcaption>
                  <strong>{photo.label}</strong>
                  <span>{photo.desc}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="market-day__guide reveal">
          <div className="market-day__guide-header">
            <span className="eyebrow">How Market Day Works</span>
            <h3>포인트가 목표가 되고, 목표가 영어 루틴을 계속 움직입니다</h3>
            <p>Market Box, 월간 일정, Balance 교환 규칙이 하나로 연결되어 아이들이 영어 활동을 계속 기대하고, 모은 포인트를 계획적으로 쓰는 법까지 익히게 만듭니다.</p>
          </div>
          <div className="market-day__parts" aria-label="Market Day 구성">
            {marketParts.map((item) => (
              <article key={item.label} className={`market-day__part ${item.featured ? "is-featured" : ""}`}>
                <span>{item.label}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
          <div className="market-day__saving-callout">
            <div>
              <span>Saving Education</span>
              <strong>Market Day는 보상을 주는 활동을 넘어, 아이들이 어릴 때부터 저축의 중요성을 배우는 경험입니다.</strong>
            </div>
            <p>지금 바로 교환할지, 3개월 사이클 안에서 Balance를 모아 더 큰 보상을 선택할지 스스로 결정하면서 목표를 세우고 기다리는 연습을 합니다.</p>
          </div>
          <div className="market-day__guide-grid">
            <div className="market-day__steps">
              {marketFlow.map((item) => (
                <article key={item.step} className="market-day__step">
                  <span>{item.step}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="market-day__checklist">
              <strong>운영은 가볍게</strong>
              <ul>
                {systemNotes.map((check) => (
                  <li key={check}>
                    <Icon name="check" size={16} />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
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
