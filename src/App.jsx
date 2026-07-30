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
    img: "./gen_portfolio-music-production-686436.webp",
    title: "Music Production",
    sub: "Studio Sessions & Mixing",
    cat: "AUDIO",
    link: null,
  },
  {
    img: "./gen_portfolio-streetwear-157ec4.webp",
    title: "DHS KNG Studio",
    sub: "Urban Streetwear Branding",
    cat: "BRAND",
    link: "https://dhskngstudio.com",
  },
  {
    img: "./gen_portfolio-cover-art-a96d5e.webp",
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
          <img src="./kc-logo.png" alt="KINGDOMCONNECT VIP" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(201,168,76,0.5)]" onError={(e) => { e.target.style.display='none'; }} />
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
        <img src="./gen_kingdomconnect-hero-a18a14.webp" alt=""
          className="w-full h-full object-cover object-center opacity-40" onError={(e) => { e.target.style.display='none'; }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606]/75 via-[#060606]/50 to-[#060606]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060606]/70 via-transparent to-[#060606]/70" />
      </div>

      {/* Gold scan line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-10 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 border border-[#c9a84c]/25 rounded-full bg-[#c9a84c]/5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] shadow-[0_0_6px_#39ff14]" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#c9a84c] font-semibold">Premier Creative Services Agency</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-[90px] font-black tracking-tight leading-[0.88] mb-6 font-sans">
          <span className="block text-white">ELEVATE YOUR</span>
          <span className="block" style={{
            background: "linear-gradient(130deg, #c9a84c 0%, #f0d080 45%, #c9a84c 70%, #a0732a 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
          }}>CREATIVE</span>
          <span className="block text-white">VISION</span>
        </h1>

        <p className="text-white/55 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          Artist development. Visual identity. Cultural impact.<br />
          We build the brands that define the culture.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a href="#pricing"
            className="group relative px-10 py-4 bg-gradient-to-r from-[#c9a84c] via-[#e8c96a] to-[#a0732a] text-black font-black text-sm tracking-[0.22em] uppercase rounded-[3px] overflow-hidden transition-transform duration-300 hover:scale-105 w-full sm:w-auto text-center shadow-[0_0_30px_rgba(201,168,76,0.35)]">
            <span className="relative z-10">Elevate Your Vision</span>
          </a>
          <a href="https://kngcarly.com" target="_blank" rel="noopener noreferrer"
            className="px-10 py-4 border border-white/20 text-white/80 hover:border-[#39ff14]/50 hover:text-[#39ff14] font-semibold text-sm tracking-[0.2em] uppercase rounded-[3px] transition-all duration-300 w-full sm:w-auto text-center">
            KNG_CARLY ↗
          </a>
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
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={cn("relative transition-all duration-1000", visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10")}>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-3 border border-[#c9a84c]/15 rounded-[4px]" />
              <img src="./kng-carly-official.png" alt="KNG_CARLY — Flagship Artist"
                className="w-full aspect-square object-cover object-top rounded-[3px] bg-[#111]"
                onError={(e) => { e.target.style.display='none'; }} />
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#060606]/80 backdrop-blur-sm border border-[#39ff14]/30 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14]" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#39ff14] font-bold">New Music Out Now</span>
              </div>
            </div>
          </div>

          <div className={cn("transition-all duration-1000 delay-200", visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10")}>
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#c9a84c] font-semibold mb-3 block">Flagship Artist</span>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] mb-4 text-white">
              KNG_CARLY
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#c9a84c] to-transparent mb-7" />
            <p className="text-white/55 leading-relaxed mb-5 text-sm md:text-[15px]">
              KNG_CARLY is the defining voice of a new generation — an artist who moves at the intersection of sound, culture, and vision.
            </p>
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
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className={cn("text-center mb-16 transition-all duration-800", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#c9a84c] font-semibold mb-4 block">Our Work</span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.93]">
            CREATIVE PORTFOLIO
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {portfolio.map((item, i) => (
            <div key={item.title} className="group relative overflow-hidden rounded-[3px] border border-white/10 bg-[#0c0c0c] p-4">
              <div className="aspect-square overflow-hidden bg-[#151515] mb-4">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" onError={(e) => { e.target.style.display='none'; }} />
              </div>
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c] font-bold block mb-1">{item.cat}</span>
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <p className="text-white/45 text-xs">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ─────────────────────────────────────────────────────────────────
function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#060606]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-12">PRICING PACKAGES</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 text-left">
          {packages.map((pkg) => (
            <div key={pkg.id} className="border border-white/10 bg-[#0c0c0c] p-6 rounded-[3px] flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#c9a84c] bg-[#c9a84c]/10 px-2 py-1 rounded">{pkg.tag}</span>
                <h3 className="text-white font-bold text-lg mt-3">{pkg.name}</h3>
                <p className="text-white/40 text-xs mb-4">{pkg.desc}</p>
                <div className="text-3xl font-black text-[#c9a84c] mb-6">{pkg.price}</div>
              </div>
              <a href={pkg.payLink} target="_blank" rel="noopener noreferrer" className="block text-center py-3 bg-[#c9a84c] text-black font-bold text-xs uppercase rounded">
                Pay Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact & Footer ────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#040404] text-center">
      <h2 className="text-4xl font-black text-white mb-4">READY TO ELEVATE?</h2>
      <p className="text-white/40 text-sm mb-8">Contact us directly via WhatsApp or Email.</p>
      <div className="flex justify-center gap-4">
        <a href="https://wa.me/13056804785" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#25D366] text-black font-bold text-sm rounded">
          WhatsApp ↗
        </a>
        <a href="mailto:contact@kingdomconnectvip.com" className="px-6 py-3 border border-white/20 text-white font-bold text-sm rounded">
          Email Us
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#060606] py-8 border-t border-white/10 text-center text-white/30 text-xs">
      © {new Date().getFullYear()} KINGDOMCONNECT VIP. All rights reserved.
    </footer>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-[#060606] min-h-screen text-white">
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
