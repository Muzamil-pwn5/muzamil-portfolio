import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Dribbble,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoveDown,
  Sparkles,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Northstar / Brand system",
    description:
      "A flexible visual identity and launch toolkit for a values-led product team ready to grow with intention.",
    role: "Strategy · Art direction",
    tags: ["Branding", "Campaigns"],
    tone: "project-card--orange",
  },
  {
    number: "02",
    title: "Field Notes / Digital product",
    description:
      "A calm, editorial workspace that turns research, references, and daily ideas into a useful creative practice.",
    role: "UX/UI · Product design",
    tags: ["Web design", "Prototyping"],
    tone: "project-card--sage",
  },
  {
    number: "03",
    title: "Afterlight / Editorial platform",
    description:
      "A content-led experience with a sharper point of view, built to make every story feel easy to enter and hard to forget.",
    role: "Creative direction · Web",
    tags: ["Editorial", "Development"],
    tone: "project-card--blue",
  },
];

const capabilities = [
  ["01", "Brand direction", "Positioning, visual worlds, and the decisions that make a brand feel unmistakably itself."],
  ["02", "Digital experiences", "Thoughtful websites and products that balance clarity, character, and momentum."],
  ["03", "Creative partnership", "A steady senior point of view for teams shaping what comes next."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Your Name home" onClick={closeMenu}>
          <span className="wordmark-mark">Y</span>
          <span>Your Name<span className="wordmark-dot">.</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
        </button>

        <nav id="primary-navigation" className={`site-nav ${menuOpen ? "site-nav--open" : ""}`} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> Independent creative partner · 2024—now</div>
            <h1 id="hero-title">Make good<br /><em>things</em> matter.</h1>
            <p className="hero-intro">I&apos;m <strong>Your Name</strong>, a designer and creative director helping ambitious people turn a sharp idea into something people remember.</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">Explore selected work <ArrowRight size={17} /></a>
              <a className="text-link" href="#about">A little more about me <MoveDown size={15} /></a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Decorative placeholder profile visual">
            <div className="visual-orbit visual-orbit--one" />
            <div className="visual-orbit visual-orbit--two" />
            <div className="visual-sticker">Good<br />ideas<br /><span>inside</span></div>
            <div className="visual-main">
              <div className="visual-initials">YN</div>
              <div className="visual-caption"><span>Available for</span><strong>new conversations</strong></div>
            </div>
            <div className="visual-note">(01) Make it<br />meaningful</div>
          </div>

          <div className="hero-footer">
            <span>Based in [City, Country]</span>
            <span className="hero-footer-rule" />
            <span>Working worldwide</span>
            <span className="hero-scroll"><MoveDown size={16} /> Scroll to explore</span>
          </div>
        </section>

        <section id="about" className="about section-wrap section-rule" aria-labelledby="about-title">
          <div className="section-label"><span>01</span><span>About</span></div>
          <div className="about-content">
            <h2 id="about-title">Curious by nature.<br /><span>Particular by choice.</span></h2>
            <div className="about-grid">
              <p className="about-lead">I believe the best work lives somewhere between a clear point of view and a little bit of room to play.</p>
              <div className="about-body">
                <p>This is the editable placeholder for your short biography. Tell visitors where you came from, what you care about, and the kind of problems you love to solve. Keep it human, specific, and easy to read.</p>
                <p>Over the last [X] years, I&apos;ve partnered with founders, teams, and culture-shapers to build brands and digital experiences with a little more soul.</p>
                <a className="text-link text-link--dark" href="#contact">Let&apos;s make something useful <ArrowUpRight size={15} /></a>
              </div>
            </div>
            <div className="about-facts" aria-label="Personal highlights">
              <div><strong>[X]+</strong><span>years of experience</span></div>
              <div><strong>[XX]</strong><span>projects shipped</span></div>
              <div><strong>∞</strong><span>questions asked</span></div>
            </div>
          </div>
        </section>

        <section id="work" className="work section-wrap section-rule" aria-labelledby="work-title">
          <div className="section-label"><span>02</span><span>Selected work</span></div>
          <div className="work-content">
            <div className="section-heading-row">
              <h2 id="work-title">A few things<br /><em>in the world.</em></h2>
              <p>Selected projects, collaborations, and experiments. Replace these with the work you&apos;re proudest of.</p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className={`project-card ${project.tone}`} key={project.number}>
                  <div className="project-art" aria-hidden="true">
                    <span className="project-number">{project.number}</span>
                    <span className="project-art-word">{project.number === "01" ? "N" : project.number === "02" ? "fn" : "a"}</span>
                    <span className="project-art-shape" />
                  </div>
                  <div className="project-info">
                    <div className="project-meta"><span>{project.role}</span><ArrowUpRight size={18} /></div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
            <a className="button button--outline" href="#contact">View full project archive <ArrowRight size={17} /></a>
          </div>
        </section>

        <section id="services" className="services section-wrap section-rule" aria-labelledby="services-title">
          <div className="section-label"><span>03</span><span>What I do</span></div>
          <div className="services-content">
            <div className="section-heading-row section-heading-row--services">
              <h2 id="services-title">Useful thinking,<br /><span>beautifully made.</span></h2>
              <p>From first thought to final detail, I bring shape and energy to the part that feels most important.</p>
            </div>
            <div className="capability-list">
              {capabilities.map(([number, title, description]) => (
                <div className="capability" key={number}>
                  <span className="capability-number">{number}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                  <Check size={18} className="capability-check" />
                </div>
              ))}
            </div>
            <div className="availability-note"><Sparkles size={18} /><span>Currently booking select projects for [Season, Year].</span><a href="#contact">Check availability <ArrowUpRight size={15} /></a></div>
          </div>
        </section>

        <section id="contact" className="contact section-wrap" aria-labelledby="contact-title">
          <div className="contact-stamp" aria-hidden="true">Let&apos;s<br /><span>talk.</span></div>
          <div className="contact-content">
            <div className="eyebrow"><span className="eyebrow-line" /> Start a conversation</div>
            <h2 id="contact-title">Have a good<br /><em>one in mind?</em></h2>
            <p>Tell me a little about what you&apos;re working on, what&apos;s not working yet, or simply say hello. I&apos;d love to hear from you.</p>
            <a className="email-link" href="mailto:you@example.com"><Mail size={19} /> you@example.com <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="wordmark wordmark--footer" href="#top"><span className="wordmark-mark">Y</span><span>Your Name<span className="wordmark-dot">.</span></span></a>
          <p>Designing with intention<br />from [City] to everywhere.</p>
          <div className="social-links" aria-label="Social links">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" aria-label="Dribbble"><Dribbble size={18} /></a>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2024 Your Name. All rights reserved.</span><span>Built with care <span className="footer-heart">✦</span></span></div>
      </footer>
    </div>
  );
}
