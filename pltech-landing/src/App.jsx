import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Code2, LayoutDashboard, Menu, MonitorSmartphone, PenTool, Send, Sparkles, Wrench, X } from 'lucide-react';

const services = [
  { icon: MonitorSmartphone, number: '01', title: 'Diseño y desarrollo web', text: 'Una web clara, rápida y adaptada a móvil que explica bien lo que haces y ayuda a tus clientes a dar el siguiente paso.' },
  { icon: PenTool, number: '02', title: 'Rediseño web', text: 'Actualizamos tu presencia online para que refleje mejor tu negocio, mejore la experiencia y vuelva a trabajar a tu favor.' },
  { icon: Code2, number: '03', title: 'Desarrollo a medida', text: 'Funcionalidades y herramientas web creadas alrededor de cómo funciona tu negocio: reservas, áreas privadas o gestión.' },
  { icon: Wrench, number: '04', title: 'Mantenimiento y soporte', text: 'Nos ocupamos de las actualizaciones y mejoras para que tu web siga funcionando y creciendo contigo.' },
];

const projects = [
  { tag: 'Aplicación web · Deporte', title: 'Entrena con una visión más clara', kind: 'training', label: 'TRAINING / OVERVIEW' },
  { tag: 'WordPress · Catálogo', title: 'Un escaparate digital para cada propiedad', kind: 'catalog', label: 'PROPIEDADES DESTACADAS' },
];

function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#inicio" aria-label="PLTech, inicio"><span className="brand-mark">P<span>L</span></span><span className="brand-name">PL<span>Tech</span></span></a>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [['Servicios', '#servicios'], ['Proyectos', '#proyectos'], ['Cómo trabajamos', '#proceso'], ['Sobre PLTech', '#nosotros']];
  return <header className="site-header"><div className="container nav-wrap"><Brand /><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{open ? <X /> : <Menu />}</button><nav className={open ? 'nav-links nav-open' : 'nav-links'}>{links.map(([name, href]) => <a key={name} href={href} onClick={() => setOpen(false)}>{name}</a>)}<a className="nav-cta" href="#contacto" onClick={() => setOpen(false)}>Hablemos <ArrowUpRight size={16} /></a></nav></div></header>;
}

function Hero() {
  return <section className="hero" id="inicio"><div className="hero-glow glow-one" /><div className="hero-glow glow-two" /><div className="container hero-grid"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> Diseño & desarrollo web · Elche y online</div><h1>Tu negocio.<br /><span>Mejor en Internet.</span></h1><p className="hero-lede">Diseñamos y desarrollamos webs que ayudan a pequeñas empresas a crecer, conectar y trabajar mejor.</p><div className="hero-actions"><a className="button button-primary" href="#contacto">Cuéntanos tu idea <ArrowRight size={17} /></a><a className="text-link" href="#proyectos">Ver proyectos <ArrowDown size={16} /></a></div><div className="hero-proof"><div className="avatar-stack"><i>P</i><i>L</i><i>+</i></div><span>Un equipo pequeño, <b>implicado de verdad.</b></span></div></div><div className="hero-art" aria-label="Vista conceptual de una página web en distintos dispositivos"><div className="art-orbit orbit-a" /><div className="art-orbit orbit-b" /><div className="floating-chip chip-top"><span className="chip-icon"><Sparkles size={17} /></span><span><b>Hecho para tu negocio</b><small>Diseño con intención</small></span></div><div className="browser-card"><div className="browser-bar"><span /><span /><span /><div className="browser-url">tumarca.es</div><div className="browser-pill" /></div><div className="browser-content"><div className="mini-nav"><div className="mini-logo"><b>tu</b>marca<span>.</span></div><div className="mini-menu"><i /><i /><i /></div><div className="mini-nav-cta" /></div><div className="mini-hero"><div className="mini-kicker">UN LUGAR PARA CRECER</div><div className="mini-title">Ideas que<br /><em>se hacen realidad.</em></div><div className="mini-lines"><i /><i /></div><div className="mini-button" /></div><div className="mini-orb" /><div className="mini-bottom"><span>01</span><i /><span>02</span><i /><span>03</span></div></div></div><div className="floating-chip chip-bottom"><span className="status-check"><Check size={15} /></span><span><b>Lista para crecer</b><small>Rápida · Responsive · Tuya</small></span></div><div className="art-spark spark-a">✳</div><div className="art-spark spark-b">✳</div></div></div><div className="container hero-foot"><span>DE LA PRIMERA IDEA AL SIGUIENTE PASO</span><a href="#servicios">Descubre cómo podemos ayudarte <ArrowDown size={14} /></a></div></section>;
}

function Services() {
  return <section className="section services-section" id="servicios"><div className="container"><div className="section-heading"><div><div className="eyebrow eyebrow-dark">LO QUE HACEMOS</div><h2>La web que necesitas,<br /><span>sin complicaciones.</span></h2></div><p>La tecnología es el medio. El objetivo es que tu negocio tenga una presencia digital útil, profesional y preparada para lo que viene.</p></div><div className="services-grid">{services.map(({ icon: Icon, number, title, text }) => <article className="service-card" key={number}><div className="service-top"><div className="service-icon"><Icon size={21} /></div><span>{number}</span></div><h3>{title}</h3><p>{text}</p><a href="#contacto" aria-label={`Consultar sobre ${title}`}><ArrowUpRight size={18} /></a></article>)}</div></div></section>;
}

function Results() {
  return <section className="results-band"><div className="container results-inner"><div className="results-intro"><span className="eyebrow">PEQUEÑO EQUIPO. TRABAJO CUIDADO.</span><h2>Tu proyecto no es<br />uno más.</h2></div><div className="stat"><b>100<span>%</span></b><p>Atención cercana<br />en cada proyecto</p></div><div className="stat"><b>2<span>+</span></b><p>Proyectos reales<br />en sectores distintos</p></div><div className="stat"><b>2</b><p>Socios implicados<br />en cada proyecto</p></div></div></section>;
}

function ProjectPreview({ kind, label }) {
  return <div className={`project-preview preview-${kind}`}><div className="preview-top"><span className="preview-brand"><i /> {kind === 'training' ? 'FORMA / COACH' : 'CASA & CAMPO'}</span><span className="preview-menu">•••</span></div>{kind === 'training' ? <><div className="preview-greeting">BUENOS DÍAS, ALEX</div><div className="preview-headline">Tu progreso,<br /><b>en movimiento.</b></div><div className="workout-card"><div><small>ENTRENAMIENTO DE HOY</small><strong>Fuerza · Día 03</strong><span>45 min&nbsp; · &nbsp;6 ejercicios</span></div><div className="play-btn">▶</div></div><div className="preview-metrics"><div><small>ESTA SEMANA</small><b>04 <i>sesiones</i></b></div><div className="chart"><i /><i /><i /><i /><i /><i /><i /></div></div></> : <><div className="catalog-banner"><span>ENCUENTRA TU PRÓXIMO LUGAR</span><b>Espacios para<br />una nueva historia.</b></div><div className="listing-row"><div className="listing-photo photo-a" /><div><small>CASA · 3 HABITACIONES</small><b>Un hogar con luz propia</b><span>Valencia · 148 m²</span></div><strong>325.000 €</strong></div><div className="listing-row"><div className="listing-photo photo-b" /><div><small>LOCAL · OPORTUNIDAD</small><b>Un espacio para crecer</b><span>Centro · 96 m²</span></div><strong>Consultar</strong></div></>}</div>;
}

function Projects() {
  return <section className="section projects-section" id="proyectos"><div className="container"><div className="section-heading project-heading"><div><div className="eyebrow eyebrow-dark">TRABAJO CON PROPÓSITO</div><h2>Ideas que ya están<br /><span>en marcha.</span></h2></div><p>Detrás de cada proyecto hay una necesidad concreta. Estas son algunas formas en las que la hemos convertido en una solución digital.</p></div><div className="projects-grid">{projects.map((project, i) => <article className="project-card" key={project.kind}><ProjectPreview {...project} /><div className="project-meta"><div><span>{project.tag}</span><h3>{project.title}</h3></div><a href="#contacto" aria-label={`Saber más sobre ${project.title}`}><ArrowUpRight size={20} /></a></div></article>)}</div><p className="placeholder-note">Las vistas son representaciones ilustrativas. Añade capturas reales de los proyectos para personalizar esta sección.</p></div></section>;
}

function Process() {
  const steps = [['01', 'Te escuchamos', 'Nos cuentas qué necesitas y qué quieres conseguir. Sin tecnicismos, con las preguntas adecuadas.'], ['02', 'Damos forma a la idea', 'Definimos juntos el enfoque, las prioridades y una propuesta clara para tu proyecto.'], ['03', 'Diseñamos y construimos', 'Creamos tu solución con revisiones frecuentes para que el resultado se sienta tuyo.'], ['04', 'Lanzamos y seguimos', 'Publicamos, comprobamos que todo funcione y estamos cerca para lo que venga después.']];
  return <section className="section process-section" id="proceso"><div className="container process-layout"><div className="process-intro"><div className="eyebrow eyebrow-dark">ASÍ TRABAJAMOS</div><h2>Claro desde<br /><span>el primer día.</span></h2><p>Un proceso sencillo, comunicación directa y decisiones compartidas. Sabes qué estamos haciendo y por qué.</p><a className="text-link dark-link" href="#contacto">Cuéntanos qué tienes en mente <ArrowRight size={17} /></a><div className="process-decoration"><span>PL</span><i /></div></div><div className="steps-list">{steps.map(([num, title, text]) => <article className="step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={18} /></article>)}</div></div></section>;
}

function CTA() {
  return <section className="cta-section" id="contacto"><div className="cta-shape shape-one" /><div className="cta-shape shape-two" /><div className="container cta-content"><div className="eyebrow"><span className="eyebrow-dot" /> ¿EMPEZAMOS?</div><h2>Tu siguiente paso<br /><span>puede empezar aquí.</span></h2><p>Cuéntanos qué necesita tu negocio. Escuchamos, proponemos y buscamos contigo la mejor forma de hacerlo realidad.</p><a className="button button-white" href="mailto:hola@pltech.es?subject=Hablemos%20de%20mi%20proyecto">Hablemos de tu proyecto <Send size={16} /></a><span className="cta-micro">Sin compromiso. Con una conversación honesta.</span></div></section>;
}

function About() {
  return <section className="section about-section" id="nosotros"><div className="container about-grid"><div className="about-visual"><div className="about-gradient" /><div className="about-monogram">PL<span>.</span></div><div className="about-caption"><span>PASTOR + LLOPIS</span><b>Dos perfiles.<br />Una misma idea.</b></div><div className="about-stamp"><span>TECNOLOGÍA<br />CON CERCANÍA</span><i>✳</i></div></div><div className="about-copy"><div className="eyebrow eyebrow-dark">SOMOS PLTECH</div><h2>La tecnología<br />también puede<br /><span>sentirse cercana.</span></h2><p>Somos dos socios con perfiles complementarios y una forma de trabajar muy sencilla: entender bien tu negocio antes de escribir una línea de código.</p><p>Unimos diseño, desarrollo y comunicación directa para crear soluciones web útiles para pequeñas empresas y negocios locales.</p><div className="about-values"><span><Check size={15} /> Trato directo</span><span><Check size={15} /> Soluciones a medida</span><span><Check size={15} /> Acompañamiento real</span></div><a className="text-link dark-link" href="#contacto">Conócenos hablando <ArrowRight size={17} /></a></div></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand-block"><Brand light /><p>Soluciones web para que tu negocio<br />tenga espacio para crecer.</p></div><div className="footer-col"><span>EXPLORA</span><a href="#servicios">Servicios</a><a href="#proyectos">Proyectos</a><a href="#proceso">Cómo trabajamos</a></div><div className="footer-col"><span>PLTECH</span><a href="#nosotros">Sobre nosotros</a><a href="mailto:hola@pltech.es">Contacto</a><a href="#inicio">Volver arriba ↑</a></div><div className="footer-contact"><span>¿TIENES UNA IDEA?</span><a href="mailto:hola@pltech.es">hola@pltech.es <ArrowUpRight size={15} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} PLTech. Hecho con intención.</span><span>Elche · Trabajamos contigo, estés donde estés.</span><a href="#inicio">Privacidad</a></div></div></footer>;
}

export default function App() {
  return <><Navbar /><main><Hero /><Services /><Results /><Projects /><Process /><CTA /><About /></main><Footer /></>;
}
