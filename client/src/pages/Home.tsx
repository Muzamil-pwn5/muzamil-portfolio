import { useState } from "react";
import { ArrowDown, ArrowUpRight, ExternalLink, Github, Linkedin, Mail, MapPin, Moon, Plus, Sun, X } from "lucide-react";

type Project = {
  number: string;
  year: string;
  title: string;
  kind: string;
  summary: string;
  detail: string;
  role: string;
  stack: string;
  outcome: string;
  href: string;
  tone: string;
};

const projects: Project[] = [
  { number: "01", year: "LIVE", title: "NB Engineering & Services", kind: "Business website", summary: "A live digital home for a generator engineering business.", detail: "A multi-page business website presenting products, services, brands, and contact information. Built with frontend and backend integration and deployed to a real domain.", role: "Full-stack development · Deployment", stack: "Web development · Frontend · Backend", outcome: "A live website for a real business", href: "https://www.nbengineering.com", tone: "project--lime" },
  { number: "02", year: "BUILDING", title: "ShopMind AI", kind: "Agentic commerce", summary: "AI agents for product discovery and e-commerce workflows.", detail: "A final-year project exploring customer interactions, product discovery, order operations, LLM tool execution, risk-based approval checkpoints, APIs, persistence, and backend testing.", role: "Backend engineering · AI workflows", stack: "Python · LLM integration · Tool calling", outcome: "A controlled agentic workflow for commerce", href: "#contact", tone: "project--violet" },
  { number: "03", year: "PROTOTYPE", title: "Personal AI Assistant", kind: "Memory systems", summary: "Persistent context for ongoing tasks and projects.", detail: "A backend prototype for storing information, retrieving relevant context, and supporting task and project management with PostgreSQL, vector-based memory, AI integrations, and scheduled automation.", role: "Backend foundations · AI exploration", stack: "Python · FastAPI · PostgreSQL · Vector search", outcome: "An experiment in persistent personal context", href: "#contact", tone: "project--blue" },
];

const skillLines = [
  ["BACKEND", "Python · FastAPI · REST APIs · Pydantic · SQLAlchemy"],
  ["DATA", "PostgreSQL · SQL · Database design · Migrations"],
  ["AI", "LLM integration · Gemini API · Tool calling · Agent orchestration"],
  ["WEB", "React · JavaScript · HTML · CSS · Vite"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`immersive-site ${lightMode ? "theme-light" : ""}`}>
      <div className="ambient ambient-one" aria-hidden="true" /><div className="ambient ambient-two" aria-hidden="true" />
      <header className="minimal-header">
        <a href="#top" className="signature" onClick={closeMenu} aria-label="Muzamil Abbas home"><span>MA</span><b>Muzamil Abbas</b></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={18} /> : <Plus size={18} />}</button>
        <nav id="site-navigation" className={`minimal-nav ${menuOpen ? "minimal-nav--open" : ""}`} aria-label="Primary navigation"><a href="#intro" onClick={closeMenu}>Intro</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#contact" onClick={closeMenu}>Contact</a></nav>
        <div className="header-tools"><button className="theme-toggle" type="button" onClick={() => setLightMode((value) => !value)} aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"} aria-pressed={lightMode}>{lightMode ? <Sun size={14} /> : <Moon size={14} />}<span>{lightMode ? "Light" : "Dark"}</span></button><span className="header-index">01 / 04</span></div>
      </header>

      <main id="top">
        <section className="opening-scene" aria-labelledby="hero-title">
          <div className="opening-meta"><span>Backend developer</span><span>AI engineer</span><span>Pakistan</span></div>
          <div className="hero-orbit" aria-hidden="true"><div className="orbit-core"><span>MA</span></div><i className="orbit-ring ring-one" /><i className="orbit-ring ring-two" /><i className="orbit-ring ring-three" /><div className="hero-character"><img src="./assets/muzamil-anime-boy.webp" alt="Original anime-style portrait of Muzamil Abbas" /></div><span className="orbit-marker marker-one">01</span><span className="orbit-marker marker-two">AI</span></div>
          <div className="opening-copy"><p className="opening-kicker">A portfolio by Muzamil Abbas</p><h1 id="hero-title">Building<br /><em>useful</em><br />systems.</h1><p className="opening-note">Backend, AI, and full-stack work for real-world problems.</p></div>
          <a className="enter-projects" href="#projects"><span>Explore work</span><ArrowDown size={17} /></a><div className="opening-footer"><span>Open to employment, internships, and freelance opportunities</span><span>Scroll to explore</span></div>
        </section>

        <section id="intro" className="intro-scene scene-section" aria-labelledby="intro-title"><div className="scene-topline"><span>02 / INTRO</span><span>About the builder</span></div><div className="intro-layout"><div><p className="micro-label">Currently</p><h2 id="intro-title">Computer Systems<br /><em>undergraduate.</em></h2></div><div className="intro-copy"><p>I build practical software across backend engineering, AI-powered applications, and full-stack delivery.</p><p>Riphah International University · 7th semester · Graduation 2027</p><a className="quiet-link" href="#projects">See selected work <ArrowDown size={14} /></a></div></div><div className="intro-strip"><span><b>01</b> live business website</span><span><b>01</b> remote AI internship</span><span><b>∞</b> systems to explore</span></div></section>

        <section id="projects" className="projects-scene scene-section" aria-labelledby="projects-title"><div className="scene-topline"><span>03 / PROJECTS</span><span>Selected work</span></div><div className="projects-heading"><h2 id="projects-title">Things<br /><em>in progress.</em></h2><p>Tap a project to open its note.</p></div><div className="project-stack">{projects.map((project) => <button key={project.number} className={`project-panel ${project.tone}`} type="button" onClick={() => setActiveProject(project)}><span className="project-panel-number">{project.number}</span><span className="project-panel-year">{project.year}</span><span className="project-panel-title">{project.title}</span><span className="project-panel-kind">{project.kind}</span><span className="project-panel-arrow"><ArrowUpRight size={18} /></span><span className="project-panel-glow" aria-hidden="true" /></button>)}</div></section>

        <section className="signal-scene scene-section" aria-labelledby="signal-title"><div className="scene-topline"><span>04 / SIGNAL</span><span>What I work with</span></div><div className="signal-layout"><h2 id="signal-title">Quietly<br /><em>technical.</em></h2><div className="skill-lines">{skillLines.map(([label, value]) => <div className="skill-line" key={label}><span>{label}</span><p>{value}</p></div>)}</div></div></section>

        <section id="contact" className="contact-scene scene-section" aria-labelledby="contact-title"><div className="contact-noise" aria-hidden="true" /><div className="scene-topline"><span>05 / CONTACT</span><span>Open channel</span></div><div className="contact-layout"><div><p className="micro-label">Let&apos;s make something useful</p><h2 id="contact-title">Say<br /><em>hello.</em></h2></div><div className="contact-copy"><p>Open to relevant opportunities in backend development, AI engineering, full-stack web development, and practical software automation.</p><a className="contact-email" href="mailto:muzamilabbas37280@gmail.com"><Mail size={16} /> muzamilabbas37280@gmail.com <ArrowUpRight size={15} /></a><div className="contact-socials"><a href="https://www.linkedin.com/in/muzamil-abbas-8508513bb?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a><a href="https://github.com/Muzamil-pwn5" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><span><MapPin size={15} /> Pakistan</span></div></div></div><footer className="scene-footer"><span>Muzamil Abbas · Backend + AI</span><span>© 2026</span></footer></section>
      </main>

      {activeProject && <div className="project-overlay" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" onClick={() => setActiveProject(null)}><div className={`project-dialog ${activeProject.tone}`} onClick={(event) => event.stopPropagation()}><button className="dialog-close" type="button" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={19} /></button><div className="dialog-top"><span>{activeProject.number} / {activeProject.year}</span><span>{activeProject.kind}</span></div><h2 id="project-dialog-title">{activeProject.title}</h2><p className="dialog-detail">{activeProject.detail}</p><div className="dialog-facts"><div><span>Role</span><b>{activeProject.role}</b></div><div><span>Stack</span><b>{activeProject.stack}</b></div><div><span>Outcome</span><b>{activeProject.outcome}</b></div></div>{activeProject.href.startsWith("http") && <a className="dialog-link" href={activeProject.href} target="_blank" rel="noreferrer">Visit live website <ExternalLink size={15} /></a>}</div></div>}
    </div>
  );
}
