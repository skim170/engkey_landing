// Lightweight inline SVG icons (stroke-based, rounded)
const Icon = ({ name, size = 24, ...rest }) => {
  const common = {
    width: size, height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...rest,
  };
  switch (name) {
    case "target":
      return (<svg {...common}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>);
    case "mic":
      return (<svg {...common}><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>);
    case "chart":
      return (<svg {...common}><path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/></svg>);
    case "star":
      return (<svg {...common}><path d="M12 3l2.7 5.5 6 .9-4.3 4.2 1 6L12 16.8 6.6 19.6l1-6L3.3 9.4l6-.9z"/></svg>);
    case "tablet":
      return (<svg {...common}><rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="18" r="0.5" fill="currentColor"/></svg>);
    case "play":
      return (<svg {...common}><path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/></svg>);
    case "arrow":
      return (<svg {...common}><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>);
    case "check":
      return (<svg {...common}><path d="M5 12l4 4 10-10"/></svg>);
    case "mail":
      return (<svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>);
    case "chat":
      return (<svg {...common}><path d="M21 12a8 8 0 0 1-12 7l-5 1 1-4a8 8 0 1 1 16-4z"/></svg>);
    case "phone":
      return (<svg {...common}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19 19 0 0 1-8.3-3 19 19 0 0 1-6-6 19 19 0 0 1-3-8.3A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9z"/></svg>);
    case "sparkle":
      return (<svg {...common}><path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><path d="M5.6 5.6l2.8 2.8"/><path d="M15.6 15.6l2.8 2.8"/><path d="M5.6 18.4l2.8-2.8"/><path d="M15.6 8.4l2.8-2.8"/></svg>);
    default:
      return null;
  }
};
window.Icon = Icon;
