// Hero — three variants selectable via Tweaks

const HeroTerminal = () => {
  const [lines, setLines] = React.useState([]);
  const script = [
    { t: '$ mab --init project', c: 'var(--amber)' },
    { t: '> loading engineering modules...', c: 'var(--text-dim)' },
    { t: '> [OK] electrical_design', c: 'var(--text)' },
    { t: '> [OK] plc_programming', c: 'var(--text)' },
    { t: '> [OK] scada_integration', c: 'var(--text)' },
    { t: '> [OK] commissioning', c: 'var(--text)' },
    { t: '> status: ready_for_production', c: 'var(--amber)' },
  ];
  React.useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i >= script.length) { clearInterval(id); return; }
      setLines(prev => [...prev, script[i]]);
      i++;
    }, 380);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{
      position: 'relative', width: '100%', aspectRatio: '1 / 1', maxWidth: 520,
      margin: '0 auto',
    }}>
      {/* Radial glow behind */}
      <div style={{
        position: 'absolute', inset: '-20%',
        background: 'radial-gradient(circle, rgba(245,166,35,0.18), transparent 60%)',
        filter: 'blur(40px)', pointerEvents: 'none'
      }} />
      {/* Terminal */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, #0d1a2e 0%, #081221 100%)',
        border: '1px solid var(--line-strong)',
        borderRadius: 12, overflow: 'hidden',
        boxShadow: '0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)'
      }}>
        {/* Titlebar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 18px', borderBottom: '1px solid var(--line)' }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: '#ff5f57' }} />
          <div style={{ width: 10, height: 10, borderRadius: 999, background: '#febc2e' }} />
          <div style={{ width: 10, height: 10, borderRadius: 999, background: '#28c840' }} />
          <div style={{ flex: 1, textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-faint)' }}>
            mab@control-room — ~/projects
          </div>
        </div>
        {/* Body */}
        <div style={{ padding: 22, fontFamily: 'JetBrains Mono, monospace', fontSize: 13.5, lineHeight: 1.8 }}>
          {lines.map((l, i) => (
            <div key={i} style={{ color: l.c }}>{l.t}</div>
          ))}
          <div style={{ display: 'inline-block', width: 8, height: 16, background: 'var(--amber)', verticalAlign: 'middle', animation: 'blink 1s infinite' }} />
        </div>
        {/* Bottom meta */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 18px', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--text-faint)' }}>
          <span>v2.4.1 · chile</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: '#28c840', boxShadow: '0 0 6px #28c840' }} />
            online
          </span>
        </div>
      </div>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </div>
  );
};

const HeroCircuit = () => {
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', maxWidth: 520, margin: '0 auto' }}>
      <div style={{ position: 'absolute', inset: '-20%', background: 'radial-gradient(circle, rgba(245,166,35,0.22), transparent 60%)', filter: 'blur(40px)' }} />
      <svg viewBox="0 0 400 400" style={{ position: 'relative', width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="amberGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fbbf4e" />
            <stop offset="100%" stopColor="#c07a12" />
          </linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="2" /></filter>
        </defs>
        {/* Grid */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={i}>
            <line x1={i * 50} y1="0" x2={i * 50} y2="400" stroke="rgba(148,177,219,0.06)" />
            <line x1="0" y1={i * 50} x2="400" y2={i * 50} stroke="rgba(148,177,219,0.06)" />
          </g>
        ))}
        {/* Circuit paths */}
        <g stroke="url(#amberGrad)" strokeWidth="1.5" fill="none">
          <path d="M 40 200 L 140 200 L 140 120 L 240 120" />
          <path d="M 240 120 L 240 80 L 360 80" />
          <path d="M 40 200 L 120 200 L 120 280 L 200 280" />
          <path d="M 200 280 L 200 340 L 320 340" />
          <path d="M 240 120 L 240 200 L 300 200 L 300 240" />
        </g>
        {/* Nodes */}
        {[[40, 200], [140, 120], [240, 120], [360, 80], [200, 280], [320, 340], [300, 240], [120, 280]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="5" fill="#0a1628" stroke="var(--amber)" strokeWidth="1.5" />
            <circle cx={x} cy={y} r="2" fill="var(--amber)" filter="url(#glow)" />
          </g>
        ))}
        {/* Central hub */}
        <g>
          <circle cx="200" cy="200" r="48" fill="#0a1628" stroke="var(--amber)" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="60" fill="none" stroke="var(--line-strong)" strokeDasharray="2 4" />
          <text x="200" y="196" textAnchor="middle" fontFamily="Space Grotesk" fontSize="18" fontWeight="600" fill="var(--amber)">MAB</text>
          <text x="200" y="212" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="var(--text-faint)" letterSpacing="1">CONTROL HUB</text>
        </g>
        {/* Pulsing packets */}
        <circle r="3" fill="var(--amber)" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 40 200 L 140 200 L 140 120 L 240 120" />
        </circle>
        <circle r="3" fill="var(--amber)" filter="url(#glow)">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 200 280 L 200 340 L 320 340" />
        </circle>
        <circle r="3" fill="var(--amber)" filter="url(#glow)">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M 240 120 L 240 80 L 360 80" />
        </circle>
      </svg>
      {/* Corner markers */}
      {[[0, 0], [0, 100], [100, 0], [100, 100]].map(([x, y], i) => (
        <div key={i} style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, width: 14, height: 14, transform: 'translate(-50%,-50%)', border: '1px solid var(--amber)', borderRadius: 2 }} />
      ))}
    </div>
  );
};

const HeroData = () => {
  const bars = Array.from({ length: 28 });
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', maxWidth: 520, margin: '0 auto' }}>
      <div style={{ position: 'absolute', inset: '-20%', background: 'radial-gradient(circle, rgba(245,166,35,0.18), transparent 60%)', filter: 'blur(40px)' }} />
      <div style={{ position: 'relative', width: '100%', height: '100%', border: '1px solid var(--line-strong)', borderRadius: 12, overflow: 'hidden', background: 'linear-gradient(180deg, #0d1a2e 0%, #081221 100%)', padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.15em', color: 'var(--text-faint)', textTransform: 'uppercase' }}>
          <span>PLC-01 / Línea de producción</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: '#28c840', boxShadow: '0 0 6px #28c840' }} /> RUN
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 20 }}>
          {[
            ['Temperatura', '62.4°C', 'var(--amber)'],
            ['Presión', '4.8 bar', 'var(--text)'],
            ['Velocidad', '1240 rpm', 'var(--text)'],
            ['Eficiencia', '97.2%', 'var(--amber)'],
          ].map(([label, val, color]) => (
            <div key={label} style={{ border: '1px solid var(--line)', padding: 12, borderRadius: 6, background: 'rgba(0,0,0,0.25)' }}>
              <div style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-faint)', fontFamily: 'JetBrains Mono, monospace' }}>{label}</div>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: 22, fontWeight: 500, color, marginTop: 4 }}>{val}</div>
            </div>
          ))}
        </div>
        {/* Bar chart */}
        <div style={{ marginTop: 22 }}>
          <div style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-faint)', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>Flujo (últimas 24h)</div>
          <div style={{ display: 'flex', alignItems: 'end', gap: 3, height: 90 }}>
            {bars.map((_, i) => {
              const h = 30 + Math.abs(Math.sin(i * 0.7) * 60);
              return <div key={i} style={{ flex: 1, height: `${h}%`, background: i > 22 ? 'var(--amber)' : 'rgba(148,177,219,0.3)', borderRadius: 1, animation: `rise 1.2s ${i*0.03}s both` }} />
            })}
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 12, left: 20, right: 20, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--text-faint)', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--line)', paddingTop: 10 }}>
          <span>SCADA · tiempo real</span>
          <span>↑ 12.4%</span>
        </div>
      </div>
      <style>{`@keyframes rise { from { height: 0; opacity: 0; } }`}</style>
    </div>
  );
};

const Hero = () => {
  const [variant, setVariant] = React.useState(window.TWEAKS.heroVariant || 'terminal');
  React.useEffect(() => {
    const h = (e) => setVariant(e.detail);
    window.addEventListener('mab:heroVariant', h);
    return () => window.removeEventListener('mab:heroVariant', h);
  }, []);
  const Visual = variant === 'circuit' ? HeroCircuit : variant === 'data' ? HeroData : HeroTerminal;

  return (
    <section id="top" style={{ position: 'relative', minHeight: '100vh', paddingTop: 120, paddingBottom: 80, overflow: 'hidden' }}>
      {/* Background ambient glow */}
      <div style={{
        position: 'absolute', top: '10%', left: '60%', width: 800, height: 800,
        background: 'radial-gradient(circle, rgba(42,111,201,0.2), transparent 60%)',
        filter: 'blur(80px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', left: '-10%', width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(245,166,35,0.12), transparent 60%)',
        filter: 'blur(100px)', pointerEvents: 'none'
      }} />

      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <Chip dot>Integradores Roblan · Santiago, Chile</Chip>

            <h1 style={{ fontSize: 76, marginTop: 28, fontWeight: 400, letterSpacing: '-0.03em' }}>
              Ingeniería y<br />
              <span style={{ color: 'var(--amber)', fontWeight: 500, position: 'relative' }}>
                automatización
                <svg style={{ position: 'absolute', left: 0, bottom: -8, width: '100%', height: 10 }} viewBox="0 0 500 10" preserveAspectRatio="none">
                  <path d="M 0 5 Q 125 0 250 5 T 500 5" stroke="var(--amber)" strokeWidth="2" fill="none" opacity="0.4" />
                </svg>
              </span><br />
              <span style={{ color: 'var(--text-dim)', fontWeight: 300 }}>de la idea a la puesta en servicio.</span>
            </h1>

            <p style={{ fontSize: 17, color: 'var(--text-dim)', marginTop: 32, maxWidth: 520, lineHeight: 1.7 }}>
              Proyectos eléctricos e integración industrial para la industria alimentaria chilena.
              Diseñamos, construimos y ponemos en marcha — sin cabos sueltos.
            </p>

            <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
              <a href="#contacto" style={{
                padding: '15px 26px', background: 'var(--amber)', color: '#0a0a0a',
                fontWeight: 600, fontSize: 14, borderRadius: 6, letterSpacing: '0.02em',
                boxShadow: '0 0 0 1px var(--amber), 0 0 40px rgba(245,166,35,0.3)',
                transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: 10
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 0 1px var(--amber), 0 0 50px rgba(245,166,35,0.55)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 0 1px var(--amber), 0 0 40px rgba(245,166,35,0.3)'; }}
              >
                Solicitar cotización <span>→</span>
              </a>
              <a href="#servicios" style={{
                padding: '15px 26px', border: '1px solid var(--line-strong)',
                fontSize: 14, fontWeight: 500, borderRadius: 6, letterSpacing: '0.02em',
                transition: 'all 0.2s', color: 'var(--text)'
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text-dim)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line-strong)'; }}
              >
                Ver servicios
              </a>
            </div>

            {/* Bottom strip: capabilities */}
            <div style={{ marginTop: 72, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--line)', paddingTop: 28 }}>
              {[
                ['05', 'Servicios core'],
                ['100%', 'Proyecto llave en mano'],
                ['CL', 'Cobertura nacional'],
              ].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: 'Space Grotesk', fontSize: 28, fontWeight: 500, color: 'var(--amber)' }}>{v}</div>
                  <div style={{ fontSize: 11, letterSpacing: '0.12em', color: 'var(--text-faint)', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Visual key={variant} />
          </div>
        </div>
      </Container>
    </section>
  );
};

Object.assign(window, { Hero });
