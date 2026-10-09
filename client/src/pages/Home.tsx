import { useEffect, useState, type SyntheticEvent } from "react";
import { ArrowDown, ArrowUpRight, ExternalLink, Github, Linkedin, Mail, MapPin, X } from "lucide-react";

type Project = { number: string; year: string; title: string; kind: string; summary: string; detail: string; role: string; stack: string; outcome: string; href: string };

const projects: Project[] = [
  { number: "01", year: "LIVE", title: "NB Engineering & Services", kind: "Business website", summary: "A live digital home for a generator engineering business.", detail: "A multi-page business website presenting products, services, brands, and contact information. Built with frontend and backend integration and deployed to a real domain.", role: "Full-stack development · Deployment", stack: "Web development · Frontend · Backend", outcome: "A live website for a real business", href: "https://www.nbengineering.com" },
  { number: "02", year: "BUILDING", title: "ShopMind AI", kind: "Agentic commerce", summary: "AI agents for product discovery and e-commerce workflows.", detail: "A final-year project exploring customer interactions, product discovery, order operations, LLM tool execution, risk-based approval checkpoints, APIs, persistence, and backend testing.", role: "Backend engineering · AI workflows", stack: "Python · LLM integration · Tool calling", outcome: "A controlled agentic workflow for commerce", href: "#contact" },
  { number: "03", year: "PROTOTYPE", title: "Personal AI Assistant", kind: "Memory systems", summary: "Persistent context for ongoing tasks and projects.", detail: "A backend prototype for storing information, retrieving relevant context, and supporting task and project management with PostgreSQL, vector-based memory, AI integrations, and scheduled automation.", role: "Backend foundations · AI exploration", stack: "Python · FastAPI · PostgreSQL · Vector search", outcome: "An experiment in persistent personal context", href: "#contact" },
];

const heroImage = "./assets/muzamil-opening-scene.webp";
const projectImage = "./assets/muzamil-project-scene.webp";
const recoverImage = (event: SyntheticEvent<HTMLImageElement>) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = "./assets/muzamil-anime-boy.webp";
};

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [entered, setEntered] = useState(false);
  const [muted, setMuted] = useState(true);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const started = Date.now();
    const timer = window.setInterval(() => {
      const next = Math.min(100, Math.round(((Date.now() - started) / 1800) * 100));
      setProgress(next);
      if (next >= 100) window.clearInterval(timer);
    }, 40);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const move = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const ready = progress >= 100;

  return (
    <div className={`uranus-portfolio ${entered ? "is-entered" : ""}`}>
      <div className="custom-cursor" style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }} aria-hidden="true" />
      <div className="background-noise" aria-hidden="true" />
      <header className="uranus-header">
        <a href="#page-1" className="uranus-logo" aria-label="Muzamil Abbas home"><span className="logo-orbit">MA</span><b>MUZAMIL ABBAS</b></a>
        <nav><button type="button" onClick={() => goTo("page-1")}>INTRO</button><i /><button type="button" onClick={() => goTo("page-2")}>PROJECTS</button><i /><button type="button" onClick={() => setMuted((value) => !value)}>{muted ? "MUTE" : "SOUND"}</button></nav>
      </header>

      <section className={`loader-screen ${ready ? "loader-screen--ready" : ""}`} aria-hidden={entered}>
        <div className="loader-center"><span className="loader-percent">{progress}%</span><div className="loader-track"><i style={{ width: `${progress}%` }} /></div><p>{ready ? "READY" : "PREPARING THE OPENING SCENE"}</p></div>
        {ready && <button type="button" className="enter-world" onClick={() => setEntered(true)}><span>进入世界</span><small>ENTER WORLD</small></button>}
      </section>

      <main className="reference-pages">
        <section id="page-1" className="reference-page page-one"><img className="page-background" src={heroImage} onError={recoverImage} alt="" /><div className="page-shade" /><div className="page-caption page-caption--left"><span>01 / 05</span><b>BACKEND DEVELOPER<br />AI ENGINEER</b></div><div className="page-caption page-caption--right"><span>PAKISTAN / 2026</span><b>MUZAMIL ABBAS</b></div><div className="page-one-mark"><span>PORTFOLIO</span><strong>Useful systems<br /><em>in progress.</em></strong></div><button className="scroll-cue" type="button" onClick={() => goTo("page-2")}><span>SCROLL TO EXPLORE</span><ArrowDown size={17} /></button></section>

        <section id="page-2" className="reference-page page-two"><img className="page-background" src={projectImage} onError={recoverImage} alt="" /><div className="page-shade page-shade--warm" /><div className="page-title"><span>02 / PROJECTS</span><h1>Backend + AI<br /><em>portfolio</em></h1></div><div className="featured-list"><p>FEATURED WORK</p>{projects.map((project) => <button type="button" key={project.number} onClick={() => setActiveProject(project)}><span>{project.year}</span><strong>{project.title}</strong><small>{project.kind}</small><ArrowUpRight size={16} /></button>)}</div><div className="page-footer-note"><span>Scroll to explore</span><span>Click a project to open its note</span></div></section>

        <section id="page-3" className="reference-page page-three"><img className="page-three-art" src={heroImage} onError={recoverImage} alt="" /><div className="page-shade page-shade--deep" /><div className="bio-panel"><span>03 / INTRO</span><h2>Computer Systems<br /><em>undergraduate.</em></h2><p>I build practical software across backend engineering, AI-powered applications, and full-stack delivery.</p><p>Riphah International University<br />7th semester · Expected 2027</p><a href="#page-2">Open projects <ArrowUpRight size={15} /></a></div><div className="tool-strip"><span>PYTHON</span><span>FASTAPI</span><span>POSTGRESQL</span><span>LLM INTEGRATION</span><span>REACT</span></div></section>

        <section id="page-4" className="reference-page page-four"><div className="page-four-header"><span>04 / CASE STUDIES</span><span>SELECTED PROJECTS</span></div><div className="case-grid">{projects.map((project) => <button type="button" key={project.number} onClick={() => setActiveProject(project)}><span>{project.number}</span><strong>{project.title}</strong><small>{project.summary}</small><ArrowUpRight size={18} /></button>)}</div><div className="case-bottom"><span>ROLE / BACKEND · AI · FULL-STACK</span><span>OTHER PROJECTS</span></div></section>

        <section id="page-5" className="reference-page page-five"><img className="page-background" src={heroImage} onError={recoverImage} alt="" /><div className="page-shade page-shade--dark" /><div className="contact-card"><span>05 / CONTACT</span><h2>Let&apos;s make<br /><em>something useful.</em></h2><a href="mailto:muzamilabbas37280@gmail.com"><Mail size={15} /> muzamilabbas37280@gmail.com <ArrowUpRight size={14} /></a><div><a href="https://www.linkedin.com/in/muzamil-abbas-8508513bb?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a><a href="https://github.com/Muzamil-pwn5" target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a><span><MapPin size={14} /> Pakistan</span></div></div><div className="page-footer-note"><span>MUZAMIL ABBAS</span><span>THANK YOU FOR VISITING</span></div></section>
      </main>

      {activeProject && <div className="reference-modal" role="dialog" aria-modal="true" aria-labelledby="case-title" onClick={() => setActiveProject(null)}><article onClick={(event) => event.stopPropagation()}><button type="button" className="reference-modal-close" onClick={() => setActiveProject(null)} aria-label="Close project note"><X size={18} /></button><span>{activeProject.number} / {activeProject.year}</span><h2 id="case-title">{activeProject.title}</h2><p>{activeProject.detail}</p><div className="case-facts"><p><b>CASE STUDY</b>{activeProject.summary}</p><p><b>ROLE</b>{activeProject.role}</p><p><b>TOOLS</b>{activeProject.stack}</p><p><b>OUTCOME</b>{activeProject.outcome}</p></div>{activeProject.href.startsWith("http") && <a href={activeProject.href} target="_blank" rel="noreferrer">Visit live website <ExternalLink size={14} /></a>}</article></div>}
    </div>
  );
}
