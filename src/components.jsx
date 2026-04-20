// Reusable bits

const Chip = ({ children, dot }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '6px 12px', border: '1px solid var(--line-strong)',
    borderRadius: 999, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'var(--text-dim)', fontFamily: 'JetBrains Mono, monospace',
    background: 'rgba(10,22,40,0.6)', backdropFilter: 'blur(8px)'
  }}>
    {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--amber)', boxShadow: '0 0 8px var(--amber)' }} />}
    {children}
  </span>
);

const SectionLabel = ({ num, children }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--amber)', letterSpacing: '0.2em' }}>
      [ {num} ]
    </span>
    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.2em', color: 'var(--text-faint)', textTransform: 'uppercase' }}>
      {children}
    </span>
    <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, var(--line-strong), transparent)' }} />
  </div>
);

const Container = ({ children, style = {} }) => (
  <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', ...style }}>{children}</div>
);

// Reveal-on-scroll hook
function useReveal() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add('is-in');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// Animated line used as visual motif
const CircuitLine = ({ style }) => (
  <svg style={style} viewBox="0 0 400 2" preserveAspectRatio="none">
    <line x1="0" y1="1" x2="400" y2="1" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="2 6" />
  </svg>
);

const NavBar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const items = [
    ['Servicios', '#servicios'],
    ['Proceso', '#proceso'],
    ['Roblan', '#roblan'],
    ['Clientes', '#clientes'],
    ['Nosotros', '#nosotros'],
  ];
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '14px 0' : '22px 0',
      background: scrolled ? 'rgba(7,13,25,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'all 0.3s'
    }}>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="assets/mab-logo.png" alt="MAB" style={{ height: 44, width: 'auto' }} />
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 15, letterSpacing: '0.05em' }}>MAB</div>
            <div style={{ fontSize: 9, letterSpacing: '0.2em', color: 'var(--text-faint)', textTransform: 'uppercase', marginTop: 2 }}>Automatización SPA</div>
          </div>
        </a>
        <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {items.map(([label, href]) => (
            <a key={href} href={href} style={{
              padding: '10px 16px', fontSize: 13, color: 'var(--text-dim)', letterSpacing: '0.02em',
              transition: 'color 0.2s', borderRadius: 6
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
            >{label}</a>
          ))}
          <a href="#contacto" style={{
            marginLeft: 12, padding: '11px 20px', fontSize: 13,
            background: 'var(--amber)', color: '#0a0a0a', fontWeight: 600,
            borderRadius: 6, letterSpacing: '0.02em',
            boxShadow: '0 0 0 1px var(--amber), 0 0 24px rgba(245,166,35,0.25)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 0 1px var(--amber), 0 0 32px rgba(245,166,35,0.55)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 0 1px var(--amber), 0 0 24px rgba(245,166,35,0.25)'; e.currentTarget.style.transform = 'none'; }}
          >Cotizar proyecto →</a>
        </nav>
      </Container>
    </header>
  );
};

Object.assign(window, { Chip, SectionLabel, Container, useReveal, CircuitLine, NavBar });
