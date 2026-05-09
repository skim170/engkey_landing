function FAQ() {
  const faqs = [
    {
      q: "방문 Market Day는 필수인가요?",
      a: "아니요. Lite, Standard, Plus와 별도로 필요한 기관만 선택하는 옵션입니다. 선택 시 Engkey가 방문해 이번 달 단어 복습 게임과 리워드 마켓을 진행합니다.",
    },
    {
      q: "음성은 어떤 발음 기준인가요?",
      a: "단어와 예문은 미국식 발음 기준의 음성 콘텐츠로 제공합니다. 아이들이 처음부터 영어 소리와 리듬에 자연스럽게 익숙해지도록 설계했습니다.",
    },
    {
      q: "단어는 얼마나 자주 바뀌나요?",
      a: "매주 새로운 15개 단어 또는 표현으로 업데이트됩니다. 아이들이 반복 루틴을 유지하면서도 다양한 어휘를 계속 접할 수 있습니다.",
    },
    {
      q: "AI 리포트에는 무엇이 들어가나요?",
      a: "아이별 학습 일수, 듣기·말하기 참여 흐름, 복습 추천 단어를 월간 리포트로 정리합니다. 학부모 상담과 가정 연계 안내에 활용할 수 있습니다.",
    },
    {
      q: "홍보용 랜딩페이지는 어디에 쓰나요?",
      a: "Engkey 소개 페이지가 아니라 해당 어린이집 자체를 홍보하는 페이지입니다. 교육 환경, 프로그램, 상담 문의 정보를 정리해 신입 원아 모집과 학부모 안내에 활용할 수 있도록 구성합니다.",
    },
  ];

  return (
    <section className="section section--ivory faq" id="faq">
      <div className="container">
        <div className="faq__header reveal">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">도입 전에 자주 묻는 질문</h2>
        </div>
        <div className="faq__list">
          {faqs.map((item, i) => (
            <details key={item.q} className="faq-item reveal" style={{transitionDelay: `${i * 50}ms`}}>
              <summary>
                <span>{item.q}</span>
                <Icon name="arrow" size={18} />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
window.FAQ = FAQ;
