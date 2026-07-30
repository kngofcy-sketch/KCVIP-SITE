import { useState, useEffect, useRef } from "react";

// ─── Utility ────────────────────────────────────────────────────────────────
const cn = (...classes) => classes.filter(Boolean).join(" ");

// ─── Packages ───────────────────────────────────────────────────────────────
const packages = [
  {
    id: "basic",
    name: "Basic Concept",
    price: "$99.99",
    rawPrice: "99.99",
    payLink: "https://buy.stripe.com/8x2aEZ7MNf949mR0EFe7m05",
    tag: "Starter",
    desc: "Perfect for emerging artists ready to make their first mark.",
    features: [
      "Initial brand concept development",
      "2 logo concepts",
      "Color palette suggestion",
      "1 revision round",
      "Digital delivery",
    ],
    popular: false,
    elite: false,
  },
  {
    id: "community",
    name: "Community Marketing",
    price: "$149.99",
    rawPrice: "149.99",
    payLink: "https://buy.stripe.com/8x25kFd772micz3evve7m04",
    tag: "Grow",
    desc: "Amplify your presence and build a loyal following.",
    features: [
      "Social media kit (3 platforms)",
      "Content strategy brief",
      "5 branded post templates",
      "Audience targeting guide",
      "2 revision rounds",
    ],
    popular: false,
    elite: false,
  },
  {
    id: "logo",
    name: "Essential Logo",
    price: "$249.99",
    rawPrice: "249.99",
    payLink: "https://buy.stripe.com/dRm00l4AB7GC2Yt5YZe7m03",
    tag: "Identity",
    desc: "A powerful visual identity that speaks before you do.",
    features: [
      "Full logo suite (primary + variants)",
      "Typography selection",
      "Brand color system",
      "Vector source files",
      "3 revision rounds",
    ],
    popular: true,
    elite: false,
  },
  {
    id: "pro",
    name: "Pro Brand Identity",
    price: "$749.99",
    rawPrice: "749.99",
    payLink: "https://buy.stripe.com/eVq4gB6IJ1ie7eJgDDe7m02",
    tag: "Pro",
    desc: "Comprehensive brand system for serious creatives.",
    features: [
      "Complete brand identity system",
      "Full logo suite + usage guide",
      "Brand style book (20+ pages)",
      "Social media templates (all platforms)",
      "Merch mockups",
      "Unlimited revisions (30 days)",
    ],
    popular: false,
    elite: false,
  },
  {
    id: "elite",
    name: "Elite Production & Strategy",
    price: "$1,499.99",
    rawPrice: "1499.99",
    payLink: "https://buy.stripe.com/5kQfZj9UVd0W2Yt4UVe7m01",
    tag: "Elite",
    desc: "The complete artist development & launch ecosystem.",
    features: [
      "Everything in Pro Brand Identity",
      "Music production consultation",
      "Cover art (3 concepts)",
      "Artist development roadmap",
      "Press kit & EPK",
      "Label-ready strategy session",
      "Priority support (60 days)",
    ],
    popular: false,
    elite: true,
  },
];

// ─── Portfolio items ─────────────────────────────────────────────────────────
const portfolio = [
  {
    img: "/gen_portfolio-music-production-686436.webp",
    title: "Music Production",
    sub: "Studio Sessions & Mixing",
    cat: "AUDIO",
    link: null,
  },
  {
    img: "/gen_portfolio-streetwear-157ec4.webp",
    title: "DHS KNG Studio",
    sub: "Urban Streetwear Branding",
    cat: "BRAND",
    link: "https://dhskngstudio.com",
  },
  {
    img: "/gen_portfolio-cover-art-a96d5e.webp",
    title: "Cover Art",
    sub: "Visual Identity & Artwork",
    cat: "VISUAL",
    link: null,
  },
];

// ─── Hook: intersection observer ────────────────────────────────────────────
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── NavBar ──────────────────────────────────────────────────────────────────
function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Artist", href: "#artist" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "bg-[#060606]/96 backdrop-blur-lg border-b border-[#c9a84c]/10 shadow-[0_0_40px_rgba(0,0,0,0.8)]" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group shrink-0">
          <img src="/kc-logo.png" alt="KINGDOMCONNECT VIP" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(201,168,76,0.5)]" />
          <div className="leading-none">
            <span className="block text-white font-black text-sm tracking-[0.12em] uppercase">
              Kingdom<span className="text-[#c9a84c]">Connect</span>
            </span>
            <span className="block text-[9px] tracking-[0.35em] text-white/30 uppercase font-medium">VIP Agency</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href}
              className="text-white/50 hover:text-[#c9a84c] text-[11px] tracking-[0.22em] uppercase font-semibold transition-colors duration-300">
              {l.label}
            </a>
          ))}
          <a href="https://dhskngstudio.com" target="_blank" rel="noopener noreferrer"
            className="text-[11px] tracking-[0.2em] uppercase font-semibold px-5 py-2.5 border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black transition-all duration-300 rounded-[3px]">
            DHS KNG Studio ↗
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]" aria-label="Menu">
          <span className={cn("w-6 h-[2px] bg-white/80 transition-all duration-300 origin-center", menuOpen && "rotate-45 translate-y-[7px]")} />
          <span className={cn("w-6 h-[2px] bg-white/80 transition-all duration-300", menuOpen && "opacity-0 scale-x-0")} />
          <span className={cn("w-6 h-[2px] bg-white/80 transition-all duration-300 origin-center", menuOpen && "-rotate-45 -translate-y-[7px]")} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-400 bg-[#060606]/98 backdrop-blur-xl border-t border-white/5",
        menuOpen ? "max-h-[380px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-5 py-7 flex flex-col gap-5">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-white/60 hover:text-[#c9a84c] text-sm tracking-[0.2em] uppercase font-semibold transition-colors py-1">
              {l.label}
            </a>
          ))}
          <a href="https://dhskngstudio.com" target="_blank" rel="noopener noreferrer"
            className="text-center text-sm tracking-[0.18em] uppercase font-semibold px-5 py-3 border border-[#c9a84c]/40 text-[#c9a84c] rounded-[3px] mt-2">
            DHS KNG Studio ↗
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-[#060606]">
        <img src="/gen_kingdomconnect-hero-a18a14.webp" alt=""
          className="w-full h-full object-cover object-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606]/75 via-[#060606]/50 to-[#060606]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060606]/70 via-transparent to-[#060606]/70" />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "120px" }} />

      {/* Gold scan line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-10 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 border border-[#c9a84c]/25 rounded-full bg-[#c9a84c]/5 backdrop-blur-sm"
          style={{ animation: "fadeInDown 0.8s ease both" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] shadow-[0_0_6px_#39ff14]" style={{ animation: "pulse 2s infinite" }} />
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#c9a84c] font-semibold">Premier Creative Services Agency</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-[90px] font-black tracking-tight leading-[0.88] mb-6"
          style={{ animation: "fadeInUp 0.9s 0.15s ease both", fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
          <span className="block text-white">ELEVATE YOUR</span>
          <span className="block" style={{
            background: "linear-gradient(130deg, #c9a84c 0%, #f0d080 45%, #c9a84c 70%, #a0732a 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
          }}>CREATIVE</span>
          <span className="block text-white">VISION</span>
        </h1>

        <p className="text-white/55 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.9s 0.35s ease both" }}>
          Artist development. Visual identity. Cultural impact.<br />
          We build the brands that define the culture.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          style={{ animation: "fadeInUp 0.9s 0.5s ease both" }}>
          <a href="#pricing"
            className="group relative px-10 py-4 bg-gradient-to-r from-[#c9a84c] via-[#e8c96a] to-[#a0732a] text-black font-black text-sm tracking-[0.22em] uppercase rounded-[3px] overflow-hidden transition-transform duration-300 hover:scale-105 w-full sm:w-auto text-center shadow-[0_0_30px_rgba(201,168,76,0.35)]">
            <span className="relative z-10">Elevate Your Vision</span>
            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
          </a>
          <a href="https://kngcarly.com" target="_blank" rel="noopener noreferrer"
            className="px-10 py-4 border border-white/20 text-white/80 hover:border-[#39ff14]/50 hover:text-[#39ff14] font-semibold text-sm tracking-[0.2em] uppercase rounded-[3px] transition-all duration-300 w-full sm:w-auto text-center">
            KNG_CARLY ↗
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 opacity-35" style={{ animation: "fadeInUp 0.9s 0.8s ease both" }}>
          <span className="text-[10px] tracking-[0.35em] uppercase text-white/60">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}

// ─── Artist Spotlight ────────────────────────────────────────────────────────
function ArtistSpotlight() {
  const [ref, visible] = useReveal();
  return (
    <section id="artist" ref={ref} className="py-24 md:py-36 bg-[#060606] relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#c9a84c]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#39ff14]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Artist image */}
          <div className={cn("relative transition-all duration-1000", visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10")}>
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-[#c9a84c]/15 rounded-[4px]" />
              <div className="absolute -inset-6 border border-[#c9a84c]/6 rounded-[4px]" />
              {/* Gold corner marks */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#c9a84c]/60" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#c9a84c]/60" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#c9a84c]/60" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#c9a84c]/60" />

              <img src="/kng-carly-official.png" alt="KNG_CARLY — Flagship Artist"
                className="w-full aspect-square object-cover object-top rounded-[3px]"
                style={{ filter: "contrast(1.05) saturate(0.9)" }} />

              {/* Bottom overlay band */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#060606] to-transparent rounded-b-[3px]" />

              {/* Live badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#060606]/80 backdrop-blur-sm border border-[#39ff14]/30 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] shadow-[0_0_6px_#39ff14]" style={{ animation: "pulse 2s infinite" }} />
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#39ff14] font-bold">New Music Out Now</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={cn("transition-all duration-1000 delay-200", visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10")}>
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#c9a84c] font-semibold mb-3 block">Flagship Artist</span>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] mb-4 text-white"
              style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
              KNG_CARLY
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#c9a84c] to-transparent mb-7" />
            <p className="text-white/55 leading-relaxed mb-5 text-sm md:text-[15px]">
              KNG_CARLY is the defining voice of a new generation — an artist who moves at the intersection of sound, culture, and vision. Signed to the KINGDOMCONNECT VIP roster, his music is a blueprint for the audacious.
            </p>
            <p className="text-white/40 leading-relaxed text-sm mb-10">
              Stream, follow, and explore everything KNG_CARLY — from latest releases to exclusive content — all at his official hub.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { val: "Rising", label: "Artist" },
                { val: "Original", label: "Sound" },
                { val: "Global", label: "Reach" },
              ].map((s) => (
                <div key={s.label} className="border border-white/6 bg-white/2 p-4 rounded-[3px] text-center">
                  <div className="text-lg font-black text-[#c9a84c] mb-1" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>{s.val}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-white/30">{s.label}</div>
                </div>
              ))}
            </div>

            <a href="https://kngcarly.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c9a84c] via-[#e8c96a] to-[#a0732a] text-black font-black text-sm tracking-[0.22em] uppercase rounded-[3px] hover:scale-105 transition-transform duration-300 shadow-[0_0_25px_rgba(201,168,76,0.3)]">
              Music &amp; Links at kngcarly.com ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio ───────────────────────────────────────────────────────────────
function Portfolio() {
  const [ref, visible] = useReveal();
  return (
    <section id="portfolio" ref={ref} className="py-24 md:py-32 bg-[#040404] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#c9a84c]/4 blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className={cn("text-center mb-16 transition-all duration-800", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#c9a84c] font-semibold mb-4 block">Our Work</span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.93]"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
            CREATIVE<br />
            <span style={{ background: "linear-gradient(130deg, #c9a84c, #f0d080, #a0732a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              PORTFOLIO
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {portfolio.map((item, i) => {
            const Inner = (
              <div className={cn(
                "group relative overflow-hidden rounded-[3px] transition-all duration-900",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="aspect-square overflow-hidden bg-[#0c0c0c]">
                  <img src={item.img} alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-[#040404]/15 to-transparent opacity-80 group-hover:opacity-55 transition-opacity duration-500" />
                <div className="absolute inset-0 border border-transparent group-hover:border-[#c9a84c]/30 transition-colors duration-500 rounded-[3px]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                  <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c] font-bold mb-2 block">{item.cat}</span>
                  <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                  <p className="text-white/45 text-xs tracking-wide">{item.sub}</p>
                  {item.link && <span className="inline-block mt-2 text-[10px] tracking-[0.2em] uppercase text-[#c9a84c]/70 group-hover:text-[#c9a84c] transition-colors">Visit Site ↗</span>}
                </div>
                <div className="absolute top-4 right-4 w-7 h-7 border-t border-r border-[#c9a84c]/20 group-hover:border-[#c9a84c]/60 transition-colors duration-500" />
              </div>
            );
            return item.link
              ? <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer">{Inner}</a>
              : <div key={item.title}>{Inner}</div>;
          })}
        </div>

        <div className="text-center mt-12">
          <a href="https://dhskngstudio.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#c9a84c]/30 text-[#c9a84c] text-sm tracking-[0.2em] uppercase font-semibold hover:bg-[#c9a84c]/8 transition-all duration-300 rounded-[3px]">
            Full Portfolio at DHS KNG Studio ↗
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ─────────────────────────────────────────────────────────────────
function PricingCard({ pkg, index, visible }) {
  const isElite = pkg.elite;
  const isPopular = pkg.popular;

  return (
    <div className={cn(
      "relative flex flex-col rounded-[3px] transition-all duration-800 group",
      isElite ? "border border-[#c9a84c]/55 bg-gradient-to-b from-[#c9a84c]/8 to-[#060606] shadow-[0_0_40px_rgba(201,168,76,0.12)]"
      : isPopular ? "border border-[#39ff14]/45 bg-gradient-to-b from-[#39ff14]/5 to-[#060606] shadow-[0_0_30px_rgba(57,255,20,0.08)]"
      : "border border-white/7 bg-[#0c0c0c] hover:border-[#c9a84c]/20",
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    )} style={{ transitionDelay: `${index * 100}ms` }}>

      {isPopular && <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39ff14] to-transparent" />}
      {isElite && <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />}

      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span className={cn(
            "text-[10px] tracking-[0.28em] uppercase font-bold px-3 py-1 rounded-full",
            isElite ? "bg-[#c9a84c]/15 text-[#c9a84c]"
            : isPopular ? "bg-[#39ff14]/12 text-[#39ff14]"
            : "bg-white/5 text-white/35"
          )}>{pkg.tag}</span>
          {isPopular && <span className="text-[9px] tracking-[0.18em] uppercase text-[#39ff14] font-bold">Most Popular</span>}
          {isElite && <span className="text-[9px] tracking-[0.18em] uppercase text-[#c9a84c] font-bold">★ Best Value</span>}
        </div>

        <h3 className="text-white font-bold text-base mb-1.5">{pkg.name}</h3>
        <p className="text-white/38 text-[12px] leading-relaxed mb-5">{pkg.desc}</p>

        {/* Price */}
        <div className="mb-5">
          <span className="text-[42px] font-black leading-none" style={{
            background: isElite ? "linear-gradient(135deg, #c9a84c, #f0d080)"
              : isPopular ? "linear-gradient(135deg, #39ff14, #b0ff70)"
              : "linear-gradient(135deg, #e0e0e0, #888888)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            fontFamily: "'Bebas Neue', Impact, sans-serif",
          }}>{pkg.price}</span>
          <span className="text-white/25 text-[11px] ml-1.5">/ project</span>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-7 flex-1">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-[12px] text-white/55">
              <span className={cn(
                "shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[9px] mt-0.5 font-bold",
                isElite ? "bg-[#c9a84c]/18 text-[#c9a84c]"
                : isPopular ? "bg-[#39ff14]/12 text-[#39ff14]"
                : "bg-white/5 text-white/35"
              )}>✓</span>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a href={pkg.payLink} target="_blank" rel="noopener noreferrer"
          className={cn(
            "block w-full py-3.5 text-[12px] tracking-[0.22em] uppercase font-black rounded-[3px] transition-all duration-300 text-center",
            isElite
              ? "bg-gradient-to-r from-[#c9a84c] via-[#e8c96a] to-[#a0732a] text-black hover:opacity-90 hover:scale-[1.02] shadow-[0_0_20px_rgba(201,168,76,0.3)]"
              : isPopular
              ? "bg-[#39ff14]/12 text-[#39ff14] border border-[#39ff14]/35 hover:bg-[#39ff14]/22 hover:scale-[1.02] shadow-[0_0_15px_rgba(57,255,20,0.1)]"
              : "border border-white/10 text-white/55 hover:border-[#c9a84c]/35 hover:text-[#c9a84c] hover:bg-[#c9a84c]/4"
          )}>
          Pay Now — {pkg.price}
        </a>
      </div>
    </div>
  );
}

function Pricing() {
  const [ref, visible] = useReveal();
  return (
    <section id="pricing" ref={ref} className="py-24 md:py-32 bg-[#060606] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-52 bg-[#c9a84c]/3 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className={cn("text-center mb-16 transition-all duration-800", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#c9a84c] font-semibold mb-4 block">Investment</span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.93] mb-5"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
            CHOOSE YOUR<br />
            <span style={{ background: "linear-gradient(130deg, #c9a84c, #f0d080, #a0732a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              LEVEL
            </span>
          </h2>
          <p className="text-white/35 max-w-md mx-auto text-sm leading-relaxed">
            Every package is a step toward your vision. From first concept to full-scale brand strategy — we grow with you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {packages.map((pkg, i) => (
            <PricingCard key={pkg.id} pkg={pkg} index={i} visible={visible} />
          ))}
        </div>

        <p className="text-center text-white/20 text-xs tracking-wide mt-8">
          All prices in USD. Custom packages available — <a href="#contact" className="text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors underline">contact us</a> to discuss your project.
        </p>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────
function Contact() {
  const [ref, visible] = useReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState("idle");

  // Listen for service pre-selection from pricing CTAs
  useEffect(() => {
    const handler = (e) => setForm((f) => ({ ...f, service: e.detail }));
    window.addEventListener("kc:selectService", handler);
    return () => window.removeEventListener("kc:selectService", handler);
  }, []);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    }, 1000);
  };

  const services = packages.map((p) => `${p.name} (${p.price})`).concat(["Custom / Not Sure Yet"]);
  const inputCls = "w-full bg-white/3 border border-white/8 rounded-[3px] px-4 py-3.5 text-white text-sm placeholder-white/18 focus:outline-none focus:border-[#c9a84c]/45 focus:bg-[#c9a84c]/3 transition-all duration-300";

  // ── Social links ──
  const socials = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      ),
      label: "WhatsApp",
      sub: "+1 305-680-4785",
      href: "https://wa.me/13056804785",
      color: "#25D366",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
      ),
      label: "Telegram",
      sub: "+1 305-680-4785",
      href: "https://t.me/13056804785",
      color: "#0088cc",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      label: "Email",
      sub: "contact@kingdomconnectvip.com",
      href: "mailto:contact@kingdomconnectvip.com",
      color: "#c9a84c",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
      ),
      label: "Instagram",
      sub: "@kingdomconnectvip",
      href: "https://instagram.com/kingdomconnectvip",
      color: "#E1306C",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 bg-[#040404] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#c9a84c]/4 blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full bg-[#39ff14]/3 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className={cn("text-center mb-16 transition-all duration-800", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#c9a84c] font-semibold mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.93] mb-5"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
            READY TO<br />
            <span style={{ background: "linear-gradient(130deg, #c9a84c, #f0d080, #a0732a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              ELEVATE?
            </span>
          </h2>
          <p className="text-white/35 max-w-md mx-auto text-sm">
            Drop us a message and we'll respond within 24 hours. Every great brand starts with a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — socials */}
          <div className={cn("transition-all duration-800", visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8")}>
            <h3 className="text-white font-bold text-lg mb-8 tracking-wide">Connect Directly</h3>
            <div className="space-y-4 mb-12">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-white/7 rounded-[3px] bg-white/2 hover:border-white/15 hover:bg-white/4 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-[3px] flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{ background: `${s.color}18`, color: s.color, boxShadow: `0 0 0 1px ${s.color}25` }}>
                    {s.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-0.5">{s.label}</div>
                    <div className="text-sm text-white/70 group-hover:text-white transition-colors truncate">{s.sub}</div>
                  </div>
                  <span className="ml-auto text-white/20 group-hover:text-white/50 transition-colors text-sm shrink-0">↗</span>
                </a>
              ))}
            </div>

            {/* Agency links */}
            <div className="border-t border-white/6 pt-8">
              <h4 className="text-[11px] tracking-[0.3em] uppercase text-white/30 font-semibold mb-5">Our Brands</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "kngcarly.com", href: "https://kngcarly.com" },
                  { label: "dhskngstudio.com", href: "https://dhskngstudio.com" },
                ].map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 border border-[#c9a84c]/25 text-[#c9a84c]/70 hover:text-[#c9a84c] hover:border-[#c9a84c]/50 text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300 rounded-[3px]">
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className={cn("transition-all duration-800 delay-200", visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8")}>
            <div className="relative border border-white/8 rounded-[3px] p-7 md:p-8 bg-[#080808]">
              {/* Corner marks */}
              {["top-0 left-0 border-t border-l", "top-0 right-0 border-t border-r", "bottom-0 left-0 border-b border-l", "bottom-0 right-0 border-b border-r"].map((c) => (
                <div key={c} className={`absolute w-5 h-5 border-[#c9a84c]/30 ${c}`} />
              ))}

              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center text-2xl text-[#c9a84c]">✓</div>
                  <h3 className="text-white font-bold text-xl mb-3">Message Received</h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto">
                    We'll be in touch within 24 hours to discuss your vision. Welcome to the kingdom.
                  </p>
                  <button onClick={() => setStatus("idle")}
                    className="mt-6 text-[#c9a84c] text-xs tracking-[0.2em] uppercase border-b border-[#c9a84c]/30 hover:border-[#c9a84c] transition-colors pb-0.5">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] tracking-[0.25em] uppercase text-white/28 mb-1.5 block">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputCls} />
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[0.25em] uppercase text-white/28 mb-1.5 block">Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className={inputCls} />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.25em] uppercase text-white/28 mb-1.5 block">Phone / WhatsApp</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (000) 000-0000" className={inputCls} />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.25em] uppercase text-white/28 mb-1.5 block">Service Interested In</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className={cn(inputCls, "appearance-none cursor-pointer")}>
                      <option value="" className="bg-[#080808]">Select a package…</option>
                      {services.map((s) => <option key={s} value={s} className="bg-[#080808]">{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.25em] uppercase text-white/28 mb-1.5 block">Tell Us About Your Vision</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Describe your project, goals, and any ideas you have…"
                      className={cn(inputCls, "resize-none")} />
                  </div>
                  {status === "error" && (
                    <p className="text-red-400/80 text-xs tracking-wide">Something went wrong. Please try again or reach out via WhatsApp.</p>
                  )}
                  <button type="submit" disabled={status === "sending"}
                    className="w-full py-4 bg-gradient-to-r from-[#c9a84c] via-[#e8c96a] to-[#a0732a] text-black font-black text-sm tracking-[0.22em] uppercase rounded-[3px] hover:opacity-90 disabled:opacity-50 transition-opacity duration-300 shadow-[0_0_25px_rgba(201,168,76,0.3)]">
                    {status === "sending" ? "Sending…" : "Elevate My Vision →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/5">
      {/* Gold top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14">
        <div className="grid md:grid-cols-3 gap-10 md:gap-6 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/kc-logo.png" alt="KINGDOMCONNECT VIP" className="w-9 h-9 object-contain drop-shadow-[0_0_8px_rgba(201,168,76,0.5)]" />
              <div>
                <div className="text-white font-black text-sm tracking-[0.12em] uppercase">KingdomConnect <span className="text-[#c9a84c]">VIP</span></div>
                <div className="text-[9px] tracking-[0.3em] text-white/25 uppercase">Creative Agency</div>
              </div>
            </div>
            <p className="text-white/30 text-xs leading-relaxed max-w-[220px]">
              Premier creative services agency & artist development hub. Building brands that define the culture.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-semibold mb-5">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Artist — KNG_CARLY", href: "#artist" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Pricing", href: "#pricing" },
                { label: "Contact", href: "#contact" },
                { label: "kngcarly.com", href: "https://kngcarly.com", ext: true },
                { label: "dhskngstudio.com", href: "https://dhskngstudio.com", ext: true },
              ].map((l) => (
                <a key={l.label} href={l.href}
                  target={l.ext ? "_blank" : undefined}
                  rel={l.ext ? "noopener noreferrer" : undefined}
                  className="text-white/30 hover:text-[#c9a84c] text-xs tracking-wide transition-colors duration-200 py-0.5">
                  {l.label}{l.ext ? " ↗" : ""}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-semibold mb-5">Connect</h4>
            <div className="space-y-3">
              {[
                { icon: "💬", label: "WhatsApp / Telegram", val: "+1 305-680-4785", href: "https://wa.me/13056804785" },
                { icon: "✉️", label: "Email", val: "contact@kingdomconnectvip.com", href: "mailto:contact@kingdomconnectvip.com" },
                { icon: "📸", label: "Instagram", val: "@kingdomconnectvip", href: "https://instagram.com/kingdomconnectvip" },
              ].map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-2.5 group hover:opacity-80 transition-opacity">
                  <span className="text-xs mt-0.5 shrink-0">{c.icon}</span>
                  <div>
                    <div className="text-[9px] tracking-[0.2em] uppercase text-white/25 mb-0.5">{c.label}</div>
                    <div className="text-xs text-white/50 group-hover:text-[#c9a84c] transition-colors break-all">{c.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white/20 text-[11px] tracking-wide">
            © {new Date().getFullYear()} KINGDOMCONNECT VIP. All rights reserved.
          </span>
          <span className="text-white/15 text-[11px] tracking-wide">
            Powered by the Kingdom.
          </span>
        </div>
      </div>
    </footer>
  );
}

// ─── Root ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-[#060606] min-h-screen">
      <NavBar />
      <Hero />
      <ArtistSpotlight />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
