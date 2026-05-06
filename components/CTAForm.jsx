function CTAForm() {
  const contactEmail = "hello@engkey.kr";
  const [form, setForm] = React.useState({ name: "", org: "", role: "원장", phone: "", email: "", students: "", message: "" });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "이름을 입력해주세요";
    if (!form.org.trim()) e.org = "기관명을 입력해주세요";
    if (!form.phone.trim()) e.phone = "연락처를 입력해주세요";
    else if (!/^[0-9-+\s()]{8,}$/.test(form.phone)) e.phone = "연락처 형식을 확인해주세요";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "이메일 형식을 확인해주세요";
    return e;
  };

  const buildMailto = () => {
    const subject = `[Engkey 데모 신청] ${form.org}`;
    const body = [
      "Engkey 무료 데모를 신청합니다.",
      "",
      `이름: ${form.name}`,
      `역할: ${form.role}`,
      `기관명: ${form.org}`,
      `연락처: ${form.phone}`,
      `이메일: ${form.email || "-"}`,
      `예상 학생 수: ${form.students || "-"}`,
      "",
      "문의 내용:",
      form.message || "-",
    ].join("\n");

    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setSubmitting(true);
    window.location.href = buildMailto();
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section className="section cta" id="contact">
      <div className="container cta__layout">
        <div className="reveal">
          <span className="eyebrow">Get in Touch</span>
          <h2>
            우리 기관에도<br/>
            <span>Engkey</span> 도입하기
          </h2>
          <p className="cta__sub">
            기관 환경에 맞춰 시연 일정과 견적을 안내해 드립니다.
            평균 1~2일 이내 담당자가 연락드립니다.
          </p>
          <div className="cta__channels">
            <a className="cta__channel" href={`mailto:${contactEmail}?subject=${encodeURIComponent("Engkey 상담 요청")}`}>
              <div className="ico"><Icon name="chat" size={20}/></div>
              <div>
                <strong>빠른 상담 요청</strong>
                <small>기관 정보를 남겨주시면 순차적으로 연락드립니다</small>
              </div>
            </a>
            <a className="cta__channel" href={`mailto:${contactEmail}`}>
              <div className="ico"><Icon name="mail" size={20}/></div>
              <div>
                <strong>이메일</strong>
                <small>{contactEmail}</small>
              </div>
            </a>
            <a className="cta__channel" href="tel:+8215001234">
              <div className="ico"><Icon name="phone" size={20}/></div>
              <div>
                <strong>전화 상담</strong>
                <small>1500-1234 · 평일 10:00–17:00</small>
              </div>
            </a>
          </div>
        </div>

        <form className="form reveal" onSubmit={onSubmit} noValidate>
          {submitted ? (
            <>
              <h3>메일 앱이 열렸습니다</h3>
              <p className="form__sub">작성된 신청 내용을 확인한 뒤 메일 앱에서 전송해주세요. 메일 전송이 어려우면 아래 주소로 직접 보내주셔도 됩니다.</p>
              <div className="form__success">
                <Icon name="check" size={18} style={{verticalAlign: "-3px", marginRight: 6}}/>
                {contactEmail}
              </div>
            </>
          ) : (
            <>
              <h3>무료 데모 신청</h3>
              <p className="form__sub">아래 정보를 남겨주시면 시연 일정과 견적을 안내해 드립니다.</p>
              <div className="form__row">
                <div className="form__field">
                  <label>이름<span className="req">*</span></label>
                  <input value={form.name} onChange={set("name")} placeholder="홍길동" />
                  {errors.name && <span className="err">{errors.name}</span>}
                </div>
                <div className="form__field">
                  <label>역할<span className="req">*</span></label>
                  <select value={form.role} onChange={set("role")}>
                    <option>원장</option>
                    <option>교사</option>
                    <option>운영 담당자</option>
                    <option>학부모</option>
                    <option>기타</option>
                  </select>
                </div>
              </div>
              <div className="form__field">
                <label>기관명<span className="req">*</span></label>
                <input value={form.org} onChange={set("org")} placeholder="OO유치원 / OO어린이집" />
                {errors.org && <span className="err">{errors.org}</span>}
              </div>
              <div className="form__row">
                <div className="form__field">
                  <label>연락처<span className="req">*</span></label>
                  <input value={form.phone} onChange={set("phone")} placeholder="010-0000-0000" />
                  {errors.phone && <span className="err">{errors.phone}</span>}
                </div>
                <div className="form__field">
                  <label>이메일</label>
                  <input value={form.email} onChange={set("email")} placeholder="hello@example.com" />
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>
              </div>
              <div className="form__field">
                <label>예상 학생 수</label>
                <select value={form.students} onChange={set("students")}>
                  <option value="">선택해주세요</option>
                  <option>10명 이하</option>
                  <option>11–30명</option>
                  <option>31–60명</option>
                  <option>61–100명</option>
                  <option>100명 이상</option>
                </select>
              </div>
              <div className="form__field">
                <label>문의 내용</label>
                <textarea value={form.message} onChange={set("message")}
                  placeholder="도입 시기, 운영 환경, 특별히 궁금한 점 등을 자유롭게 적어주세요." />
              </div>
              <button type="submit" className="form__submit" disabled={submitting}>
                {submitting ? "메일 앱 여는 중..." : "무료 데모 신청 메일 작성하기"}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
window.CTAForm = CTAForm;
