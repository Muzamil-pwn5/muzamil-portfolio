import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, ExternalLink, Github, Linkedin, Mail, MapPin, X } from "lucide-react";

type Project = { number: string; year: string; title: string; kind: string; summary: string; detail: string; role: string; stack: string; outcome: string; href: string };
type Panel = "intro" | "projects" | "contact" | null;

const projects: Project[] = [
  { number: "01", year: "LIVE", title: "NB Engineering & Services", kind: "Business website", summary: "A live digital home for a generator engineering business.", detail: "A multi-page business website presenting products, services, brands, and contact information. Built with frontend and backend integration and deployed to a real domain.", role: "Full-stack development · Deployment", stack: "Web development · Frontend · Backend", outcome: "A live website for a real business", href: "https://www.nbengineering.com" },
  { number: "02", year: "BUILDING", title: "ShopMind AI", kind: "Agentic commerce", summary: "AI agents for product discovery and e-commerce workflows.", detail: "A final-year project exploring customer interactions, product discovery, order operations, LLM tool execution, risk-based approval checkpoints, APIs, persistence, and backend testing.", role: "Backend engineering · AI workflows", stack: "Python · LLM integration · Tool calling", outcome: "A controlled agentic workflow for commerce", href: "#contact" },
  { number: "03", year: "PROTOTYPE", title: "Personal AI Assistant", kind: "Memory systems", summary: "Persistent context for ongoing tasks and projects.", detail: "A backend prototype for storing information, retrieving relevant context, and supporting task and project management with PostgreSQL, vector-based memory, AI integrations, and scheduled automation.", role: "Backend foundations · AI exploration", stack: "Python · FastAPI · PostgreSQL · Vector search", outcome: "An experiment in persistent personal context", href: "#contact" },
];

const heroImage = "./assets/muzamil-opening-scene.webp";
const projectImage = "./assets/muzamil-project-scene.webp";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [entered, setEntered] = useState(false);
  const [muted, setMuted] = useState(true);
  const [panel, setPanel] = useState<Panel>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

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

  useEffect(() => {
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>(".section-video"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entered && entry.isIntersecting) video.play().catch(() => undefined);
        else { video.pause(); video.currentTime = 0; }
      });
    }, { threshold: 0.6 });
    videos.forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, [entered]);

  const goTo = (id: string) => { setPanel(null); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const ready = progress >= 100;
  const openPanel = (next: Panel) => setPanel(next);

  return (
    <div className={`uranus-portfolio ${entered ? "is-entered" : ""}`}>
      <div className="custom-cursor" style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }} aria-hidden="true" />
      <div className="background-noise" aria-hidden="true" />
      <header className="uranus-header">
        <button type="button" className="uranus-logo" onClick={() => goTo("page-1")} aria-label="Muzamil Abbas home"><span className="logo-orbit">MA</span><b>MUZAMIL ABBAS</b></button>
        <nav><button type="button" onClick={() => openPanel("intro")}>INTRO</button><i /><button type="button" onClick={() => openPanel("projects")}>PROJECTS</button><i /><button type="button" onClick={() => setMuted((value) => !value)}>{muted ? "MUTE" : "SOUND"}</button></nav>
      </header>

      <section className={`loader-screen ${ready ? "loader-screen--ready" : ""}`} aria-hidden={entered}>
        <div className="loader-center"><span className="loader-percent">{progress}%</span><div className="loader-track"><i style={{ width: `${progress}%` }} /></div><p>{ready ? "READY" : "PREPARING THE OPENING SCENE"}</p></div>
        {ready && <button type="button" className="enter-world" onClick={() => setEntered(true)}><span>دنیا میں داخل ہوں</span><small>ENTER WORLD</small></button>}
      </section>

      <main className="reference-pages">
        <section id="page-1" className="reference-page page-one"><video className="section-video" ref={(node) => { videoRefs.current.hero = node; }} muted={muted} loop playsInline preload="metadata" poster={heroImage} aria-hidden="true"><source src="./assets/videos/hero-real.mp4" type="video/mp4" /></video><div className="page-shade" /><span className="minimal-index">01 / 05</span><button className="scroll-cue" type="button" onClick={() => goTo("page-2")}><span>SCROLL TO EXPLORE</span><ArrowDown size={17} /></button></section>

        <section id="page-2" className="reference-page page-two"><video className="section-video" ref={(node) => { videoRefs.current.projects = node; }} muted={muted} loop playsInline preload="metadata" poster={projectImage} aria-hidden="true"><source src="./assets/videos/projects-real.mp4" type="video/mp4" /></video><div className="page-shade page-shade--warm" /><span className="minimal-index">02 / PROJECTS</span><button className="section-trigger" type="button" onClick={() => openPanel("projects")}>OPEN PROJECTS <ArrowUpRight size={15} /></button></section>

        <section id="page-3" className="reference-page page-three"><video className="section-video" ref={(node) => { videoRefs.current.intro = node; }} muted={muted} loop playsInline preload="metadata" poster={heroImage} aria-hidden="true"><source src="./assets/videos/intro-real.mp4" type="video/mp4" /></video><div className="page-shade page-shade--deep" /><span className="minimal-index">03 / INTRO</span><button className="section-trigger" type="button" onClick={() => openPanel("intro")}>OPEN INTRO <ArrowUpRight size={15} /></button></section>

        <section id="page-4" className="reference-page page-four"><video className="section-video" ref={(node) => { videoRefs.current.cases = node; }} muted={muted} loop playsInline preload="metadata" poster={projectImage} aria-hidden="true"><source src="./assets/videos/cases-real.mp4" type="video/mp4" /></video><div className="page-shade page-shade--deep" /><span className="minimal-index">04 / SELECTED WORK</span><button className="section-trigger" type="button" onClick={() => openPanel("projects")}>OPEN CASE STUDIES <ArrowUpRight size={15} /></button></section>

        <section id="page-5" className="reference-page page-five"><video className="section-video" ref={(node) => { videoRefs.current.contact = node; }} muted={muted} loop playsInline preload="metadata" poster={heroImage} aria-hidden="true"><source src="./assets/videos/contact-real.mp4" type="video/mp4" /></video><div className="page-shade page-shade--dark" /><span className="minimal-index">05 / CONTACT</span><button className="section-trigger" type="button" onClick={() => openPanel("contact")}>OPEN CONTACT <ArrowUpRight size={15} /></button></section>
      </main>

      {panel && <div className="content-panel" role="dialog" aria-modal="true" aria-labelledby="panel-title" onClick={() => setPanel(null)}><article onClick={(event) => event.stopPropagation()}><button type="button" className="panel-close" onClick={() => setPanel(null)} aria-label="Close panel"><X size={19} /></button>{panel === "intro" && <><span className="panel-kicker">03 / INTRO</span><h1 id="panel-title">Computer Systems<br /><em>undergraduate.</em></h1><p>Backend engineering, AI systems, and full-stack delivery.</p><p>Riphah International University · 7th semester</p><div className="panel-tags"><span>PYTHON</span><span>FASTAPI</span><span>POSTGRESQL</span><span>LLM INTEGRATION</span><span>REACT</span></div><button type="button" className="panel-link" onClick={() => openPanel("contact")}>Open contact <ArrowUpRight size={15} /></button></>}{panel === "projects" && <><span className="panel-kicker">02 / PROJECTS</span><h1 id="panel-title">Selected<br /><em>work.</em></h1><div className="panel-project-list">{projects.map((project) => <button type="button" key={project.number} onClick={() => setActiveProject(project)}><span>{project.number} · {project.year}</span><strong>{project.title}</strong><small>{project.kind}</small><ArrowUpRight size={16} /></button>)}</div></>}{panel === "contact" && <><span className="panel-kicker">05 / CONTACT</span><h1 id="panel-title">Let&apos;s make<br /><em>something useful.</em></h1><a className="panel-email" href="mailto:muzamilabbas37280@gmail.com"><Mail size={15} /> muzamilabbas37280@gmail.com <ArrowUpRight size={14} /></a><div className="panel-socials"><a href="https://www.linkedin.com/in/muzamil-abbas-8508513bb?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a><a href="https://github.com/Muzamil-pwn5" target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a><span><MapPin size={14} /> Pakistan</span></div></>}</article></div>}

      {activeProject && <div className="reference-modal" role="dialog" aria-modal="true" aria-labelledby="case-title" onClick={() => setActiveProject(null)}><article onClick={(event) => event.stopPropagation()}><button type="button" className="reference-modal-close" onClick={() => setActiveProject(null)} aria-label="Close project note"><X size={18} /></button><span>{activeProject.number} / {activeProject.year}</span><h2 id="case-title">{activeProject.title}</h2><p>{activeProject.detail}</p><div className="case-facts"><p><b>CASE STUDY</b>{activeProject.summary}</p><p><b>ROLE</b>{activeProject.role}</p><p><b>TOOLS</b>{activeProject.stack}</p><p><b>OUTCOME</b>{activeProject.outcome}</p></div>{activeProject.href.startsWith("http") && <a href={activeProject.href} target="_blank" rel="noreferrer">Visit live website <ExternalLink size={14} /></a>}</article></div>}
    </div>
  );
}
