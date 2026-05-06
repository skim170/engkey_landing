function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo" aria-label="Engkey 홈으로 이동">
          <EngkeyMark />
          <EngkeyWordmark />
        </a>
        <div className="nav__links">
          <a href="#features">기능</a>
          <a href="#how">도입 흐름</a>
          <a href="#gallery">학습 활동</a>
          <a href="#ages">연령별 프로그램</a>
          <a href="#contact">도입 문의</a>
        </div>
        <a href="#contact" className="btn btn--primary nav__cta">무료 데모 신청</a>
      </div>
    </nav>
  );
}
window.Nav = Nav;
