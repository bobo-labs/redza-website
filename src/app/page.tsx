import Image from 'next/image';
import BrandStrip from './BrandStrip';
import ChileRegionsMap from './ChileRegionsMap';
import HeroVideo from './HeroVideo';
import {
  ArrowUpRight,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Truck,
} from 'lucide-react';

const whatsapp = '56991499999';
const whatsappLink = `https://wa.me/${whatsapp}?text=${encodeURIComponent('Hola Redza, necesito cotizar un servicio de transporte.')}`;

const services = [
  {
    number: '01',
    title: 'Distribución nacional',
    text: 'Movemos tu carga entre Santiago y regiones con coordinación, trazabilidad y ventanas de entrega claras.',
    icon: '/images/redza branding/redesign/redza route icon.svg',
  },
  {
    number: '02',
    title: 'Última milla B2B',
    text: 'Reparto para retail, supermercados y operaciones corporativas que necesitan puntualidad en cada local.',
    icon: '/images/redza branding/redesign/redza package icon.svg',
  },
  {
    number: '03',
    title: 'Carga con rampa',
    text: 'Camiones con rampas hidráulicas autónomas para entregar donde no hay andén de descarga.',
    icon: '/images/redza branding/redesign/redza ramp icon.svg',
  },
];

const stats = [
  ['01', 'Coordinación directa'],
  ['02', 'Flota preparada'],
  ['03', 'Cobertura nacional'],
];

const clients = [
  {
    number: '01',
    name: 'Alvi Mayorista',
    src: '/images/marcas que confian/alvi.webp',
    alt: 'Logo Club Alvi Mayorista',
    service: 'Distribución y abastecimiento',
  },
  {
    number: '02',
    name: 'Unimarc',
    src: '/images/marcas que confian/unimarc.webp',
    alt: 'Logo Unimarc',
    service: 'Transporte para retail',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="shell nav-wrap">
          <a href="#inicio" className="brand" aria-label="Redza, volver al inicio">
            <Image src="/images/redza branding/redesign/redza brand lockup.svg" alt="Redza Transporte y Logística" width={2510} height={430} className="brand-logo brand-logo-new" />
            <Image src="/images/redza branding/lettering_white_red.webp" alt="Redza Transporte y Logística" width={190} height={34} className="brand-logo" />
          </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#servicios">Servicios</a>
            <a href="#metodo">Cómo trabajamos</a>
            <a href="#clientes">Clientes</a>
            <a href="#cobertura">Cobertura</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">Cotizar ahora <ArrowUpRight size={16} /></a>
          <details className="mobile-menu">
            <summary aria-label="Abrir menú"><span /><span /></summary>
            <nav aria-label="Navegación móvil">
              <a href="#servicios">Servicios</a>
              <a href="#metodo">Cómo trabajamos</a>
              <a href="#clientes">Clientes</a>
              <a href="#cobertura">Cobertura</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        <Image src="/images/redza branding/redesign/redza route system.svg" alt="" width={1400} height={360} className="hero-route-system" aria-hidden="true" />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span>01</span> Logística que llega</p>
            <h1>Que tu carga<br /><em>no se detenga.</em></h1>
            <p className="hero-lede">Transporte confiable para empresas que necesitan cumplir. Conectamos tu operación con todo Chile, desde el retiro hasta la entrega final.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Solicitar cotización</a>
              <a className="text-link" href="#servicios">Explorar servicios <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-trust"><ShieldCheck size={17} /><span>Operación coordinada · Atención directa · Respuesta ágil</span></div>
          </div>
          <div className="hero-visual">
            <div className="visual-label">REDZA / 24—7</div>
            <HeroVideo />
            <div className="visual-note"><span>01</span><p>Del origen al destino,<br />con control en cada tramo.</p></div>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true"><span>Desliza para conocer Redza</span><ChevronDown size={16} /></div>
      </section>

      <BrandStrip />

      <section className="intro-section section-pad">
        <div className="shell intro-grid">
          <div><p className="eyebrow"><span>02</span> Una operación que responde</p></div>
          <div className="intro-content"><h2>La logística no es solo mover carga. <em>Es mover tu negocio.</em></h2><p>En Redza entendemos que una entrega a tiempo protege ventas, equipos y relaciones. Por eso combinamos flota, coordinación y seguimiento para que cada traslado tenga un responsable de principio a fin.</p><a className="text-link dark-link" href="#contacto">Hablemos de tu operación <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section className="service-section section-pad" id="servicios">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow"><span>03</span> Lo que hacemos</p><h2>Una solución para<br /><em>cada recorrido.</em></h2></div><p>Servicios de transporte pensados para operaciones reales: entregas urbanas, distribución regional y carga de mayor volumen.</p></div>
          <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="card-top"><span>{service.number}</span><Image src={service.icon} alt="" width={52} height={52} className="service-icon" /></div><h3>{service.title}</h3><p>{service.text}</p><a href={whatsappLink} target="_blank" rel="noreferrer" aria-label={`Cotizar ${service.title}`}>Cotizar servicio <ArrowUpRight size={16} /></a></article>)}</div>
        </div>
      </section>

      <section className="proof-section section-pad" id="metodo">
        <div className="shell proof-grid">
          <div className="proof-image"><span className="proof-image-label">FLOTA / OPERACIÓN</span><Image src="/images/redza_fotos/optimized/redza-flota-camiones-operacion.webp" alt="Flota de camiones Redza frente a un centro de distribución" fill sizes="(max-width: 900px) 100vw, 42vw" className="proof-photo-main" /><span className="proof-photo-grade" aria-hidden="true" /><span className="proof-photo-overlay">OPERACIÓN REAL<br /><strong>LISTOS PARA SALIR</strong></span><span className="proof-stamp">RZ / 2026</span></div>
          <div className="proof-copy"><p className="eyebrow"><span>04</span> Nuestra forma de trabajar</p><h2>Simple para ti.<br /><em>Preciso para tu carga.</em></h2><div className="steps"><div><b>01</b><div><h3>Cuéntanos qué necesitas</h3><p>Origen, destino, tipo de carga y fecha. Te respondemos con claridad.</p></div></div><div><b>02</b><div><h3>Planificamos el recorrido</h3><p>Asignamos el vehículo y coordinamos la ventana de retiro y entrega.</p></div></div><div><b>03</b><div><h3>Seguimos hasta entregar</h3><p>Tu operación avanza con comunicación directa y seguimiento constante.</p></div></div></div></div>
        </div>
      </section>

      <section className="field-section section-pad" aria-labelledby="field-title">
        <div className="shell">
          <div className="field-heading"><div><p className="eyebrow"><span>05</span> Flota / trabajo real</p><h2 id="field-title">Cada entrega<br /><em>empieza en terreno.</em></h2></div><p>Fotos reales de nuestra operación: carga preparada, vehículos en patio y rutas que conectan Chile de norte a sur.</p></div>
          <div className="field-gallery">
            <figure className="field-card field-card-main"><Image src="/images/redza_fotos/optimized/redza-manipulacion-carga-traspaleta.webp" alt="Carga palletizada preparada dentro de un camión Redza" fill sizes="(max-width: 900px) 100vw, 49vw" /><figcaption><span>OPERACIÓN / 01</span><strong>Carga asegurada antes de salir.</strong></figcaption></figure>
            <figure className="field-card field-card-route"><Image src="/images/redza_fotos/optimized/redza-ruta-la-mano-del-desierto.webp" alt="Camión Redza en ruta junto a La Mano del Desierto, Antofagasta" fill sizes="(max-width: 900px) 100vw, 25vw" /><figcaption><span>RUTA / NORTE</span><strong>Una cobertura que cruza el desierto.</strong></figcaption></figure>
            <div className="field-note"><span>RZ / 05</span><p>Una flota visible, cuidada y preparada para que tu operación avance.</p><a className="text-link" href={whatsappLink} target="_blank" rel="noreferrer">Coordinar una ruta <ArrowUpRight size={16} /></a></div>
            <figure className="field-card field-card-yard"><Image src="/images/redza_fotos/optimized/redza-flota-vehiculos-distribucion.webp" alt="Vehículos de distribución Redza estacionados en patio operativo" fill sizes="(max-width: 900px) 100vw, 33vw" /><figcaption><span>FLOTA / 02</span><strong>Vehículos para cada recorrido.</strong></figcaption></figure>
            <figure className="field-card field-card-patio"><Image src="/images/redza_fotos/optimized/redza-flota-camiones-patio.webp" alt="Camiones Redza preparados en un patio logístico" fill sizes="(max-width: 900px) 100vw, 33vw" /><figcaption><span>PATIO / 03</span><strong>Coordinación desde el origen.</strong></figcaption></figure>
            <aside className="field-operations-board" aria-label="Flujo operativo Redza">
              <div className="field-board-top"><span>RUTA ACTIVA / REDZA</span><span className="field-board-live"><i /> OPERACIÓN 24—7</span></div>
              <div className="field-board-content">
                <div className="field-board-copy"><span>CONTROL DE PUNTA A PUNTA</span><p>Un recorrido.<br /><strong>Tres puntos de control.</strong></p></div>
                <div className="field-route-flow">
                  <span className="field-route-vehicle" aria-hidden="true"><Truck size={15} strokeWidth={2} /></span>
                  <ol className="field-route-stations">
                    <li><b>01</b><strong>Retiro</strong><small>Origen confirmado</small></li>
                    <li><b>02</b><strong>Coordinación</strong><small>Ruta monitoreada</small></li>
                    <li><b>03</b><strong>Entrega</strong><small>Destino cumplido</small></li>
                  </ol>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="coverage-section section-pad" id="cobertura">
        <div className="shell coverage-grid"><div><p className="eyebrow"><span>06</span> Llegamos más lejos</p><h2>Desde Santiago<br />a todo <em>Chile.</em></h2><p className="coverage-copy">Construimos rutas para que tus productos lleguen a donde tienen que estar. Cobertura urbana, interurbana y nacional según la necesidad de tu operación.</p><a className="button button-light" href={whatsappLink} target="_blank" rel="noreferrer">Planificar una ruta <ArrowUpRight size={17} /></a></div><div className="map-card regions-map-card"><ChileRegionsMap /><div className="map-lines" aria-hidden="true" /><div className="map-point point-santiago"><span /><label>Santiago</label></div><div className="map-point point-north"><span /><label>Regiones</label></div><div className="map-point point-south"><span /><label>Sur de Chile</label></div><div className="map-route" aria-hidden="true" /><div className="map-footer"><span>COBERTURA</span><strong>URBANA · REGIONAL · NACIONAL</strong></div></div></div>
      </section>

      <section className="clients-section section-pad" id="clientes">
        <div className="shell">
          <div className="clients-heading"><div><p className="eyebrow"><span>07</span> Confianza que se mueve</p><h2>Empresas que<br /><em>confían en Redza.</em></h2></div><p>Nos eligen porque cada entrega necesita más que un camión: necesita coordinación, cuidado y una respuesta que no se detenga.</p></div>
          <div className="clients-grid">
            {clients.map((client) => <article className="client-card" key={client.name}><div className="client-card-top"><span>CLIENTE / {client.number}</span><ArrowUpRight size={16} /></div><div className="client-logo-wrap"><Image src={client.src} alt={client.alt} width={240} height={150} sizes="(max-width: 900px) 100vw, 30vw" className="client-logo" /></div><div className="client-card-bottom"><strong>{client.name}</strong><span>{client.service}</span></div></article>)}
            <div className="client-note"><ShieldCheck size={23} /><div><strong>Tu operación, en buenas manos.</strong><p>Sumamos experiencia y seguimiento para que tu marca llegue bien representada a cada destino.</p><a className="text-link" href={whatsappLink} target="_blank" rel="noreferrer">Conversemos sobre tu operación <ArrowUpRight size={16} /></a></div></div>
          </div>
        </div>
      </section>

      <section className="numbers-section section-pad"><div className="shell numbers-grid"><div><p className="eyebrow"><span>08</span> Por qué Redza</p><h2>El valor está en<br /><em>cómo lo hacemos.</em></h2></div><div className="numbers-list">{stats.map(([number, text]) => <div key={number}><strong>{number}</strong><span>{text}</span></div>)}</div></div></section>

      <section className="contact-section" id="contacto"><div className="shell contact-grid"><div><p className="eyebrow"><span>09</span> Empecemos</p><h2>Tu próxima entrega<br /><em>parte aquí.</em></h2><p>Cuéntanos sobre tu operación y preparemos el recorrido correcto para tu carga.</p></div><div className="contact-card"><div><span className="contact-kicker">Respuesta directa</span><h3>Hablemos por WhatsApp</h3><p>Disponible para cotizaciones y coordinación de servicios.</p></div><a className="contact-action" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={20} /> Escribir a Redza <ArrowUpRight size={17} /></a><div className="contact-details"><a href="tel:+56991499999"><PhoneCall size={16} /> +56 9 9149 9999</a><span><Clock3 size={16} /> Lunes a domingo · servicio continuo</span><a href="mailto:contacto@redza.cl"><Mail size={16} /> contacto@redza.cl</a></div></div></div></section>

      <footer className="site-footer"><div className="shell footer-top"><a href="#inicio" className="brand footer-brand" aria-label="Redza, volver al inicio"><span className="footer-brand-stage" aria-hidden="true"><Image src="/images/redza branding/redza white lettering svg.svg" alt="" width={2182} height={350} className="footer-lettering" /><Image src="/images/redza branding/white truck.svg" alt="" width={2183} height={488} className="footer-truck" /><Image src="/images/redza branding/redza white svg.svg" alt="" width={2183} height={880} className="footer-full-logo" /></span></a><div className="footer-links"><a href="#servicios">Servicios</a><a href="#metodo">Cómo trabajamos</a><a href="#clientes">Clientes</a><a href="#cobertura">Cobertura</a><a href="#contacto">Contacto</a></div><div className="footer-location"><MapPin size={16} /> Santiago, Chile</div></div><div className="shell footer-bottom"><span>© 2026 Redza Transporte y Logística</span><span>Movemos lo que importa · Santiago, Chile.</span></div></footer>
    </main>
  );
}


