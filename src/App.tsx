import { useState } from "react";

const YELLOW = "#f5a800";
const DARK = "#0d0d0d";
const STEEL = "#1a1a1a";
const CONCRETE = "#252525";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", background: DARK, color: "#e8e8e8", minHeight: "100vh" }}>
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Stats />
      <Services activeService={activeService} setActiveService={setActiveService} />
      <Projects />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

/* ── NAV ── */
function Nav({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  const links = ["Services", "Projects", "About", "Contact"];
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
      style={{ background: "rgba(13,13,13,0.95)", borderBottom: "1px solid rgba(245,168,0,0.15)", backdropFilter: "blur(8px)" }}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center" style={{ background: YELLOW }}>
          <HardHatIcon />
        </div>
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.3rem", fontWeight: 800, letterSpacing: "0.06em", color: "#fff" }}>
          IRONCLAD <span style={{ color: YELLOW }}>BUILD</span>
        </span>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-sm font-medium tracking-widest uppercase transition-colors"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#aaa", letterSpacing: "0.12em" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = YELLOW)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
          >
            {l}
          </a>
        ))}
        <a
          href="#contact"
          className="px-5 py-2 text-sm font-bold tracking-widest uppercase transition-all"
          style={{ background: YELLOW, color: DARK, fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.12em" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = DARK; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = YELLOW; e.currentTarget.style.color = DARK; }}
        >
          Get a Quote
        </a>
      </div>

      {/* Mobile toggle */}
      <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {[0, 1, 2].map((i) => (
          <span key={i} className="block w-6 h-0.5 transition-all" style={{ background: menuOpen && i === 1 ? "transparent" : YELLOW, transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(4px, 5px)" : i === 2 ? "rotate(-45deg) translate(4px, -5px)" : "") : "" }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 flex flex-col gap-0" style={{ background: STEEL, borderBottom: `2px solid ${YELLOW}` }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="px-6 py-4 text-sm uppercase tracking-widest border-b" onClick={() => setMenuOpen(false)} style={{ fontFamily: "'Barlow Condensed', sans-serif", borderColor: "rgba(255,255,255,0.06)", color: "#ccc" }}>{l}</a>
          ))}
          <a href="#contact" className="px-6 py-4 text-sm uppercase tracking-widest font-bold text-center" style={{ background: YELLOW, color: DARK, fontFamily: "'Barlow Condensed', sans-serif" }} onClick={() => setMenuOpen(false)}>Get a Quote</a>
        </div>
      )}
    </nav>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <section className="relative flex items-end min-h-screen overflow-hidden" style={{ paddingTop: "80px" }}>
      <img
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&h=900&fit=crop&auto=format"
        alt="Construction workers on a job site"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.35)" }}
      />
      {/* yellow left bar accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: YELLOW }} />

      {/* Diagonal overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,13,0.98) 0%, rgba(13,13,13,0.4) 60%, transparent 100%)" }} />

      <div className="relative z-10 w-full px-6 md:px-16 pb-20 md:pb-28">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12" style={{ background: YELLOW }} />
            <span className="text-xs tracking-[0.35em] uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: YELLOW }}>Est. 2003 · Licensed & Insured</span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, lineHeight: 0.9, color: "#fff" }}>
            <span className="block" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}>BUILDING</span>
            <span className="block" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", color: YELLOW }}>THE FUTURE,</span>
            <span className="block" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}>ONE BEAM</span>
            <span className="block" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}>AT A TIME.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: "#aaa", fontWeight: 400 }}>
            Ironclad Build delivers commercial, residential, and infrastructure projects on time, on budget, and built to outlast generations. No shortcuts. No compromises.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#projects" className="px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all" style={{ background: YELLOW, color: DARK, fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.15em" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = YELLOW; }}>
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all" style={{ border: `1px solid rgba(245,168,0,0.5)`, color: YELLOW, fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.15em" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = YELLOW; e.currentTarget.style.background = "rgba(245,168,0,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(245,168,0,0.5)"; e.currentTarget.style.background = "transparent"; }}>
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── STATS ── */
function Stats() {
  const stats = [
    { num: "500+", label: "Projects Completed" },
    { num: "22", label: "Years of Experience" },
    { num: "98%", label: "On-Time Delivery" },
    { num: "150+", label: "Expert Crew Members" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4" style={{ background: YELLOW }}>
      {stats.map((s, i) => (
        <div key={i} className="flex flex-col items-center justify-center py-8 px-4 text-center" style={{ borderRight: i < 3 ? "1px solid rgba(0,0,0,0.15)" : "none" }}>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", color: DARK, lineHeight: 1 }}>{s.num}</span>
          <span className="text-xs mt-1 tracking-widest uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "rgba(13,13,13,0.65)", letterSpacing: "0.12em" }}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ── SERVICES ── */
const services = [
  {
    title: "Commercial Construction",
    icon: "🏢",
    desc: "Office towers, retail complexes, and industrial facilities built to code and beyond. We manage every phase from groundbreaking to handover.",
    points: ["Design-Build delivery", "Steel & concrete structures", "MEP coordination", "LEED certification support"],
    img: "https://images.unsplash.com/photo-1574848296471-28f79a036f79?w=700&h=500&fit=crop&auto=format",
  },
  {
    title: "Residential Projects",
    icon: "🏠",
    desc: "Custom homes, multi-family developments, and luxury renovations with craftsmanship that stands the test of time.",
    points: ["Custom home builds", "Multi-family housing", "Full renovation & remodel", "Energy-efficient builds"],
    img: "https://images.unsplash.com/photo-1558227691-41ea78d1f631?w=700&h=500&fit=crop&auto=format",
  },
  {
    title: "Infrastructure",
    icon: "🌉",
    desc: "Roads, bridges, utilities, and civil infrastructure engineered for durability and public safety at scale.",
    points: ["Bridge & highway construction", "Utility & stormwater systems", "Earthwork & grading", "Public sector contracts"],
    img: "https://images.unsplash.com/photo-1559843788-693858bf7338?w=700&h=500&fit=crop&auto=format",
  },
  {
    title: "Renovation & Fit-Out",
    icon: "🔧",
    desc: "Interior fit-outs and structural renovations for commercial tenants, retail brands, and property developers.",
    points: ["Tenant improvement", "Historic restoration", "Retail fit-out", "Structural upgrades"],
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=500&fit=crop&auto=format",
  },
];

function Services({ activeService, setActiveService }: { activeService: number; setActiveService: (i: number) => void }) {
  const s = services[activeService];
  return (
    <section id="services" className="py-24 px-6 md:px-16" style={{ background: STEEL }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="What We Build" />
        <h2 className="mb-12" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem,5vw,4.5rem)", color: "#fff", lineHeight: 0.95 }}>
          OUR <span style={{ color: YELLOW }}>SERVICES</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Tab list */}
          <div className="flex flex-col">
            {services.map((sv, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className="flex items-center gap-4 px-6 py-6 text-left transition-all"
                style={{
                  background: activeService === i ? CONCRETE : "transparent",
                  borderLeft: `3px solid ${activeService === i ? YELLOW : "transparent"}`,
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <span className="text-2xl">{sv.icon}</span>
                <div>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: activeService === i ? "#fff" : "#888", letterSpacing: "0.04em" }}>{sv.title}</p>
                  {activeService === i && (
                    <p className="text-xs mt-0.5" style={{ color: YELLOW, fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}>SELECTED</p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Panel */}
          <div style={{ background: CONCRETE }}>
            <div className="relative h-52 overflow-hidden bg-neutral-800">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-70 transition-all duration-500" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(37,37,37,1) 0%, transparent 60%)" }} />
            </div>
            <div className="p-8">
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "#fff" }}>{s.title}</h3>
              <p className="mt-3 mb-6 text-sm leading-relaxed" style={{ color: "#999" }}>{s.desc}</p>
              <ul className="flex flex-col gap-2">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 text-sm" style={{ color: "#ccc" }}>
                    <span style={{ color: YELLOW, fontWeight: 900 }}>→</span> {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PROJECTS ── */
const projects = [
  { title: "Meridian Tower", cat: "Commercial", year: "2024", img: "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?w=600&h=700&fit=crop&auto=format" },
  { title: "Oakwood Residences", cat: "Residential", year: "2023", img: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=600&h=400&fit=crop&auto=format" },
  { title: "Coastal Highway Bridge", cat: "Infrastructure", year: "2023", img: "https://images.unsplash.com/photo-1529926691761-20fb82067c71?w=600&h=400&fit=crop&auto=format" },
  { title: "Metro Central Hub", cat: "Commercial", year: "2022", img: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=600&h=700&fit=crop&auto=format" },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16" style={{ background: DARK }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="Portfolio" />
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem,5vw,4.5rem)", color: "#fff", lineHeight: 0.95 }}>
            FEATURED <span style={{ color: YELLOW }}>PROJECTS</span>
          </h2>
          <a href="#contact" className="text-sm tracking-widest uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: YELLOW, borderBottom: `1px solid ${YELLOW}`, paddingBottom: "2px" }}>View All →</a>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} tall={i === 0 || i === 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, cat, year, img, tall }: { title: string; cat: string; year: string; img: string; tall: boolean }) {
  return (
    <div
      className="relative overflow-hidden group cursor-pointer bg-neutral-800"
      style={{ height: tall ? "480px" : "280px" }}
    >
      <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,13,0.95) 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: YELLOW }}>{cat} · {year}</p>
        <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "#fff" }}>{title}</h3>
        <div
          className="mt-3 flex items-center gap-2 text-xs uppercase tracking-widest transition-all duration-300 opacity-0 group-hover:opacity-100"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", color: YELLOW }}
        >
          View Case Study →
        </div>
      </div>
    </div>
  );
}

/* ── WHY US ── */
function WhyUs() {
  const reasons = [
    { icon: "🏗️", title: "22 Years Experience", desc: "Two decades of delivering complex projects on time, from foundations to final handover." },
    { icon: "📐", title: "Precision Engineering", desc: "Every project starts with exact plans. We don't guess — we measure twice, build once." },
    { icon: "⚙️", title: "Full-Service Delivery", desc: "Design, permitting, construction, and inspection under one roof — no finger-pointing." },
    { icon: "🛡️", title: "Safety First Culture", desc: "Zero-incident goal on every site. Our safety record is the best in the region." },
    { icon: "📅", title: "On-Time Guarantee", desc: "98% on-time completion rate. Delays cost money; we treat your timeline as our own." },
    { icon: "🤝", title: "Transparent Pricing", desc: "Detailed itemized quotes up front. No surprises, no hidden costs mid-project." },
  ];
  return (
    <section id="about" className="py-24 px-6 md:px-16 relative overflow-hidden" style={{ background: CONCRETE }}>
      <div className="absolute right-0 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(245,168,0,0.3), transparent)" }} />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel label="Why Ironclad" />
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem,5vw,4.5rem)", color: "#fff", lineHeight: 0.95 }}>
              WE BUILD<br /><span style={{ color: YELLOW }}>TRUST</span><br />FIRST.
            </h2>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "#999" }}>
              Every beam, bolt, and blueprint at Ironclad Build carries the weight of 22 years of earned trust. We're not the cheapest — we're the ones you call when it has to be right.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?w=80&h=80&fit=crop&auto=format"
                alt="Ironclad team at work"
                className="w-16 h-16 object-cover rounded-full"
                style={{ border: `2px solid ${YELLOW}` }}
              />
              <div>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#fff" }}>James Harrington</p>
                <p className="text-xs" style={{ color: "#888" }}>Founder & Lead Engineer</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div key={i} className="p-5 transition-all group" style={{ background: STEEL, borderTop: `2px solid transparent` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderTopColor = YELLOW; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderTopColor = "transparent"; }}>
                <span className="text-2xl block mb-3">{r.icon}</span>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff" }}>{r.title}</p>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: "#777" }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ── */
const testimonials = [
  { name: "Sandra Okonkwo", role: "VP Real Estate, Pinnacle Group", quote: "Ironclad delivered our 14-story headquarters 3 weeks early. Unheard of in this industry. We've already signed them for two more builds." },
  { name: "Mayor David Liang", role: "City of Harborview", quote: "The Coastal Bridge project was complex, politically sensitive, and over $40M. Ironclad managed it flawlessly. Public works done right." },
  { name: "Clara & Ben Whitfield", role: "Custom Home Clients", quote: "Our dream home, built exactly how we imagined. Their crew treated it like their own house. We couldn't be happier." },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];
  return (
    <section className="py-24 px-6 md:px-16" style={{ background: DARK }}>
      <div className="max-w-4xl mx-auto text-center">
        <SectionLabel label="Client Stories" centered />
        <h2 className="mb-16" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem,5vw,4rem)", color: "#fff", lineHeight: 0.95 }}>
          WHAT CLIENTS <span style={{ color: YELLOW }}>SAY</span>
        </h2>

        <div className="relative p-10 md:p-14 mb-8" style={{ background: CONCRETE, borderLeft: `4px solid ${YELLOW}` }}>
          <span className="absolute top-6 left-8 text-6xl leading-none select-none" style={{ color: "rgba(245,168,0,0.15)", fontFamily: "Georgia, serif" }}>"</span>
          <p className="text-lg md:text-xl leading-relaxed relative z-10" style={{ color: "#ddd", fontStyle: "italic" }}>"{t.quote}"</p>
          <div className="mt-8 flex items-center gap-4 justify-start">
            <div className="w-2 h-2 rounded-full" style={{ background: YELLOW }} />
            <div className="text-left">
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff" }}>{t.name}</p>
              <p className="text-xs" style={{ color: "#777" }}>{t.role}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className="w-8 h-1 transition-all" style={{ background: i === active ? YELLOW : "rgba(255,255,255,0.15)" }} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT ── */
function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-16" style={{ background: STEEL }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <SectionLabel label="Start Your Project" />
          <h2 className="mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem,5vw,4rem)", color: "#fff", lineHeight: 0.95 }}>
            LET'S BUILD<br /><span style={{ color: YELLOW }}>SOMETHING</span><br />GREAT.
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#999" }}>Fill out the form and one of our project managers will reach out within 24 hours. No obligation, no pressure — just a straight conversation about what you need.</p>
          <div className="flex flex-col gap-4">
            {[["📍", "1482 Iron Works Drive, Suite 200, Chicago IL 60601"], ["📞", "+1 (312) 555-0198"], ["✉️", "hello@ironclad-build.com"]].map(([icon, val]) => (
              <div key={val} className="flex items-center gap-3 text-sm" style={{ color: "#bbb" }}>
                <span>{icon}</span><span>{val}</span>
              </div>
            ))}
          </div>
        </div>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <Input label="First Name" placeholder="James" />
            <Input label="Last Name" placeholder="Harrington" />
          </div>
          <Input label="Email" placeholder="james@yourcompany.com" type="email" />
          <Input label="Phone" placeholder="+1 (312) 555-0000" type="tel" />
          <div className="flex flex-col gap-1">
            <label className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#888" }}>Project Type</label>
            <select className="px-4 py-3 text-sm outline-none" style={{ background: CONCRETE, color: "#ccc", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "'Barlow', sans-serif" }}>
              {["Commercial Construction", "Residential Build", "Infrastructure", "Renovation & Fit-Out", "Other"].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#888" }}>Message</label>
            <textarea rows={4} placeholder="Tell us about your project scope, timeline, and any key requirements..." className="px-4 py-3 text-sm outline-none resize-none" style={{ background: CONCRETE, color: "#ccc", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "'Barlow', sans-serif" }} />
          </div>
          <button type="submit" className="py-4 text-sm font-bold tracking-widest uppercase transition-all" style={{ background: YELLOW, color: DARK, fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.15em" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = YELLOW; }}>
            Request Free Quote
          </button>
        </form>
      </div>
    </section>
  );
}

function Input({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#888" }}>{label}</label>
      <input type={type} placeholder={placeholder} className="px-4 py-3 text-sm outline-none" style={{ background: CONCRETE, color: "#ccc", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "'Barlow', sans-serif" }} />
    </div>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid rgba(245,168,0,0.1)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 flex items-center justify-center" style={{ background: YELLOW }}><HardHatIcon /></div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem", fontWeight: 800, color: "#fff" }}>IRONCLAD <span style={{ color: YELLOW }}>BUILD</span></span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "#555" }}>Built on trust. Delivered on time. Licensed contractors serving the greater Chicago metropolitan area since 2003.</p>
        </div>
        {[
          { title: "Services", links: ["Commercial", "Residential", "Infrastructure", "Renovation"] },
          { title: "Company", links: ["About Us", "Projects", "Careers", "Safety Record"] },
          { title: "Contact", links: ["+1 (312) 555-0198", "hello@ironclad-build.com", "Chicago, IL 60601"] },
        ].map((col) => (
          <div key={col.title}>
            <p className="text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: YELLOW }}>{col.title}</p>
            <ul className="flex flex-col gap-2">
              {col.links.map((l) => <li key={l} className="text-xs" style={{ color: "#666" }}>{l}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t px-6 md:px-16 py-5 flex items-center justify-between flex-wrap gap-2" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
        <p className="text-xs" style={{ color: "#444" }}>© 2025 Ironclad Build LLC. All rights reserved.</p>
        <p className="text-xs" style={{ color: "#333" }}>Licensed · Bonded · Insured</p>
      </div>
    </footer>
  );
}

/* ── HELPERS ── */
function SectionLabel({ label, centered }: { label: string; centered?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}>
      <div className="h-px w-8" style={{ background: YELLOW }} />
      <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: YELLOW }}>{label}</span>
    </div>
  );
}

function HardHatIcon() {
  return (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden>
      <path d="M8 1C5.5 1 3.5 3 3 5H2C1.45 5 1 5.45 1 6V8H15V6C15 5.45 14.55 5 14 5H13C12.5 3 10.5 1 8 1Z" fill="#0d0d0d" />
      <rect x="1" y="8" width="14" height="2.5" rx="0.5" fill="#0d0d0d" />
    </svg>
  );
}
