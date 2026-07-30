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
