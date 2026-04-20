// Sections: Services, Process, Roblan, Clients, About, Contact, Footer

const Services = () => {
  const ref = useReveal();
  const services = [
    {
      n: '01',
      title: 'Ingeniería eléctrica',
      desc: 'Ingeniería conceptual, básica y de detalle. Cálculos, diagramas unilineales, coordinación de protecciones.',
      tags: ['BT / MT', 'AutoCAD Electrical', 'Normativa SEC'],
    },
    {
      n: '02',
      title: 'Ingeniería en automatización',
      desc: 'Arquitectura de control, definición de I/O, redes industriales Profinet/Ethernet/IP, integración MES.',
      tags: ['SCADA', 'Profinet', 'Ethernet/IP'],
    },
    {
      n: '03',
      title: 'Programación PLC & HMI',
      desc: 'Desarrollo de lógica de control, alarmas, recetas e interfaces operativas para líneas de producción.',
      tags: ['Siemens', 'Allen-Bradley', 'Schneider'],
    },
    {
      n: '04',
      title: 'Montaje eléctrico',
      desc: 'Instalación en obra, canalizaciones, cableado de potencia y control, energización y pruebas en sitio.',
      tags: ['En sitio', 'Puesta en marcha', 'Comisionamiento'],
    },
    {
      n: '05',
      title: 'Diseño y armado de tableros',
      desc: 'Tableros eléctricos y de control armados bajo norma, con routing, certificación y documentación as-built.',
      tags: ['Fuerza', 'Control', 'Variadores'],
    },
  ];

  return (
    <section id="servicios" ref={ref} className="reveal" style={{ padding: '140px 0 80px' }}>
      <Container>
        <SectionLabel num="01">Servicios</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 60, marginBottom: 64 }}>
          <h2 style={{ fontSize: 54 }}>Un partner de ingeniería, no un proveedor más.</h2>
          <p style={{ fontSize: 17, color: 'var(--text-dim)', lineHeight: 1.7, alignSelf: 'end' }}>
            Cubrimos toda la cadena de un proyecto industrial: diseñamos, programamos, construimos,
            instalamos y dejamos la planta corriendo. Todo bajo un mismo equipo, sin handoffs perdidos.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: '1px solid var(--line)', borderRadius: 12, overflow: 'hidden', background: 'rgba(10,22,40,0.4)' }}>
          {services.map((s, i) => (
            <div key={s.n}
              style={{
                padding: 32, borderRight: (i % 3 !== 2) ? '1px solid var(--line)' : 'none',
                borderBottom: i < 3 ? '1px solid var(--line)' : 'none',
                position: 'relative', minHeight: 280, transition: 'background 0.3s',
                gridColumn: i === 4 ? 'span 2' : 'auto', // last service spans wider
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,166,35,0.03)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--amber)', letterSpacing: '0.2em', marginBottom: 36 }}>
                / {s.n}
              </div>
              <h3 style={{ fontSize: 24, marginBottom: 14, fontWeight: 500 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.65, marginBottom: 22 }}>{s.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {s.tags.map(t => (
                  <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, padding: '4px 8px', border: '1px solid var(--line)', borderRadius: 4, color: 'var(--text-dim)', letterSpacing: '0.05em' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const Process = () => {
  const ref = useReveal();
  const [active, setActive] = React.useState(0);
  const steps = [
    { n: '01', title: 'Ingeniería conceptual', desc: 'Levantamiento en planta, definición del alcance, arquitectura propuesta y estimación.', deliver: 'Propuesta técnica · Estimación inicial' },
    { n: '02', title: 'Ingeniería de detalle', desc: 'Diagramas unilineales, P&ID, listas de I/O, especificaciones de equipos y tableros.', deliver: 'Planos · BOM · Especificaciones' },
    { n: '03', title: 'Desarrollo y fabricación', desc: 'Programación PLC/HMI, SCADA y armado de tableros en nuestro taller bajo norma.', deliver: 'Software · Tableros · FAT' },
    { n: '04', title: 'Montaje en sitio', desc: 'Instalación, canalización, cableado de potencia y control, integración con sistemas existentes.', deliver: 'Instalación · Integración' },
    { n: '05', title: 'Puesta en servicio', desc: 'Energización, pruebas en frío y caliente, sintonización de lazos, capacitación al operador.', deliver: 'SAT · Documentación as-built · Training' },
  ];

  return (
    <section id="proceso" ref={ref} className="reveal" style={{ padding: '100px 0', background: 'linear-gradient(180deg, transparent 0%, rgba(10,22,40,0.5) 50%, transparent 100%)' }}>
      <Container>
        <SectionLabel num="02">Proceso</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginBottom: 64 }}>
          <h2 style={{ fontSize: 54 }}>De la idea a la línea corriendo.</h2>
          <p style={{ fontSize: 17, color: 'var(--text-dim)', lineHeight: 1.7, alignSelf: 'end' }}>
            Un flujo de cinco fases que hemos refinado en plantas de alimentos: cada entrega tiene un
            check-point claro, documentado y validado con el cliente antes de avanzar.
          </p>
        </div>

        {/* Step selector */}
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 48 }}>
          <div style={{ borderLeft: '1px solid var(--line)' }}>
            {steps.map((s, i) => (
              <button key={s.n} onClick={() => setActive(i)} style={{
                display: 'block', width: '100%', textAlign: 'left', padding: '20px 24px',
                position: 'relative', borderLeft: active === i ? '2px solid var(--amber)' : '2px solid transparent',
                marginLeft: -1, transition: 'all 0.25s',
                background: active === i ? 'rgba(245,166,35,0.04)' : 'transparent',
              }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: active === i ? 'var(--amber)' : 'var(--text-faint)', letterSpacing: '0.15em' }}>{s.n}</span>
                  <span style={{ fontFamily: 'Space Grotesk', fontSize: 18, fontWeight: 500, color: active === i ? 'var(--text)' : 'var(--text-dim)' }}>{s.title}</span>
                </div>
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', minHeight: 400 }}>
            <div key={active} style={{ animation: 'fadeIn 0.4s' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: 'var(--amber)', letterSpacing: '0.2em', marginBottom: 20 }}>
                FASE {steps[active].n}
              </div>
              <h3 style={{ fontSize: 44, marginBottom: 24, fontWeight: 400, lineHeight: 1.1 }}>{steps[active].title}</h3>
              <p style={{ fontSize: 18, color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>{steps[active].desc}</p>

              <div style={{ padding: 24, border: '1px solid var(--line-strong)', borderRadius: 8, background: 'rgba(0,0,0,0.25)', maxWidth: 460 }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.2em', color: 'var(--text-faint)', marginBottom: 10 }}>ENTREGABLES</div>
                <div style={{ fontSize: 15 }}>{steps[active].deliver}</div>
              </div>
            </div>
            <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }`}</style>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Roblan = () => {
  const ref = useReveal();
  const products = [
    { name: 'Luminarias industriales', spec: 'IP65 · Alta eficiencia', icon: '▦' },
    { name: 'Downlights LED', spec: 'Dimerizables · CRI 90+', icon: '◉' },
    { name: 'Proyectores LED', spec: 'Hasta 200W · IP66', icon: '◧' },
    { name: 'Tiras y lineales', spec: 'Arquitectónica · comercial', icon: '▬' },
  ];

  return (
    <section id="roblan" ref={ref} className="reveal" style={{ padding: '120px 0', position: 'relative' }}>
      <Container>
        <SectionLabel num="03">Partner Oficial</SectionLabel>

        <div style={{
          position: 'relative',
          padding: 60,
          borderRadius: 16,
          background: 'linear-gradient(135deg, #0d1a2e 0%, #0a1628 50%, #0d1a2e 100%)',
          border: '1px solid var(--line-strong)',
          overflow: 'hidden'
        }}>
          {/* Ambient light rays */}
          <div style={{
            position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500,
            background: 'radial-gradient(circle, rgba(245,166,35,0.18), transparent 60%)',
            filter: 'blur(60px)', pointerEvents: 'none'
          }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', position: 'relative' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{
                  padding: '8px 16px', background: 'var(--amber)', color: '#0a0a0a',
                  fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 20, letterSpacing: '0.05em',
                  borderRadius: 4, boxShadow: '0 0 30px rgba(245,166,35,0.35)'
                }}>ROBLAN</div>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-faint)', letterSpacing: '0.15em' }}>INTEGRADOR OFICIAL</span>
              </div>

              <h2 style={{ fontSize: 52, marginBottom: 24, fontWeight: 400 }}>
                Iluminación LED<br />
                <span style={{ color: 'var(--amber)' }}>profesional.</span>
              </h2>

              <p style={{ fontSize: 17, color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: 32 }}>
                Como integradores Roblan en Chile, diseñamos, suministramos e instalamos
                proyectos completos de iluminación industrial, comercial y arquitectónica
                con respaldo de marca y garantía.
              </p>

              <a href="#contacto" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '14px 24px', border: '1px solid var(--amber)',
                color: 'var(--amber)', fontSize: 14, fontWeight: 500,
                borderRadius: 6, transition: 'all 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--amber)'; e.currentTarget.style.color = '#0a0a0a'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--amber)'; }}
              >Consultar catálogo →</a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {products.map(p => (
                <div key={p.name} style={{
                  padding: 24, border: '1px solid var(--line)', borderRadius: 8,
                  background: 'rgba(0,0,0,0.3)', transition: 'all 0.3s',
                  position: 'relative', overflow: 'hidden'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--amber)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'none'; }}
                >
                  <div style={{ fontSize: 32, color: 'var(--amber)', marginBottom: 16, fontFamily: 'Space Grotesk', opacity: 0.7 }}>{p.icon}</div>
                  <div style={{ fontFamily: 'Space Grotesk', fontSize: 16, fontWeight: 500, marginBottom: 6 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-faint)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em' }}>{p.spec}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Clients = () => {
  const ref = useReveal();
  // Clients mentioned by user — rendered as wordmark tiles
  const clients = [
    { name: 'Nestlé', sub: 'Industria alimentaria' },
    { name: 'Soprole', sub: 'Lácteos' },
    { name: 'Vitapro', sub: 'Nutrición acuícola' },
    { name: 'Ventisqueros', sub: 'Salmonicultura' },
    { name: 'Multiexport', sub: 'Alimentos del mar' },
  ];

  return (
    <section id="clientes" ref={ref} className="reveal" style={{ padding: '100px 0' }}>
      <Container>
        <SectionLabel num="04">Confían en nosotros</SectionLabel>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginBottom: 64, alignItems: 'end' }}>
          <h2 style={{ fontSize: 48 }}>Ingeniería para las marcas que alimentan Chile.</h2>
          <p style={{ fontSize: 16, color: 'var(--text-dim)', lineHeight: 1.7 }}>
            Hemos desarrollado proyectos de automatización y eléctricos para algunas de las
            principales empresas del sector alimentario y acuícola del país.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', border: '1px solid var(--line)', borderRadius: 12, overflow: 'hidden' }}>
          {clients.map((c, i) => (
            <div key={c.name} style={{
              padding: '44px 24px', textAlign: 'center',
              borderRight: i < clients.length - 1 ? '1px solid var(--line)' : 'none',
              transition: 'all 0.3s', position: 'relative', cursor: 'default'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,166,35,0.04)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              <div style={{ fontFamily: 'Space Grotesk', fontSize: 26, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 8 }}>{c.name}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--text-faint)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{c.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24, textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-faint)', letterSpacing: '0.15em' }}>
          ALIMENTOS · LÁCTEOS · ACUICULTURA · RETAIL
        </div>
      </Container>
    </section>
  );
};

const About = () => {
  const ref = useReveal();
  return (
    <section id="nosotros" ref={ref} className="reveal" style={{ padding: '120px 0' }}>
      <Container>
        <SectionLabel num="05">Sobre Nosotros</SectionLabel>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80 }}>
          <div>
            <h2 style={{ fontSize: 60, marginBottom: 40, lineHeight: 1.05 }}>
              Equipo de ingenieros<br />
              con terreno real<br />
              en <span style={{ color: 'var(--amber)' }}>plantas de alimentos.</span>
            </h2>

            <div style={{ fontSize: 17, color: 'var(--text-dim)', lineHeight: 1.75, display: 'grid', gap: 20, maxWidth: 640 }}>
              <p>
                MAB Automatización SPA es una empresa chilena dedicada al diseño e implementación
                de proyectos eléctricos y de automatización industrial. Trabajamos con la industria
                alimentaria —Nestlé, Soprole, Vitapro, Ventisqueros, Multiexport— integrando
                hardware, software y puesta en marcha bajo un mismo responsable.
              </p>
              <p>
                Además, somos integradores oficiales de <strong style={{ color: 'var(--text)' }}>Roblan</strong> en
                iluminación LED profesional, cerrando el ciclo desde la ingeniería eléctrica hasta
                el último luminario encendido.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gap: 16, alignContent: 'start' }}>
            {[
              ['Llave en mano', 'Un solo responsable, de punta a punta.'],
              ['Documentación as-built', 'Todo entregable queda trazado y validado.'],
              ['Cumplimiento SEC', 'Normativa vigente, planos timbrados.'],
              ['Soporte post-venta', 'Acompañamiento en producción, no sólo en comisionamiento.'],
            ].map(([t, d]) => (
              <div key={t} style={{ padding: 22, border: '1px solid var(--line)', borderRadius: 8, background: 'rgba(10,22,40,0.4)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <div style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--amber)', boxShadow: '0 0 10px var(--amber)' }} />
                  <div style={{ fontSize: 15, fontWeight: 500, fontFamily: 'Space Grotesk' }}>{t}</div>
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.5 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

const Contact = () => {
  const ref = useReveal();
  const [form, setForm] = React.useState({ name: '', company: '', email: '', phone: '', service: '', msg: '' });
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.msg) return;
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1400);
  };

  const field = (k, label, type = 'text', span = 1) => (
    <div style={{ gridColumn: `span ${span}` }}>
      <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-faint)', marginBottom: 10 }}>{label}</label>
      <input type={type} value={form[k]} onChange={e => setForm({ ...form, [k]: e.target.value })}
        style={{
          width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid var(--line-strong)',
          padding: '10px 0', fontSize: 15, outline: 'none', color: 'var(--text)', transition: 'border-color 0.2s'
        }}
        onFocus={e => e.target.style.borderColor = 'var(--amber)'}
        onBlur={e => e.target.style.borderColor = 'var(--line-strong)'}
      />
    </div>
  );

  return (
    <section id="contacto" ref={ref} className="reveal" style={{ padding: '120px 0 80px', position: 'relative' }}>
      <Container>
        <SectionLabel num="06">Contacto</SectionLabel>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80 }}>
          {/* Left: contact block */}
          <div>
            <h2 style={{ fontSize: 60, marginBottom: 40, lineHeight: 1.05 }}>
              Conversemos<br />
              sobre tu <span style={{ color: 'var(--amber)' }}>proyecto.</span>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: 48, maxWidth: 440 }}>
              Cuéntanos el alcance, la industria y los plazos. Te respondemos con una
              propuesta técnica en días, no en semanas.
            </p>

            <div style={{ display: 'grid', gap: 24 }}>
              {[
                ['Email', 'contacto@mab-tek.pro', 'mailto:contacto@mab-tek.pro'],
                ['Teléfono', '+56 9 5968 1342', 'tel:+56959681342'],
                ['Dirección', 'Manquehue Sur 520, Las Condes, RM, Chile', null],
              ].map(([l, v, href]) => (
                <div key={l}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 6 }}>{l}</div>
                  {href
                    ? <a href={href} style={{ fontSize: 17, color: 'var(--text)', borderBottom: '1px dashed var(--line-strong)', paddingBottom: 2 }}>{v}</a>
                    : <div style={{ fontSize: 17, color: 'var(--text)' }}>{v}</div>
                  }
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, padding: 20, border: '1px solid var(--line)', borderRadius: 8, background: 'rgba(10,22,40,0.4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: '#28c840', boxShadow: '0 0 10px #28c840' }} />
                <span style={{ fontSize: 13, fontWeight: 500 }}>Disponibles para nuevos proyectos</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-dim)' }}>Agenda técnica abierta para Q2–Q3 2026.</div>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={submit} style={{
            padding: 40, border: '1px solid var(--line-strong)', borderRadius: 12,
            background: 'linear-gradient(180deg, rgba(10,22,40,0.6), rgba(7,13,25,0.6))',
            position: 'relative', overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', top: -40, right: -40, width: 200, height: 200,
              background: 'radial-gradient(circle, rgba(245,166,35,0.15), transparent 60%)',
              filter: 'blur(30px)', pointerEvents: 'none'
            }} />

            {status !== 'sent' ? (
              <div style={{ position: 'relative' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.2em', color: 'var(--amber)', marginBottom: 32 }}>
                  / COTIZAR PROYECTO
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
                  {field('name', 'Nombre', 'text')}
                  {field('company', 'Empresa', 'text')}
                  {field('email', 'Email', 'email')}
                  {field('phone', 'Teléfono', 'tel')}

                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-faint)', marginBottom: 14 }}>Servicio de interés</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['Ingeniería eléctrica', 'Automatización', 'PLC / HMI', 'Tableros', 'Iluminación Roblan', 'Otro'].map(s => (
                        <button type="button" key={s} onClick={() => setForm({ ...form, service: s })} style={{
                          padding: '8px 14px', fontSize: 12, border: '1px solid ' + (form.service === s ? 'var(--amber)' : 'var(--line-strong)'),
                          color: form.service === s ? 'var(--amber)' : 'var(--text-dim)',
                          borderRadius: 999, transition: 'all 0.2s',
                          background: form.service === s ? 'rgba(245,166,35,0.08)' : 'transparent'
                        }}>{s}</button>
                      ))}
                    </div>
                  </div>

                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-faint)', marginBottom: 10 }}>Cuéntanos sobre el proyecto</label>
                    <textarea rows={4} value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })}
                      style={{
                        width: '100%', background: 'transparent', border: '1px solid var(--line-strong)',
                        padding: 14, fontSize: 14, outline: 'none', color: 'var(--text)', borderRadius: 6,
                        resize: 'vertical', transition: 'border-color 0.2s'
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--amber)'}
                      onBlur={e => e.target.style.borderColor = 'var(--line-strong)'}
                    />
                  </div>
                </div>

                <button type="submit" disabled={status === 'sending'} style={{
                  marginTop: 32, padding: '15px 26px', background: 'var(--amber)', color: '#0a0a0a',
                  fontWeight: 600, fontSize: 14, borderRadius: 6, letterSpacing: '0.02em',
                  boxShadow: '0 0 30px rgba(245,166,35,0.3)', transition: 'all 0.2s',
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  opacity: status === 'sending' ? 0.6 : 1
                }}>
                  {status === 'sending' ? 'Enviando…' : 'Enviar solicitud'} <span>→</span>
                </button>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 64, height: 64, margin: '0 auto 24px', borderRadius: 999, border: '2px solid var(--amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--amber)', fontSize: 28, boxShadow: '0 0 30px rgba(245,166,35,0.3)' }}>✓</div>
                <h3 style={{ fontSize: 28, marginBottom: 12 }}>Solicitud enviada</h3>
                <p style={{ color: 'var(--text-dim)', fontSize: 15 }}>Te contactamos en las próximas 24 horas hábiles.</p>
              </div>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
};

const Footer = () => (
  <footer style={{ padding: '60px 0 40px', borderTop: '1px solid var(--line)', marginTop: 60 }}>
    <Container>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 60, marginBottom: 48 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <img src="assets/mab-logo.png" alt="MAB" style={{ height: 48 }} />
            <div>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 17 }}>MAB Automatización SPA</div>
              <div style={{ fontSize: 11, letterSpacing: '0.15em', color: 'var(--text-faint)', textTransform: 'uppercase', marginTop: 3 }}>Ingeniería · Automatización · Iluminación</div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: 'var(--text-dim)', maxWidth: 340, lineHeight: 1.6 }}>
            Desde la ingeniería conceptual hasta la puesta en servicio. Un partner técnico para la industria chilena.
          </p>
        </div>

        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.2em', color: 'var(--text-faint)', textTransform: 'uppercase', marginBottom: 16 }}>Servicios</div>
          <div style={{ display: 'grid', gap: 10, fontSize: 13, color: 'var(--text-dim)' }}>
            <span>Ingeniería eléctrica</span>
            <span>Automatización</span>
            <span>PLC & HMI</span>
            <span>Tableros</span>
            <span>Iluminación Roblan</span>
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.2em', color: 'var(--text-faint)', textTransform: 'uppercase', marginBottom: 16 }}>Empresa</div>
          <div style={{ display: 'grid', gap: 10, fontSize: 13 }}>
            <a href="#nosotros" style={{ color: 'var(--text-dim)' }}>Nosotros</a>
            <a href="#proceso" style={{ color: 'var(--text-dim)' }}>Proceso</a>
            <a href="#clientes" style={{ color: 'var(--text-dim)' }}>Clientes</a>
            <a href="#contacto" style={{ color: 'var(--text-dim)' }}>Contacto</a>
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.2em', color: 'var(--text-faint)', textTransform: 'uppercase', marginBottom: 16 }}>Contacto</div>
          <div style={{ display: 'grid', gap: 10, fontSize: 13, color: 'var(--text-dim)' }}>
            <a href="mailto:contacto@mab-tek.pro" style={{ color: 'var(--text-dim)' }}>contacto@mab-tek.pro</a>
            <a href="tel:+56959681342" style={{ color: 'var(--text-dim)' }}>+56 9 5968 1342</a>
            <span>Manquehue Sur 520</span>
            <span>Las Condes, RM</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid var(--line)', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-faint)', letterSpacing: '0.1em' }}>
        <span>© 2026 MAB AUTOMATIZACIÓN SPA · CHILE</span>
        <span>DISEÑADO EN SANTIAGO</span>
      </div>
    </Container>
  </footer>
);

Object.assign(window, { Services, Process, Roblan, Clients, About, Contact, Footer });
