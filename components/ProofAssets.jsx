function ProofAssets() {
  const items = [
    {
      plan: "Standard",
      icon: "sparkle",
      title: "어린이집 홍보용 랜딩페이지",
      desc: "해당 어린이집의 강점, 교육 환경, 프로그램 안내, 상담 문의 동선을 한 페이지로 정리해 원아 모집과 학부모 안내에 활용합니다.",
    },
    {
      plan: "Plus",
      icon: "chart",
      title: "아이별 월간 AI 리포트",
      desc: "학습 일수, 듣기·말하기 참여 흐름, 복습 추천 단어를 정리해 학부모 상담과 가정 연계 자료로 사용할 수 있습니다.",
    },
    {
      plan: "Option",
      icon: "star",
      title: "방문 Market Day 운영",
      desc: "방문이 필요한 기관은 옵션으로 선택해 영어 미션과 리워드 마켓을 Engkey 선생님에게 맡길 수 있습니다.",
    },
  ];

  return (
    <section className="section section--cream proof-assets" id="materials">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">Parent Materials</span>
          <h2 className="section-title">학부모에게 보여줄 수 있는 결과물까지 준비합니다</h2>
          <p className="section-subtitle">
            단순히 태블릿을 두는 데서 끝나지 않도록, 어린이집 홍보와 학부모 커뮤니케이션에 쓸 수 있는 자료를 패키지별로 제공합니다.
          </p>
        </div>
        <div className="proof-assets__grid">
          {items.map((item, i) => (
            <article key={item.title} className="proof-card reveal" style={{transitionDelay: `${i * 80}ms`}}>
              <div className="proof-card__top">
                <span>{item.plan}</span>
                <Icon name={item.icon} size={24} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ProofAssets = ProofAssets;
