(function () {
  var config = window.ENGKEY_ANALYTICS_CONFIG || {};
  var measurementId = (config.googleAnalyticsMeasurementId || "").trim();

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  window.engkeyTrackEvent = function (eventName, params) {
    if (!measurementId || typeof window.gtag !== "function") return;
    window.gtag("event", eventName, params || {});
  };

  if (!measurementId || /^G-XXXXXXXXXX$/i.test(measurementId)) return;

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname + window.location.search + window.location.hash,
  });

  window.addEventListener("hashchange", function () {
    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname + window.location.search + window.location.hash,
    });
  });

  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest("a[href]");
    if (!link) return;

    var href = link.getAttribute("href") || "";
    var label = (link.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80);
    var eventParams = {
      link_url: link.href,
      link_text: label,
      section: href.charAt(0) === "#" ? href.slice(1) || "top" : undefined,
    };

    if (href === "#contact" || href === "#demo-form") {
      window.engkeyTrackEvent("cta_click", eventParams);
    } else if (href.indexOf("mailto:") === 0) {
      window.engkeyTrackEvent("email_click", eventParams);
    } else if (/pf\.kakao\.com|talk\.naver\.com|kakao/i.test(href)) {
      window.engkeyTrackEvent("kakao_channel_click", eventParams);
    } else if (href.charAt(0) === "#") {
      window.engkeyTrackEvent("section_nav_click", eventParams);
    }
  }, true);
})();
