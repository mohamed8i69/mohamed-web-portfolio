import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  ChevronRight,
  CircleDot,
  ExternalLink,
  Github,
  Menu,
  Network,
  ServerCog,
  Terminal,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "FRONTEND SYSTEM",
    title: "Perfume",
    short: "Premium fragrance commerce, designed as a complete Angular experience.",
    body: "An individually built Angular e-commerce frontend with product discovery, product details, cart and checkout flows, authentication UI, and an admin dashboard interface.",
    stack: ["Angular 21", "TypeScript", "SSR", "RxJS"],
    color: "blue",
    repo: "https://github.com/mohamed8i69/purfume",
    visual: "perfume",
  },
  {
    number: "02",
    category: "CLIENT / FULL-STACK",
    title: "RoyalRide",
    short: "A branded transportation platform with a service layer behind the interface.",
    body: "A client-facing Angular application paired with a Node.js administration API for controlled site content, authentication, health monitoring, and order-related operations.",
    stack: ["Angular 22", "Node.js", "Express", "MongoDB", "JWT"],
    color: "lime",
    repo: "https://github.com/mohamed8i69/ROYALRIDE",
    secondaryRepo: "https://github.com/mohamed8i69/dashboard",
    visual: "royalride",
  },
  {
    number: "03",
    category: "CMS / CLIENT DELIVERY",
    title: "KINGWINS",
    short: "A marketing system built to make a product story easier to understand and act on.",
    body: "A client project for an aluminum-products business. The original static experience was converted into a reusable WordPress theme with product templates, navigation, forms, and a clearer path to customer inquiries.",
    stack: ["WordPress", "PHP", "JavaScript", "CSS"],
    color: "orange",
    repo: "https://github.com/mohamed8i69/kingwins_theme",
    visual: "kingwins",
  },
  {
    number: "04",
    category: "FULL-STACK FOUNDATION",
    title: "Algeria",
    short: "A modern application structure organized for a maintainable product.",
    body: "An individually built application structure with a React and Next.js frontend, database schema, reusable interface tooling, environment configuration, and a workflow prepared for growth.",
    stack: ["Next.js", "React", "TypeScript", "Prisma"],
    color: "violet",
    repo: "https://github.com/mohamed8i69/algeria",
    visual: "algeria",
  },
  {
    number: "05",
    category: ".NET / APPLICATION LOGIC",
    title: "Employee Management System",
    short: "A focused C# build for organizing employee information and business logic.",
    body: "An individually developed .NET project that demonstrates object-oriented application development and the implementation of a business-oriented management system.",
    stack: ["C#", ".NET", "OOP", "Solution Design"],
    color: "sky",
    repo: "https://github.com/mohamed8i69/EmployeeManagementSystem",
    visual: "dotnet",
  },
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function ProjectDiagram({ visual, color }: { visual: string; color: string }) {
  return (
    <div className={`project-diagram diagram-${visual} tone-${color}`} aria-hidden="true">
      <div className="diagram-grid" />
      <div className="diagram-header"><span>MOHAMED / SYSTEM MAP</span><span>LIVE PREVIEW</span></div>
      {visual === "perfume" && <><div className="orb orb-a" /><div className="orb orb-b" /><div className="diagram-line line-a" /><div className="diagram-line line-b" /><div className="diagram-label label-a">PRODUCT</div><div className="diagram-label label-b">CHECKOUT</div><div className="diagram-center">✦</div></>}
      {visual === "royalride" && <><div className="route route-a" /><div className="route route-b" /><div className="node node-a">01</div><div className="node node-b">02</div><div className="node node-c">03</div><div className="diagram-center">↗</div></>}
      {visual === "kingwins" && <><div className="material-block block-a" /><div className="material-block block-b" /><div className="material-block block-c" /><div className="diagram-center">◼</div><div className="diagram-label label-a">MATERIAL</div><div className="diagram-label label-b">FORM</div></>}
      {visual === "algeria" && <><div className="stack stack-a" /><div className="stack stack-b" /><div className="stack stack-c" /><div className="diagram-center">⌁</div><div className="diagram-label label-a">DATA</div><div className="diagram-label label-b">INTERFACE</div></>}
      {visual === "dotnet" && <><div className="code-block"><span>class</span> EmployeeManager &#123;<br /><i>  public</i> void Organize() &#123;<br /><i>    system.Run();</i><br />  &#125;<br />&#125;</div><div className="diagram-center">{ }</div></>}
      <div className="diagram-footer"><span>ARCHITECTURE / 0{visual === "dotnet" ? "5" : "1"}</span><span>SELECTED WORK</span></div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  useReveal();
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return (
    <div className="engineer-site">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <button className="signature" onClick={() => scrollTo("top")}><span className="signature-box">MA</span><span>Mohamed Abdo<br />El Moniem</span></button>
        <div className="topbar-status"><CircleDot size={12} /> available for selected work</div>
        <nav className={menuOpen ? "topnav open" : "topnav"}>
          <button onClick={() => scrollTo("systems")}>Systems</button><button onClick={() => scrollTo("principles")}>Approach</button><a href="https://github.com/mohamed8i69" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
        </nav>
        <button className="mobile-menu" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </header>

      <main id="top">
        <section className="engineer-hero section-wrap">
          <div className="hero-badge"><Terminal size={14} /><span>WEB ENGINEER / 2026</span><span className="badge-bar" /><span>BUILD 001</span></div>
          <div className="hero-engine-grid">
            <div className="hero-engine-copy" data-reveal><div className="hero-kicker">01 / INTRODUCTION</div><h1>Software that feels <span>obvious.</span></h1><p>I build clear, useful digital experiences for visionary clients—combining decisive design with proactive front-end engineering.</p><div className="hero-buttons"><button className="solid-button" onClick={() => scrollTo("systems")}>Inspect selected systems <ArrowDownRight size={17} /></button><a className="outline-button" href="https://github.com/mohamed8i69" target="_blank" rel="noreferrer"><Github size={17} /> github.com/mohamed8i69</a></div></div>
            <div className="hero-right-stack" data-reveal><div className="profile-card"><div className="profile-photo-wrap"><img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Mohamed Abdo El Moniem" /></div><div className="profile-card-copy"><span>PROFILE / 001</span><strong>Mohamed Abdo<br />El Moniem</strong><small>Front-end developer<br />Web systems builder</small></div><div className="profile-signal"><Check size={12} /> verified</div></div><div className="terminal-window"><div className="terminal-top"><span className="terminal-dots"><i /><i /><i /></span><span>mohamed@portfolio:~</span><span>●</span></div><div className="terminal-body"><div><span className="prompt">$</span> whoami</div><div className="terminal-output">front-end developer<br />web systems builder</div><div><span className="prompt">$</span> cat /usp.txt</div><div className="terminal-output accent-output">clear communication<br />decisive design<br />details checked</div><div><span className="prompt">$</span> ./showcase --count=5</div><div className="terminal-cursor">▊</div></div></div></div>
          </div>
          <div className="hero-scroll"><span>scroll / explore systems</span><span className="scroll-rule" /><span>01—05</span></div>
        </section>

        <div className="ticker"><div className="ticker-track"><span>FRONT-END SYSTEMS</span><b>✦</b><span>CLIENT DELIVERY</span><b>✦</b><span>PRODUCT-MINDED DESIGN</span><b>✦</b><span>FRONT-END SYSTEMS</span><b>✦</b><span>CLIENT DELIVERY</span><b>✦</b><span>PRODUCT-MINDED DESIGN</span><b>✦</b></div></div>

        <section className="principles section-wrap" id="principles"><div className="section-label" data-reveal><span>02</span><span>WORKING PRINCIPLES</span></div><div className="principles-copy" data-reveal><h2>Good engineering gives the idea <span>room to work.</span></h2><p>I bring organization, efficiency, and a detail-first mindset to every build. The goal is not only to finish the project—it is to elevate how it feels to use.</p><div className="principle-list"><div><span>01</span><strong>Clarity before complexity</strong><p>Structure the experience so the next action feels natural.</p></div><div><span>02</span><strong>Design that earns attention</strong><p>Use visual hierarchy and motion to guide, not distract.</p></div><div><span>03</span><strong>Delivery with intention</strong><p>Check the details, document the system, and leave it ready to grow.</p></div></div></div></section>

        <section className="systems section-wrap" id="systems"><div className="systems-heading" data-reveal><div><div className="section-label"><span>03</span><span>SELECTED SYSTEMS</span></div><h2>Five builds.<br /><span>One direction.</span></h2></div><p>Web projects selected for the way they combine interface craft, product thinking, and implementation depth.</p></div><div className="system-list">{projects.map((project) => <article className={`system-card color-${project.color}`} data-reveal key={project.title}><ProjectDiagram visual={project.visual} color={project.color} /><div className="system-info"><div className="system-meta"><span>{project.number}</span><span>{project.category}</span></div><h3>{project.title}</h3><p>{project.short}</p><div className="tech-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="system-action"><button onClick={() => setActive(active === project.title ? null : project.title)}>{active === project.title ? "Hide system notes" : "Open system notes"}<ChevronRight className={active === project.title ? "chevron-flip" : ""} size={16} /></button><a href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}><Github size={16} /></a></div>{active === project.title && <div className="system-notes"><p>{project.body}</p><a href={project.repo} target="_blank" rel="noreferrer">Repository <ExternalLink size={13} /></a>{project.secondaryRepo && <a href={project.secondaryRepo} target="_blank" rel="noreferrer">Dashboard API <ExternalLink size={13} /></a>}</div>}</div></article>)}</div></section>

        <section className="capabilities section-wrap"><div className="section-label" data-reveal><span>04</span><span>CAPABILITIES</span></div><div className="capability-grid"><div data-reveal><Network size={22} /><h3>Frontend architecture</h3><p>Angular, React, TypeScript, routing, state, SSR, and responsive interfaces.</p></div><div data-reveal><ServerCog size={22} /><h3>Connected systems</h3><p>Node.js, Express, MongoDB, WordPress, APIs, and practical project structure.</p></div><div data-reveal><Braces size={22} /><h3>Reliable details</h3><p>Clear documentation, careful handoff, and interfaces that feel considered.</p></div></div></section>

        <section className="engineer-cta section-wrap" data-reveal><div className="cta-code">&lt;build /&gt;</div><h2>Let’s ship something<br /><span>worth using.</span></h2><p>Have a product, client idea, or system that needs a clear front end?</p><a className="solid-button" href="https://github.com/mohamed8i69" target="_blank" rel="noreferrer">Open the codebase <ArrowUpRight size={17} /></a></section>
      </main>
      <footer className="engineer-footer section-wrap"><span>© 2026 / MOHAMED ABDO EL MONIEM</span><span>BUILT WITH INTENTION</span><a href="https://github.com/mohamed8i69" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={13} /></a></footer>
    </div>
  );
}

export default App;
