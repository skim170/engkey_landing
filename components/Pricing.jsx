function Pricing() {
  const plans = [
    {
      name: "Lite",
      price: "59,000원",
      extra: "추가 반 월 29,000원",
      summary: "매일 10~15분 듣기·따라 말하기 루틴을 시작하는 기본 플랜",
      items: ["태블릿 1대 제공", "매일 10~15분 듣기·따라 말하기", "매주 새로운 15개 단어 업데이트", "미국식 발음 음성 콘텐츠", "기본 포인트 적립"],
    },
    {
      name: "Standard",
      price: "99,000원",
      extra: "추가 반 월 59,000원",
      summary: "Self Market Day와 기관 홍보까지 운영할 수 있는 추천 플랜",
      items: ["Lite 전체 포함", "Market Box와 리워드 상품", "운영 가이드와 학부모 안내 자료", "해당 어린이집 홍보용 랜딩페이지 제작"],
      featured: true,
    },
    {
      name: "Plus",
      price: "129,000원",
      extra: "추가 반 월 89,000원",
      summary: "아이별 월간 AI 영어 활동 리포트를 더한 프리미엄 플랜",
      items: ["Standard 전체 포함", "학습 일수·참여도 월간 AI 리포트", "복습 추천 단어 제공", "학부모 상담·가정 연계 자료로 활용"],
    },
  ];

  const notes = [
    "각 반에는 태블릿 1대가 기본 제공됩니다.",
    "태블릿 보증금 50,000원은 정상 반납 시 환급됩니다.",
    "정확한 견적은 반 수와 선택 옵션에 따라 상담 후 안내합니다.",
  ];

  return (
    <section className="section section--ivory pricing" id="pricing">
      <div className="container">
        <div className="pricing__header reveal">
          <div>
            <span className="eyebrow">Pricing</span>
            <h2 className="section-title">
              월 59,000원부터 시작하는<br/>부담 없는 영어 보조 프로그램
            </h2>
            <p className="section-subtitle">
              Engkey는 메인 영어 수업을 대체하기보다, 아이들이 평소 영어를 더 자주 접하도록 돕는 보조 프로그램입니다.
              방문 Market Day는 필요한 기관만 선택하는 추가 옵션으로 운영합니다.
            </p>
          </div>
          <a href="#contact" className="btn btn--primary">
            견적 상담하기 <Icon name="arrow" size={18} />
          </a>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <article key={plan.name} className={`pricing-card reveal ${plan.featured ? "is-featured" : ""}`} style={{transitionDelay: `${i * 80}ms`}}>
              {plan.featured && <div className="pricing-card__badge">추천</div>}
              <div className="pricing-card__name">{plan.name}</div>
              <div className="pricing-card__price">
                월 <strong>{plan.price}</strong>
              </div>
              <div className="pricing-card__base">첫 반 기준 · {plan.extra}</div>
              <p>{plan.summary}</p>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="pricing__option reveal">
          <div>
            <span>선택 옵션</span>
            <strong>방문 Market Day · 1회 80,000원</strong>
          </div>
          <p>Engkey가 직접 방문해 이번 달 단어 복습 게임과 리워드 마켓을 진행합니다. 필수 구성이 아니라 필요한 달에 선택할 수 있습니다.</p>
        </div>

        <div className="pricing__notes reveal">
          {notes.map((note) => (
            <span key={note}>{note}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
