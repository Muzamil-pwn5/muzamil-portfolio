import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, ExternalLink, Github, Linkedin, Mail, MapPin, Moon, Sun, X } from "lucide-react";

type Project = { number: string; year: string; title: string; kind: string; summary: string; detail: string; role: string; stack: string; outcome: string; href: string; tone: string };

const projects: Project[] = [
  { number: "01", year: "LIVE", title: "NB Engineering & Services", kind: "Business website", summary: "A live digital home for a generator engineering business.", detail: "A multi-page business website presenting products, services, brands, and contact information. Built with frontend and backend integration and deployed to a real domain.", role: "Full-stack development · Deployment", stack: "Web development · Frontend · Backend", outcome: "A live website for a real business", href: "https://www.nbengineering.com", tone: "tone-lime" },
  { number: "02", year: "BUILDING", title: "ShopMind AI", kind: "Agentic commerce", summary: "AI agents for product discovery and e-commerce workflows.", detail: "A final-year project exploring customer interactions, product discovery, order operations, LLM tool execution, risk-based approval checkpoints, APIs, persistence, and backend testing.", role: "Backend engineering · AI workflows", stack: "Python · LLM integration · Tool calling", outcome: "A controlled agentic workflow for commerce", href: "#contact", tone: "tone-violet" },
  { number: "03", year: "PROTOTYPE", title: "Personal AI Assistant", kind: "Memory systems", summary: "Persistent context for ongoing tasks and projects.", detail: "A backend prototype for storing information, retrieving relevant context, and supporting task and project management with PostgreSQL, vector-based memory, AI integrations, and scheduled automation.", role: "Backend foundations · AI exploration", stack: "Python · FastAPI · PostgreSQL · Vector search", outcome: "An experiment in persistent personal context", href: "#contact", tone: "tone-blue" },
];

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [lightMode, setLightMode] = useState(false);
  const [muted, setMuted] = useState(true);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const started = Date.now();
    const timer = window.setInterval(() => {
      const next = Math.min(100, Math.round(((Date.now() - started) / 1700) * 100));
      setProgress(next);
      if (next >= 100) window.clearInterval(timer);
    }, 40);
    return () => window.clearInterval(timer);
  }, []);

  const loaded = progress >= 100;
  return (
    <div className={`reference-site ${lightMode ? "theme-light" : ""} ${loaded ? "is-loaded" : ""}`}>
      <div className="reference-grid" aria-hidden="true" />
      <header className="reference-header">
        <a className="reference-logo" href="#top" aria-label="Muzamil Abbas home"><span>MA</span><b>MUZAMIL ABBAS</b></a>
        <nav className="reference-nav" aria-label="Primary navigation"><a href="#intro">INTRO</a><i /> <a href="#projects">PROJECTS</a><i /> <button type="button" onClick={() => setMuted((value) => !value)}>{muted ? "MUTE" : "SOUND"}</button></nav>
        <div className="reference-tools"><button className="mode-switch" type="button" onClick={() => setLightMode((value) => !value)} aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"}>{lightMode ? <Sun size={13} /> : <Moon size={13} />}</button><span>01 / 05</span></div>
      </header>

      <div className="opening-loader" aria-hidden={loaded}><div className="loader-number">{progress}%</div><div className="loader-rule"><span style={{ width: `${progress}%` }} /></div><p>PREPARING YOUR OPENING SCENE</p></div>

      <main>
        <section id="top" className="reference-scene intro-scene" aria-labelledby="hero-title">
          <div className="scene-corner scene-corner--left">01</div><div className="scene-corner scene-corner--right">MUZAMIL / 2026</div>
          <div className="intro-copy"><p className="scene-eyebrow">BACKEND DEVELOPER · AI ENGINEER · PAKISTAN</p><h1 id="hero-title"><span>MUZAMIL</span><em>ABBAS</em></h1><p className="intro-subtitle">A portfolio of useful systems, quiet experiments, and work in progress.</p></div>
          <div className="character-window"><div className="character-glow" /><img src="./assets/muzamil-anime-boy.webp" alt="Original anime-style portrait of Muzamil Abbas" /><span className="character-tag">01 / CHARACTER STUDY</span></div>
          <a className="enter-world" href="#intro"><span>ENTER WORLD</span><ArrowDown size={16} /></a><span className="scroll-explore">Scroll to explore</span>
        </section>

        <section id="intro" className="reference-scene intro-details" aria-labelledby="intro-title"><div className="scene-corner scene-corner--left">02</div><div className="chapter-label">INTRO / THE BUILDER</div><div className="details-layout"><div><p className="scene-eyebrow">COMPUTER SYSTEMS UNDERGRADUATE</p><h2 id="intro-title">Useful<br /><em>by design.</em></h2></div><div className="details-note"><p>I build practical software across backend engineering, AI-powered applications, and full-stack delivery.</p><p>Riphah International University<br />7th semester · Expected 2027</p><a href="#projects" className="chapter-link">Open selected work <ArrowUpRight size={14} /></a></div></div><div className="facts-row"><span><b>01</b> live website</span><span><b>01</b> remote AI internship</span><span><b>∞</b> curiosity</span></div></section>

        <section id="projects" className="reference-scene projects-details" aria-labelledby="projects-title"><div className="scene-corner scene-corner--left">03</div><div className="chapter-label">PROJECTS / SELECTED WORK</div><div className="projects-title-row"><h2 id="projects-title">Work<br /><em>in motion.</em></h2><span>Click a title to open the case note</span></div><div className="reference-project-list">{projects.map((project) => <button type="button" key={project.number} className={`reference-project ${project.tone}`} onClick={() => setActiveProject(project)}><span className="project-index">{project.number}</span><span className="project-year">{project.year}</span><strong>{project.title}</strong><span className="project-kind">{project.kind}</span><span className="project-open"><ArrowUpRight size={17} /></span></button>)}</div><div className="projects-footer"><span>BACKEND · AI · FULL-STACK</span><span>03 SELECTED PROJECTS</span></div></section>

        <section className="reference-scene signal-details" aria-labelledby="signal-title"><div className="scene-corner scene-corner--left">04</div><div className="chapter-label">SIGNAL / THE TOOLKIT</div><div className="signal-layout"><h2 id="signal-title">Built<br /><em>quietly.</em></h2><div className="signal-list"><p><b>BACKEND</b> Python · FastAPI · REST APIs · Pydantic · SQLAlchemy</p><p><b>DATA</b> PostgreSQL · SQL · Database design · Migrations</p><p><b>AI</b> LLM integration · Gemini API · Tool calling · Agent orchestration</p><p><b>WEB</b> React · JavaScript · HTML · CSS · Vite</p></div></div></section>

        <section id="contact" className="reference-scene contact-details" aria-labelledby="contact-title"><div className="scene-corner scene-corner--left">05</div><div className="chapter-label">CONTACT / OPEN CHANNEL</div><div className="contact-layout"><div><p className="scene-eyebrow">LET&apos;S MAKE SOMETHING USEFUL</p><h2 id="contact-title">Say<br /><em>hello.</em></h2></div><div className="contact-links"><p>Open to relevant opportunities, collaborations, and good problems.</p><a href="mailto:muzamilabbas37280@gmail.com"><Mail size={15} /> muzamilabbas37280@gmail.com <ArrowUpRight size={14} /></a><div><a href="https://www.linkedin.com/in/muzamil-abbas-8508513bb?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a><a href="https://github.com/Muzamil-pwn5" target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a><span><MapPin size={14} /> Pakistan</span></div></div></div><footer className="reference-footer"><span>MUZAMIL ABBAS / BACKEND + AI</span><span>THANK YOU FOR VISITING</span></footer></section>
      </main>

      {activeProject && <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title" onClick={() => setActiveProject(null)}><article className={`project-modal-card ${activeProject.tone}`} onClick={(event) => event.stopPropagation()}><button type="button" className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close case note"><X size={18} /></button><div className="modal-meta"><span>{activeProject.number} / {activeProject.year}</span><span>{activeProject.kind}</span></div><h2 id="project-title">{activeProject.title}</h2><p>{activeProject.detail}</p><dl><div><dt>Role</dt><dd>{activeProject.role}</dd></div><div><dt>Stack</dt><dd>{activeProject.stack}</dd></div><div><dt>Outcome</dt><dd>{activeProject.outcome}</dd></div></dl>{activeProject.href.startsWith("http") && <a className="modal-link" href={activeProject.href} target="_blank" rel="noreferrer">Visit live website <ExternalLink size={14} /></a>}</article></div>}
    </div>
  );
}
