import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Server,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "NB Engineering & Services",
    type: "Business website · Full-stack development",
    status: "Completed · Live",
    description:
      "A live business website for a generator engineering company, built to present products, services, brands, and contact information with clarity.",
    problem: "A real engineering business needed a credible digital home for its products and services.",
    contribution: "Designed and developed the multi-page website, integrated frontend and backend concerns, and worked on deployment to a real domain.",
    stack: ["Web development", "Frontend", "Backend", "Deployment"],
    href: "https://www.nbengineering.com",
    tone: "project-card--ember",
    icon: Server,
  },
  {
    number: "02",
    title: "ShopMind AI",
    type: "Agentic AI · E-commerce automation",
    status: "In development · Final-year project",
    description:
      "An AI-powered e-commerce platform designed to automate customer interactions and business workflows through intelligent agents and controlled tool execution.",
    problem: "E-commerce workflows often require repetitive product discovery and order operations across several systems.",
    contribution: "Developing backend components, LLM-powered tool execution, risk-based approval checkpoints, API integrations, persistence, and backend testing.",
    stack: ["Python", "LLM integration", "Tool calling", "APIs"],
    href: "#contact",
    tone: "project-card--violet",
    icon: Bot,
  },
  {
    number: "03",
    title: "Personal AI Assistant",
    type: "Prototype · Backend systems",
    status: "Prototype / in development",
    description:
      "A personal assistant concept for persistent information, relevant context retrieval, and ongoing task and project management.",
    problem: "Important project context is easy to lose when information is scattered across tools and conversations.",
    contribution: "Built backend foundations for information storage, worked with PostgreSQL and vector-based memory infrastructure, and explored AI integrations and scheduled automation.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Vector search"],
    href: "#contact",
    tone: "project-card--cyan",
    icon: Database,
  },
];

const skills = [
  { icon: Server, title: "Backend development", items: ["Python", "FastAPI", "REST APIs", "Pydantic", "SQLAlchemy"] },
  { icon: Database, title: "Databases", items: ["PostgreSQL", "SQL", "Database design", "Migrations"] },
  { icon: Bot, title: "AI engineering", items: ["LLM integration", "Gemini API", "Tool calling", "Agent orchestration", "Workflow automation"] },
  { icon: Code2, title: "Frontend development", items: ["React", "JavaScript", "HTML", "CSS", "Vite"] },
  { icon: Terminal, title: "Tools and workflow", items: ["Git", "GitHub", "VS Code", "PowerShell", "API testing"] },
];

const services = [
  ["01", "Business website development", "Modern, responsive websites for businesses and service providers."],
  ["02", "Backend API development", "Python and FastAPI services connected to practical data models."],
  ["03", "Full-stack web development", "Frontend interfaces integrated with APIs and databases."],
  ["04", "AI-powered applications", "LLM integrations, agent workflows, and practical automation prototypes."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Muzamil Abbas home">
          <span className="wordmark-mark">MA</span>
          <span>Muzamil Abbas<span className="wordmark-dot">.</span></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav id="primary-navigation" className={`site-nav ${menuOpen ? "site-nav--open" : ""}`} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-grid-mark" aria-hidden="true"><span /> <span /> <span /> <span /></div>
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> Backend developer · AI engineering · Full-stack delivery</div>
            <h1 id="hero-title">I build the<br /><em>systems</em><br />behind useful products.</h1>
            <p className="hero-intro">I&apos;m <strong>Muzamil Abbas</strong>, a backend developer and AI engineer from Pakistan. I build practical software across APIs, databases, web platforms, and agentic workflows.</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">Explore my work <ArrowRight size={17} /></a>
              <a className="text-link" href="#contact">Open to opportunities <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="hero-console" aria-label="Developer profile summary">
            <div className="console-top"><span className="console-dots"><i /><i /><i /></span><span>muzamil_profile.json</span><span>01</span></div>
            <div className="console-body">
              <div className="console-line"><span className="syntax-pink">const</span> <span className="syntax-blue">developer</span> <span className="syntax-white">=</span> <span className="syntax-yellow">&#123;</span></div>
              <div className="console-line indent"><span className="syntax-blue">name</span><span className="syntax-white">:</span> <span className="syntax-green">&quot;Muzamil Abbas&quot;</span><span className="syntax-white">,</span></div>
              <div className="console-line indent"><span className="syntax-blue">focus</span><span className="syntax-white">:</span> <span className="syntax-green">&quot;Backend + AI&quot;</span><span className="syntax-white">,</span></div>
              <div className="console-line indent"><span className="syntax-blue">location</span><span className="syntax-white">:</span> <span className="syntax-green">&quot;Pakistan&quot;</span><span className="syntax-white">,</span></div>
              <div className="console-line indent"><span className="syntax-blue">status</span><span className="syntax-white">:</span> <span className="syntax-green">&quot;available&quot;</span><span className="syntax-white">,</span></div>
              <div className="console-line indent"><span className="syntax-blue">ships</span><span className="syntax-white">:</span> <span className="syntax-yellow">[</span></div>
              <div className="console-line double-indent"><span className="syntax-green">&quot;APIs&quot;</span><span className="syntax-white">,</span> <span className="syntax-green">&quot;AI workflows&quot;</span><span className="syntax-white">,</span></div>
              <div className="console-line double-indent"><span className="syntax-green">&quot;full-stack products&quot;</span></div>
              <div className="console-line indent"><span className="syntax-yellow">]</span></div>
              <div className="console-line"><span className="syntax-yellow">&#125;</span><span className="syntax-white">;</span><span className="console-cursor">▌</span></div>
            </div>
            <div className="console-footer"><span><span className="status-dot" /> open to relevant work</span><span>v.2027</span></div>
          </div>
          <div className="hero-footer"><span><MapPin size={13} /> Pakistan</span><span className="hero-footer-rule" /><span>Open to employment, internships, and freelance opportunities</span><span className="hero-scroll">Scroll to explore <ArrowRight size={14} /></span></div>
        </section>

        <section id="about" className="about section-wrap section-rule" aria-labelledby="about-title">
          <div className="section-label"><span>01</span><span>About me</span></div>
          <div className="about-content">
            <div className="section-heading-row"><h2 id="about-title">Practical engineering.<br /><em>Useful outcomes.</em></h2><span className="section-stamp">ABOUT<br /><b>MA / 01</b></span></div>
            <div className="about-grid">
              <p className="about-lead">I like turning technical ideas into software that people can actually use.</p>
              <div className="about-body"><p>I am a Computer Systems undergraduate at Riphah International University with a strong interest in backend engineering, artificial intelligence, and full-stack development.</p><p>My experience combines practical project development with remote industry exposure. At Flyrank AI, I worked as a Backend AI Engineering Intern. I have also completed and deployed a live website for NB Engineering &amp; Services and am developing ShopMind AI, an agentic AI platform for e-commerce workflows.</p><p>I enjoy solving real-world problems with Python, APIs, databases, AI integrations, and software automation. I care about reliable systems, maintainable code, and learning through shipping.</p></div>
            </div>
            <div className="about-facts" aria-label="Profile highlights"><div><strong>2027</strong><span>expected graduation</span></div><div><strong>7th</strong><span>current semester</span></div><div><strong>01</strong><span>live business website</span></div><div><strong>∞</strong><span>curiosity</span></div></div>
          </div>
        </section>

        <section id="experience" className="experience section-wrap section-rule" aria-labelledby="experience-title">
          <div className="section-label"><span>02</span><span>Experience</span></div>
          <div className="experience-content">
            <div className="section-heading-row"><h2 id="experience-title">Professional<br /><em>exposure.</em></h2><p>Experience beyond coursework, grounded in practical software development and remote collaboration.</p></div>
            <article className="experience-card"><div className="experience-icon"><BriefcaseBusiness size={24} /></div><div className="experience-main"><div className="experience-top"><div><h3>Backend AI Engineer Intern</h3><p>Flyrank AI · Remote internship</p></div><span className="status-pill"><CheckCircle2 size={14} /> Completed</span></div><p className="experience-summary">Worked remotely in a Backend AI Engineering role, gaining industry exposure to backend and AI engineering in a professional software environment.</p><div className="experience-notes"><span>Backend engineering</span><span>AI engineering exposure</span><span>Remote collaboration</span></div></div></article>
            <p className="disclaimer"><Sparkles size={15} /> Detailed technologies, responsibilities, and outcomes can be added as the internship work is confirmed.</p>
          </div>
        </section>

        <section id="work" className="work section-wrap section-rule" aria-labelledby="work-title">
          <div className="section-label"><span>03</span><span>Selected work</span></div>
          <div className="work-content">
            <div className="section-heading-row"><h2 id="work-title">Built for the<br /><em>real world.</em></h2><p>Case studies spanning a live business website, agentic e-commerce automation, and backend AI experiments.</p></div>
            <div className="project-list">{projects.map((project) => { const Icon = project.icon; return <article className={`project-card ${project.tone}`} key={project.number}><div className="project-art"><span className="project-number">{project.number}</span><Icon size={52} strokeWidth={1.2} /><span className="project-art-label">{project.type}</span></div><div className="project-info"><div className="project-meta"><span>{project.status}</span><ArrowUpRight size={17} /></div><h3>{project.title}</h3><p>{project.description}</p><div className="case-study"><div><b>Problem</b><span>{project.problem}</span></div><div><b>Contribution</b><span>{project.contribution}</span></div></div><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noreferrer" : undefined}>{project.href.startsWith("http") ? "Visit live website" : "Discuss this project"} <ExternalLink size={14} /></a></div></article>; })}</div>
          </div>
        </section>

        <section id="skills" className="skills section-wrap section-rule" aria-labelledby="skills-title">
          <div className="section-label"><span>04</span><span>Technical skills</span></div>
          <div className="skills-content"><div className="section-heading-row"><h2 id="skills-title">The tools I<br /><em>work with.</em></h2><p>Technologies I am building with and learning through real projects. No arbitrary proficiency percentages.</p></div><div className="skills-grid">{skills.map(({ icon: Icon, title, items }) => <div className="skill-card" key={title}><Icon size={22} strokeWidth={1.5} /><h3>{title}</h3><div className="skill-tags">{items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></div>
        </section>

        <section className="services section-wrap section-rule" aria-labelledby="services-title">
          <div className="section-label"><span>05</span><span>Freelance services</span></div>
          <div className="services-content"><div className="section-heading-row"><h2 id="services-title">Let&apos;s build<br /><em>something useful.</em></h2><p>Practical, maintainable solutions tailored to the needs of each project.</p></div><div className="service-list">{services.map(([number, title, description]) => <div className="service-row" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight size={18} /></div>)}</div></div>
        </section>

        <section className="education section-wrap section-rule" aria-labelledby="education-title">
          <div className="section-label"><span>06</span><span>Education</span></div>
          <div className="education-content"><div className="education-card"><div className="education-icon"><GraduationCap size={27} /></div><div><span className="small-label">Current program</span><h2 id="education-title">Bachelor of Science<br />in Computer Systems</h2><p>Riphah International University · Pakistan</p><div className="education-details"><span>7th semester</span><span>Expected graduation: 2027</span><span>Final-year project: ShopMind AI</span></div></div></div><div className="certifications"><div className="small-label"><Award size={15} /> Professional development</div><p>Python Essentials 1 · Cisco</p><p>Python Essentials 2 · Cisco</p><p>Network Security · Cisco</p><p>Database Management Systems · Certificate</p><span className="cert-note">Exact credential names and verification links can be added as they are confirmed.</span></div></div>
        </section>

        <section id="contact" className="contact section-wrap" aria-labelledby="contact-title"><div className="contact-grid-lines" aria-hidden="true" /><div className="contact-content"><div className="eyebrow"><span className="eyebrow-line" /> Start a conversation</div><h2 id="contact-title">Let&apos;s build<br /><em>something useful.</em></h2><p>I am interested in opportunities involving backend development, AI engineering, full-stack web development, and practical software automation.</p><p>Whether you need a business website, an API, or an AI-powered application prototype, I would be happy to discuss your project.</p><div className="contact-actions"><a className="email-link" href="mailto:muzamilabbas37280@gmail.com"><Mail size={18} /> muzamilabbas37280@gmail.com <ArrowUpRight size={16} /></a><a className="linkedin-link" href="https://www.linkedin.com/in/muzamil-abbas-8508513bb?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn profile <ArrowUpRight size={16} /></a><a className="github-link" href="https://github.com/Muzamil-pwn5" target="_blank" rel="noreferrer"><Github size={18} /> github.com/Muzamil-pwn5 <ArrowUpRight size={16} /></a></div></div><div className="contact-side"><span>AVAILABLE</span><strong>for relevant<br />opportunities</strong><span className="contact-location"><MapPin size={15} /> Pakistan</span></div></section>
      </main>

      <footer className="site-footer"><div className="footer-top"><a className="wordmark wordmark--footer" href="#top"><span className="wordmark-mark">MA</span><span>Muzamil Abbas<span className="wordmark-dot">.</span></span></a><p>Backend developer, AI engineer,<br />and full-stack builder.</p><div className="social-links"><a href="https://github.com/Muzamil-pwn5" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="https://www.linkedin.com/in/muzamil-abbas-8508513bb?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="mailto:muzamilabbas37280@gmail.com" aria-label="Email"><Mail size={18} /></a></div></div><div className="footer-bottom"><span>© 2026 Muzamil Abbas. All rights reserved.</span><span>Built with Python, APIs, and curiosity <span className="footer-heart">✦</span></span></div></footer>
    </div>
  );
}
