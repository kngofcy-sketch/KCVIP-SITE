import React, { useState } from 'react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@kingdomconnectvip.com?subject=Inquiry from ${encodeURIComponent(formData.fullName)}&body=${encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Interest: ${formData.service}\n\nVision:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-yellow-500 selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <span className="font-bold tracking-wider text-sm flex items-center gap-2">
              <span className="text-yellow-500 font-black text-xl">KINGDOMCONNECT</span> VIP AGENCY
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-xs tracking-widest font-semibold uppercase">
            <a href="#artist" className="hover:text-yellow-500 transition-colors">ARTIST</a>
            <a href="#portfolio" className="hover:text-yellow-500 transition-colors">PORTFOLIO</a>
            <a href="#pricing" className="hover:text-yellow-500 transition-colors">PRICING</a>
            <a href="#contact" className="hover:text-yellow-500 transition-colors">CONTACT</a>
            <a href="https://dhskngstudio.com/" target="_blank" rel="noreferrer" className="text-yellow-500 hover:underline">DHS KNG STUDIO ↗</a>
          </div>
          <button
            type="button"
            className="md:hidden border border-neutral-700 px-3 py-2 text-xs font-bold tracking-widest uppercase hover:border-yellow-500"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
        {menuOpen && (
          <div id="mobile-navigation" className="md:hidden border-t border-neutral-800 bg-black px-6 py-5">
            <div className="flex flex-col gap-4 text-xs tracking-widest font-semibold uppercase">
              <a href="#artist" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500">ARTIST</a>
              <a href="#portfolio" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500">PORTFOLIO</a>
              <a href="#pricing" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500">PRICING</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500">CONTACT</a>
              <a href="https://dhskngstudio.com/" target="_blank" rel="noreferrer" className="text-yellow-500 hover:underline">DHS KNG STUDIO ↗</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-center min-h-screen">
        <span className="text-xs font-bold tracking-[0.3em] text-yellow-500 uppercase mb-4">PREMIER CREATIVE SERVICES AGENCY</span>
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight mb-6 leading-none">
          ELEVATE YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
            CREATIVE VISION
          </span>
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-8">
          Artist development. Visual identity. Cultural impact. We build the brands that define the culture.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#pricing" className="bg-yellow-500 text-black font-bold px-8 py-4 uppercase tracking-wider hover:bg-yellow-400 transition-all">
            ELEVATE YOUR VISION
          </a>
          <a href="https://kngcarly.com/" target="_blank" rel="noreferrer" className="border border-neutral-700 px-8 py-4 uppercase tracking-wider font-bold hover:border-yellow-500 transition-all">
            KNG_CARLY ↗
          </a>
        </div>
      </section>

      {/* Artist Section */}
      <section id="artist" className="py-24 bg-neutral-950 border-t border-b border-neutral-800 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase">FLAGSHIP ARTIST</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight my-4">KNG_CARLY</h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              KNG_CARLY is the defining voice of a new generation — an artist who moves at the intersection of sound, culture, and vision. Signed to the KINGDOMCONNECT VIP roster, his music is a blueprint for the audacious.
            </p>
            <p className="text-neutral-500 text-sm mb-6">
              Stream, follow, and explore everything KNG_CARLY — from latest releases to exclusive content — all at his official hub.
            </p>
            <a href="https://kngcarly.com/" target="_blank" rel="noreferrer" className="inline-block border-b-2 border-yellow-500 pb-1 font-bold tracking-wider hover:text-yellow-500 transition-colors">
              MUSIC & LINKS AT KNGCARLY.COM ↗
            </a>
          </div>
          <div className="border border-neutral-800 p-8 bg-black text-center">
            <span className="text-sm font-bold tracking-widest text-neutral-500 block mb-2">NEW MUSIC OUT NOW</span>
            <p className="text-3xl font-black uppercase text-yellow-500">NIVELES & POR CUBA</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
        <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase">OUR WORK</span>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight my-4">CREATIVE PORTFOLIO</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="border border-neutral-800 p-8 bg-neutral-950">
            <span className="text-xs font-bold text-yellow-500">AUDIO</span>
            <h3 className="text-2xl font-bold uppercase mt-2 mb-2">Music Production</h3>
            <p className="text-neutral-400 text-sm">Studio Sessions & Mixing</p>
          </div>

          <div className="border border-neutral-800 p-8 bg-neutral-950">
            <span className="text-xs font-bold text-yellow-500">BRAND</span>
            <h3 className="text-2xl font-bold uppercase mt-2 mb-2">DHS KNG Studio</h3>
            <p className="text-neutral-400 text-sm mb-4">Urban Streetwear Branding</p>
            <a href="https://dhskngstudio.com/" target="_blank" rel="noreferrer" className="text-xs font-bold text-yellow-500 underline">VISIT SITE ↗</a>
          </div>

          <div className="border border-neutral-800 p-8 bg-neutral-950">
            <span className="text-xs font-bold text-yellow-500">VISUAL</span>
            <h3 className="text-2xl font-bold uppercase mt-2 mb-2">Cover Art</h3>
            <p className="text-neutral-400 text-sm">Visual Identity & Artwork</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="https://dhskngstudio.com/" target="_blank" rel="noreferrer" className="text-xs font-bold tracking-widest text-yellow-500 uppercase hover:underline">
            FULL PORTFOLIO AT DHS KNG STUDIO ↗
          </a>
        </div>
      </section>

      {/* Pricing Section - Stripe Links Reales */}
      <section id="pricing" className="py-24 bg-neutral-950 border-t border-neutral-800 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase">INVESTMENT</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight my-4">CHOOSE YOUR LEVEL</h2>
          <p className="text-neutral-400 mb-12">Every package is a step toward your vision. From first concept to full-scale brand strategy — we grow with you.</p>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* $99.99 */}
            <div className="border border-neutral-800 bg-black p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-neutral-500 uppercase">STARTER</span>
                <h3 className="text-xl font-bold uppercase my-2">Basic Concept</h3>
                <p className="text-2xl font-black text-yellow-500 mb-4">$99.99 <span className="text-xs text-neutral-500 font-normal">/ project</span></p>
                <ul className="text-xs text-neutral-400 space-y-2 mb-6">
                  <li>✓ Initial brand concept development</li>
                  <li>✓ 2 logo concepts</li>
                  <li>✓ Color palette suggestion</li>
                  <li>✓ 1 revision round</li>
                  <li>✓ Digital delivery</li>
                </ul>
              </div>
              <a href="https://buy.stripe.com/8x2aEZ7MNf949mR0EFe7m05" target="_blank" rel="noreferrer" className="block text-center bg-yellow-500 text-black text-xs font-bold py-3 uppercase tracking-wider hover:bg-yellow-400">
                PAY NOW — $99.99
              </a>
            </div>

            {/* $149.99 */}
            <div className="border border-neutral-800 bg-black p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-neutral-500 uppercase">GROW</span>
                <h3 className="text-xl font-bold uppercase my-2">Community Marketing</h3>
                <p className="text-2xl font-black text-yellow-500 mb-4">$149.99 <span className="text-xs text-neutral-500 font-normal">/ project</span></p>
                <ul className="text-xs text-neutral-400 space-y-2 mb-6">
                  <li>✓ Social media kit (3 platforms)</li>
                  <li>✓ Content strategy brief</li>
                  <li>✓ 5 branded post templates</li>
                  <li>✓ Audience targeting guide</li>
                  <li>✓ 2 revision rounds</li>
                </ul>
              </div>
              <a href="https://buy.stripe.com/8x25kFd772micz3evve7m04" target="_blank" rel="noreferrer" className="block text-center bg-yellow-500 text-black text-xs font-bold py-3 uppercase tracking-wider hover:bg-yellow-400">
                PAY NOW — $149.99
              </a>
            </div>

            {/* $249.99 */}
            <div className="border-2 border-yellow-500 bg-black p-6 flex flex-col justify-between relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[10px] font-black px-2 py-0.5 uppercase tracking-widest">
                MOST POPULAR
              </span>
              <div>
                <span className="text-xs font-bold text-yellow-500 uppercase">IDENTITY</span>
                <h3 className="text-xl font-bold uppercase my-2">Essential Logo</h3>
                <p className="text-2xl font-black text-yellow-500 mb-4">$249.99 <span className="text-xs text-neutral-500 font-normal">/ project</span></p>
                <ul className="text-xs text-neutral-400 space-y-2 mb-6">
                  <li>✓ Full logo suite (primary + variants)</li>
                  <li>✓ Typography selection</li>
                  <li>✓ Brand color system</li>
                  <li>✓ Vector source files</li>
                  <li>✓ 3 revision rounds</li>
                </ul>
              </div>
              <a href="https://buy.stripe.com/dRm00l4AB7GC2Yt5YZe7m03" target="_blank" rel="noreferrer" className="block text-center bg-yellow-500 text-black text-xs font-bold py-3 uppercase tracking-wider hover:bg-yellow-400">
                PAY NOW — $249.99
              </a>
            </div>

            {/* $749.99 */}
            <div className="border border-neutral-800 bg-black p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-neutral-500 uppercase">PRO</span>
                <h3 className="text-xl font-bold uppercase my-2">Pro Brand Identity</h3>
                <p className="text-2xl font-black text-yellow-500 mb-4">$749.99 <span className="text-xs text-neutral-500 font-normal">/ project</span></p>
                <ul className="text-xs text-neutral-400 space-y-2 mb-6">
                  <li>✓ Complete brand identity system</li>
                  <li>✓ Full logo suite + usage guide</li>
                  <li>✓ Brand style book (20+ pages)</li>
                  <li>✓ Social media templates</li>
                  <li>✓ Merch mockups</li>
                  <li>✓ Unlimited revisions (30 days)</li>
                </ul>
              </div>
              <a href="https://buy.stripe.com/eVq4gB6IJ1ie7eJgDDe7m02" target="_blank" rel="noreferrer" className="block text-center bg-yellow-500 text-black text-xs font-bold py-3 uppercase tracking-wider hover:bg-yellow-400">
                PAY NOW — $749.99
              </a>
            </div>

            {/* $1,499.99 */}
            <div className="border border-neutral-800 bg-black p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-yellow-500 uppercase">ELITE ★ BEST VALUE</span>
                <h3 className="text-xl font-bold uppercase my-2">Elite Production & Strategy</h3>
                <p className="text-2xl font-black text-yellow-500 mb-4">$1,499.99 <span className="text-xs text-neutral-500 font-normal">/ project</span></p>
                <ul className="text-xs text-neutral-400 space-y-2 mb-6">
                  <li>✓ Everything in Pro Brand Identity</li>
                  <li>✓ Music production consultation</li>
                  <li>✓ Cover art (3 concepts)</li>
                  <li>✓ Artist development roadmap</li>
                  <li>✓ Press kit & EPK</li>
                  <li>✓ Label-ready strategy session</li>
                  <li>✓ Priority support (60 days)</li>
                </ul>
              </div>
              <a href="https://buy.stripe.com/5kQfZj9UVd0W2Yt4UVe7m01" target="_blank" rel="noreferrer" className="block text-center bg-yellow-500 text-black text-xs font-bold py-3 uppercase tracking-wider hover:bg-yellow-400">
                PAY NOW — $1,499.99
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase">GET IN TOUCH</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight my-4">READY TO ELEVATE?</h2>
            <p className="text-neutral-400 mb-8">Drop us a message and we'll respond within 24 hours. Every great brand starts with a conversation.</p>

            <div className="space-y-4 font-bold text-sm">
              <a href="https://wa.me/13056804785" target="_blank" rel="noreferrer" className="block text-yellow-500 hover:underline">WHATSAPP +1 305-680-4785 ↗</a>
              <a href="https://t.me/13056804785" target="_blank" rel="noreferrer" className="block text-yellow-500 hover:underline">TELEGRAM +1 305-680-4785 ↗</a>
              <a href="mailto:contact@kingdomconnectvip.com" className="block text-yellow-500 hover:underline">EMAIL contact@kingdomconnectvip.com ↗</a>
              <a href="https://instagram.com/kingdomconnectvip" target="_blank" rel="noreferrer" className="block text-yellow-500 hover:underline">INSTAGRAM @kingdomconnectvip ↗</a>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-800">
              <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase block mb-3">OUR BRANDS</span>
              <div className="flex gap-4 text-xs font-bold">
                <a href="https://kngcarly.com/" target="_blank" rel="noreferrer" className="text-yellow-500 hover:underline">KNGCARLY.COM ↗</a>
                <a href="https://dhskngstudio.com/" target="_blank" rel="noreferrer" className="text-yellow-500 hover:underline">DHSKNGSTUDIO.COM ↗</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-neutral-950 p-8 border border-neutral-800">
            <div>
              <label className="block text-xs font-bold uppercase mb-2">Full Name *</label>
              <input type="text" required placeholder="Your name" className="w-full bg-black border border-neutral-800 p-3 text-sm focus:border-yellow-500 outline-none" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-2">Email *</label>
              <input type="email" required placeholder="you@example.com" className="w-full bg-black border border-neutral-800 p-3 text-sm focus:border-yellow-500 outline-none" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-2">Phone / WhatsApp</label>
              <input type="text" placeholder="+1 (000) 000-0000" className="w-full bg-black border border-neutral-800 p-3 text-sm focus:border-yellow-500 outline-none" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-2">Service Interested In</label>
              <select className="w-full bg-black border border-neutral-800 p-3 text-sm focus:border-yellow-500 outline-none" value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}>
                <option value="">Select a package...</option>
                <option value="Basic Concept ($99.99)">Basic Concept ($99.99)</option>
                <option value="Community Marketing ($149.99)">Community Marketing ($149.99)</option>
                <option value="Essential Logo ($249.99)">Essential Logo ($249.99)</option>
                <option value="Pro Brand Identity ($749.99)">Pro Brand Identity ($749.99)</option>
                <option value="Elite Production & Strategy ($1,499.99)">Elite Production & Strategy ($1,499.99)</option>
                <option value="Custom / Not Sure Yet">Custom / Not Sure Yet</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-2">Tell us about your vision</label>
              <textarea rows="4" placeholder="Describe your project, goals, and any ideas you have..." className="w-full bg-black border border-neutral-800 p-3 text-sm focus:border-yellow-500 outline-none" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
            </div>
            <button type="submit" className="w-full bg-yellow-500 text-black font-black p-4 uppercase tracking-wider hover:bg-yellow-400 transition-colors">
              ELEVATE MY VISION →
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12 px-6 text-xs text-neutral-500 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="font-bold text-white mb-1">KINGDOMCONNECT VIP CREATIVE AGENCY</p>
          <p>Premier creative services agency & artist development hub.</p>
        </div>
        <p>© 2026 KINGDOMCONNECT VIP. All rights reserved. Powered by the Kingdom.</p>
      </footer>
    </div>
  );
}
