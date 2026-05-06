const logoBase = "assets/logos/";

function LogoImage({ src, alt, className = "", loading = "eager" }) {
  return (
    <img
      className={className}
      src={`${logoBase}${src}`}
      alt={alt}
      loading={loading}
      decoding="async"
    />
  );
}

function EngkeyWordmark({ className = "" }) {
  return (
    <LogoImage
      className={`engkey-wordmark ${className}`}
      src="engkey-wordmark.png"
      alt="Engkey - English, unlocked for kids."
    />
  );
}

function EngkeyMark({ className = "" }) {
  return (
    <LogoImage
      className={`engkey-mark ${className}`}
      src="engkey-badge.png"
      alt=""
    />
  );
}

function EngkeyMascot({ className = "" }) {
  return (
    <LogoImage
      className={`engkey-mascot ${className}`}
      src="engkey-mascot.png"
      alt="Engkey alpaca mascot"
    />
  );
}

function EngkeyHorizontal({ className = "" }) {
  return (
    <LogoImage
      className={`engkey-horizontal ${className}`}
      src="engkey-horizontal.png"
      alt="Engkey - English, unlocked for kids."
    />
  );
}

window.EngkeyWordmark = EngkeyWordmark;
window.EngkeyMark = EngkeyMark;
window.EngkeyMascot = EngkeyMascot;
window.EngkeyHorizontal = EngkeyHorizontal;
