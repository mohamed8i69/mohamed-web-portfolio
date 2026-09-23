import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Menu,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    type: "E-COMMERCE / ANGULAR",
    title: "Perfume",
    subtitle: "A premium fragrance storefront built for browsing, discovery, and conversion.",
    description:
      "An individually built Angular e-commerce frontend with product discovery, product detail pages, cart and checkout flows, authentication UI, and an admin dashboard interface.",
    stack: ["Angular 21", "TypeScript", "SSR", "RxJS", "Express"],
    accent: "cobalt",
    repo: "https://github.com/mohamed8i69/purfume",
    visual: "perfume",
  },
  {
    number: "02",
    type: "CLIENT PLATFORM / FULL-STACK",
    title: "RoyalRide",
    subtitle: "A branded transportation experience with an operational dashboard behind it.",
    description:
      "A client-facing Angular application paired with a Node.js administration API. The system brings together the public experience, controlled site content, authentication, and order-related operations.",
    stack: ["Angular 22", "Node.js", "Express", "MongoDB", "JWT"],
    accent: "lime",
    repo: "https://github.com/mohamed8i69/ROYALRIDE",
    visual: "royalride",
    secondaryRepo: "https://github.com/mohamed8i69/dashboard",
  },
  {
    number: "03",
    type: "WORDPRESS / PHP",
    title: "KINGWINS",
    subtitle: "A marketing website and WordPress theme designed to turn attention into inquiries.",
    description:
      "A client project for an aluminum-products business. The original static experience was converted into a reusable WordPress theme with product templates, navigation, forms, and a clearer path to contact.",
    stack: ["WordPress", "PHP", "JavaScript", "CSS", "Custom Templates"],
    accent: "orange",
    repo: "https://github.com/mohamed8i69/kingwins_theme",
    visual: "kingwins",
  },
  {
    number: "04",
    type: "FULL-STACK / PRODUCT SYSTEM",
    title: "Algeria",
    subtitle: "A modern full-stack foundation organized for a maintainable web product.",
    description:
      "An individually built application structure with a React and Next.js frontend, database schema, reusable interface tooling, environment configuration, and a workflow prepared for growth.",
    stack: ["Next.js", "React", "TypeScript", "Prisma", "Tailwind"],
    accent: "violet",
    repo: "https://github.com/mohamed8i69/algeria",
    visual: "algeria",
  },
  {
    number: "05",
    type: ".NET / APPLICATION LOGIC",
    title: "Employee Management System",
    subtitle: "A focused C# project for organizing employee information and business logic.",
    description:
      "An individually developed .NET project that demonstrates object-oriented application development and the implementation of a business-oriented management system.",
    stack: ["C#", ".NET", "OOP", "Solution Design"],
    accent: "sky",
    repo: "https://github.com/mohamed8i69/EmployeeManagementSystem",
    visual: "dotnet",
  },
];

const visualContent: Record<string, { label: string; detail: string; glyph: string }> = {
  perfume: { label: "ATELIER / 01", detail: "FRAGRANCE COMMERCE", glyph: "✦" },
  royalride: { label: "ROYALRIDE / 02", detail: "MOVE WITH PURPOSE", glyph: "↗" },
  kingwins: { label: "KINGWINS / 03", detail: "MATERIAL / FORM", glyph: "◼" },
  algeria: { label: "ALGERIA / 04", detail: "BUILD THE SYSTEM", glyph: "⌁" },
  dotnet: { label: "SYSTEM / 05", detail: "PEOPLE / PROCESS", glyph: "{ }" },
};

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  const content = visualContent[project.visual];
  return (
    <div className={`project-visual visual-${project.visual}`} aria-hidden="true">
      <div className="visual-grid" />
      <div className="visual-topline"><span>{content.label}</span><span>MOHAMED / 2026</span></div>
      <div className="visual-core">
        <div className="visual-glyph">{content.glyph}</div>
        <div className="visual-detail">{content.detail}</div>
      </div>
      <div className="visual-corner">{project.number}<br /><span>SELECTED<br />WORK</span></div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="noise" />
      <header className="site-header">
        <button className="brand" onClick={() => scrollTo("top")} aria-label="Go to top">
          <span className="brand-mark">MA</span>
          <span className="brand-name">Mohamed Abdo<br />El Moniem</span>
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
          <button onClick={() => scrollTo("work")}>Selected work</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <a href="https://github.com/mohamed8i69" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-eyebrow"><span className="status-dot" /> Front-end developer / web systems builder</div>
          <div className="hero-layout">
            <div className="hero-copy">
              <h1>I turn ideas into <em>clear</em> digital experiences.</h1>
              <p className="hero-lede">I help visionary clients bring their ideas to life through clear communication, decisive design, and proactive front-end solutions.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => scrollTo("work")}>Explore selected work <ArrowUpRight size={17} /></button>
                <a className="button button-ghost" href="https://github.com/mohamed8i69" target="_blank" rel="noreferrer"><Github size={17} /> GitHub profile</a>
              </div>
            </div>
            <div className="hero-aside">
              <div className="hero-index">A / 01</div>
              <div className="hero-aside-line" />
              <p>Websites and systems shaped around a simple belief: the details should feel intentional.</p>
              <div className="hero-stat"><strong>05</strong><span>featured projects<br />in this showcase</span></div>
            </div>
          </div>
          <div className="hero-bottomline"><span>Scroll to explore</span><span className="scroll-line" /><span>Alexandria / Egypt</span></div>
        </section>

        <section className="intro-band" id="about">
          <div className="section-pad intro-grid">
            <div className="section-kicker"><span>01</span> The approach</div>
            <div className="intro-copy"><h2>Clear structure. Decisive design. <span>Useful outcomes.</span></h2><p>My work sits between visual craft and practical engineering. I organize the experience, choose the right tools, and stay close to the small details that make a project feel finished.</p></div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading"><div><div className="section-kicker"><span>02</span> Selected work</div><h2>Built to be <em>remembered.</em></h2></div><p>Five projects from my web development path—selected for their product thinking, technical range, and the story they tell together.</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card accent-${project.accent}`} key={project.title}>
                <ProjectVisual project={project} />
                <div className="project-content">
                  <div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <div className="tag-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="project-footer"><button className="text-button" onClick={() => setActiveProject(activeProject === project.title ? null : project.title)}>{activeProject === project.title ? "Close details" : "View project story"} <ChevronDown className={activeProject === project.title ? "rotate" : ""} size={17} /></button><a href={project.repo} target="_blank" rel="noreferrer" className="icon-link" aria-label={`Open ${project.title} GitHub repository`}><Github size={17} /></a></div>
                  {activeProject === project.title && <div className="project-story"><p>{project.description}</p><a href={project.repo} target="_blank" rel="noreferrer">Open repository <ExternalLink size={14} /></a>{project.secondaryRepo && <a href={project.secondaryRepo} target="_blank" rel="noreferrer">Open dashboard API <ExternalLink size={14} /></a>}</div>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-band section-pad">
          <div className="services-heading"><div className="section-kicker"><span>03</span> What I bring</div><p>Organized thinking from first conversation to final detail.</p></div>
          <div className="services-grid"><div><Code2 size={24} /><h3>Front-end systems</h3><p>Responsive interfaces, component structure, state, routing, and performance-aware builds.</p></div><div><Layers3 size={24} /><h3>Product-minded design</h3><p>Clear hierarchy and visual direction that help people understand what to do next.</p></div><div><BriefcaseBusiness size={24} /><h3>Client-ready delivery</h3><p>Careful communication, practical documentation, and a proactive eye for the details.</p></div></div>
        </section>

        <section className="closing section-pad"><div className="closing-mark">✦</div><h2>Have an idea worth<br /><em>building?</em></h2><p>Let’s shape it into something clear, useful, and ready to move.</p><a className="button button-primary" href="https://github.com/mohamed8i69" target="_blank" rel="noreferrer">Start with my GitHub <ArrowUpRight size={17} /></a></section>
      </main>

      <footer className="site-footer section-pad"><span>© 2026 Mohamed Abdo El Moniem</span><span>Web portfolio / Selected work</span><a href="https://github.com/mohamed8i69" target="_blank" rel="noreferrer">github.com/mohamed8i69</a></footer>
    </div>
  );
}

export default App;
