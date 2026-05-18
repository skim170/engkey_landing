function App() {
  // Reveal-on-scroll via IntersectionObserver
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Problem />
        <Features />
        <DailyRoutine />
        <HowItWorks />
        <MarketDay />
        <Pricing />
        <ProofAssets />
        <Gallery />
        <AgeTabs />
        <FAQ />
        <CTAForm />
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
