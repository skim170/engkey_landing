function CTAForm() {
  const formConfig = window.ENGKEY_FORM_CONFIG || {};
  const contactEmail = formConfig.contactEmail || "ok31803238@gmail.com";
  const kakaoChannelUrl = "#";
  const formProvider = (formConfig.formProvider || "formspree").trim().toLowerCase();
  const configuredEndpoint = (formConfig.formEndpoint || "").trim();
  const formEndpoint = formProvider === "web3forms"
    ? "https://api.web3forms.com/submit"
    : formProvider === "formsubmit"
      ? `https://formsubmit.co/ajax/${contactEmail}`
      : configuredEndpoint;
  const web3FormsAccessKey = (formConfig.web3FormsAccessKey || "").trim();
  const isPlaceholderEndpoint = !configuredEndpoint || /YOUR_|your_/i.test(configuredEndpoint);
  const isFormConfigured = formProvider === "web3forms"
    ? Boolean(web3FormsAccessKey)
    : formProvider === "formsubmit" || !isPlaceholderEndpoint;
  const [form, setForm] = React.useState({ name: "", org: "", role: "원장", phone: "", email: "", students: "", message: "" });
  const [errors, setErrors] = React.useState({});
  const [formError, setFormError] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [showMailFallback, setShowMailFallback] = React.useState(false);

  const set = (k) => (e) => {
    setForm(f => ({ ...f, [k]: e.target.value }));
    setFormError("");
    setShowMailFallback(false);
  };

  const mailSubject = `[Engkey 무료 데모 신청] ${form.org.trim() || "문의"}`;
  const mailBody = [
    "무료 데모 신청 정보",
    "",
    `이름: ${form.name || "-"}`,
    `역할: ${form.role || "-"}`,
    `기관명: ${form.org || "-"}`,
    `연락처: ${form.phone || "-"}`,
    `이메일: ${form.email || "-"}`,
    `예상 학생 수: ${form.students || "-"}`,
    "",
    "문의 내용:",
    form.message || "-",
  ].join("\n");
  const mailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "이름을 입력해주세요";
    if (!form.org.trim()) e.org = "기관명을 입력해주세요";
    if (!form.phone.trim()) e.phone = "연락처를 입력해주세요";
    else if (!/^[0-9-+\s()]{8,}$/.test(form.phone)) e.phone = "연락처 형식을 확인해주세요";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "이메일 형식을 확인해주세요";
    return e;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    setFormError("");
    setShowMailFallback(false);
    if (Object.keys(e).length > 0) return;

    if (!isFormConfigured) {
      setShowMailFallback(true);
      setFormError("폼 전송 설정이 아직 완료되지 않았습니다. 아래 버튼으로 입력한 내용을 이메일 앱에서 바로 보낼 수 있습니다.");
      return;
    }

    setSubmitting(true);

    const payload = {
      subject: mailSubject,
      name: form.name,
      email: form.email || "",
      phone: form.phone,
      message: form.message || "-",
      이름: form.name,
      역할: form.role,
      기관명: form.org,
      연락처: form.phone,
      이메일: form.email || "-",
      "예상 학생 수": form.students || "-",
      "문의 내용": form.message || "-",
    };

    if (formProvider === "formsubmit") {
      payload._subject = mailSubject;
      payload._template = "table";
      payload._captcha = "false";
    }

    if (formProvider === "web3forms") {
      payload.access_key = web3FormsAccessKey;
      payload.from_name = "Engkey Landing";
      payload.botcheck = "";
    }

    if (form.email) {
      payload.replyto = form.email;
      payload._replyto = form.email;
    }

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.success === false) throw new Error(data.message || "전송 실패");
      setSubmitted(true);
    } catch (err) {
      setShowMailFallback(true);
      setFormError("전송 서비스 응답이 원활하지 않습니다. 아래 버튼으로 입력한 내용을 이메일 앱에서 바로 보낼 수 있습니다.");
    } finally {
      setSubmitting(false);
    }
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
            <a className="cta__channel" href={kakaoChannelUrl}>
              <div className="ico"><Icon name="chat" size={20}/></div>
              <div>
                <strong>카카오채널 문의</strong>
                <small>채널 채팅으로 빠르게 문의하기</small>
              </div>
            </a>
            <a className="cta__channel" href={`mailto:${contactEmail}`}>
              <div className="ico"><Icon name="mail" size={20}/></div>
              <div>
                <strong>이메일 문의</strong>
                <small>{contactEmail}</small>
              </div>
            </a>
            <a className="cta__channel" href="#demo-form">
              <div className="ico"><Icon name="chat" size={20}/></div>
              <div>
                <strong>문의폼</strong>
                <small>무료 데모 신청 내용을 남기기</small>
              </div>
            </a>
          </div>
        </div>

        <form className="form reveal" id="demo-form" onSubmit={onSubmit} noValidate>
          {submitted ? (
            <>
              <h3>무료 데모 신청이 접수되었습니다</h3>
              <p className="form__sub">남겨주신 내용은 {contactEmail}로 전송됩니다. 확인 후 순차적으로 연락드리겠습니다.</p>
              <div className="form__success">
                <Icon name="check" size={18} style={{verticalAlign: "-3px", marginRight: 6}}/>
                추가 문의는 카카오채널 또는 이메일로 보내주세요.
              </div>
            </>
          ) : (
            <>
              <h3>무료 데모 신청</h3>
              <p className="form__sub">아래 정보를 남겨주시면 시연 일정과 견적을 안내해 드립니다.</p>
              {formError && (
                <div className="form__success form__success--error" aria-live="polite">
                  <span>{formError}</span>
                  {showMailFallback && (
                    <a className="form__errorAction" href={mailtoHref}>
                      입력 내용으로 이메일 보내기
                    </a>
                  )}
                </div>
              )}
              <div className="form__row">
                <div className="form__field">
                  <label>이름<span className="req">*</span></label>
                  <input name="name" value={form.name} onChange={set("name")} placeholder="홍길동" />
                  {errors.name && <span className="err">{errors.name}</span>}
                </div>
                <div className="form__field">
                  <label>역할<span className="req">*</span></label>
                  <select name="role" value={form.role} onChange={set("role")}>
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
                <input name="organization" value={form.org} onChange={set("org")} placeholder="OO유치원 / OO어린이집" />
                {errors.org && <span className="err">{errors.org}</span>}
              </div>
              <div className="form__row">
                <div className="form__field">
                  <label>연락처<span className="req">*</span></label>
                  <input name="phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="010-0000-0000" />
                  {errors.phone && <span className="err">{errors.phone}</span>}
                </div>
                <div className="form__field">
                  <label>이메일</label>
                  <input name="email" type="email" value={form.email} onChange={set("email")} placeholder="hello@example.com" />
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>
              </div>
              <div className="form__field">
                <label>예상 학생 수</label>
                <select name="students" value={form.students} onChange={set("students")}>
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
                <textarea name="message" value={form.message} onChange={set("message")}
                  placeholder="도입 시기, 운영 환경, 특별히 궁금한 점 등을 자유롭게 적어주세요." />
              </div>
              <button type="submit" className="form__submit" disabled={submitting}>
                {submitting ? "신청 전송 중..." : "무료 데모 신청하기"}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
window.CTAForm = CTAForm;
