import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const team = [
  { name: 'Fadly Febro Surya Pratama', role: 'Backend Developer', image: '/assets/fadly.jpeg' },
  { name: 'Farras Fadhillah', role: 'Frontend Developer', image: '/assets/farras.jpeg' },
  { name: 'Nadine Maulia Fauzi', role: 'UI/UX & Frontend Developer', image: '/assets/nadine.jpeg' },
];

const projects = [
  {
    title: 'SILAB-NTDK',
    category: 'Website',
    type: 'Web Development',
    image: '/assets/portfolio4.jpg',
    action: 'project',
    link: 'silabntdk.com',
  },
  {
    title: 'SILAB-NTDK',
    category: 'UI/UX Design',
    type: 'Figma Design',
    image: '/assets/portfolio4.jpg',
    action: 'design',
    link: 'https://www.figma.com/design/zl8cGoeVXkfsg33JOr0NWo/Ascii-Code-SILAB-NTDK?node-id=0-1&t=x6UTA8029LedBtPZ-1'
  },
  
  {
    title: 'Assessment Test Bea Cukai',
    category: 'UI/UX Design',
    type: 'Figma Design',
    image: '/assets/Bpass.jpeg',
    action: 'design',
    link: 'https://www.figma.com/design/Nzn6D5C01O6Tv7C9Ec58V9/psikologi-beacukai?node-id=0-1&p=f&t=iOoSKui7O3ustVko-0'
  },
  {
    title: 'Mind Metrics',
    category: 'UI/UX Design',
    type: 'Figma Design',
    image: '/assets/mind-metrics.jpg',
    action: 'design',
    link: 'https://www.figma.com/design/pjdqHV0lIoGIit88E6rpQx/MIND-METRCIS?node-id=0-1&t=s4zazOVffosoZDSG-1'
  },
  {
    title: 'SI-ATK',
    category: 'Website',
    type: 'Web Development',
    image: '/assets/si-atk.jpg',
    action: 'project',
      link: null,
      description: 'Sistem inventaris alat tulis kantor untuk membantu pengelolaan stok dan kebutuhan ATK secara lebih teratur di lingkungan Mahkamah Agung.',
      highlights: ['Pengelolaan inventaris ATK', 'Mendukung pencatatan kebutuhan dan stok barang', 'Dirancang untuk akses internal']
    },
    {
      title: 'FruitScan AI',
      category: 'Website',
      type: 'Web Development',
      image: '/assets/fruitscan.jpg',
      action: 'project',
      link: null,
      description: 'Aplikasi berbasis kecerdasan buatan untuk mengenali dan mengklasifikasikan jenis buah. Pengguna dapat memperoleh informasi buah melalui proses pemindaian yang praktis.',
      highlights: ['Klasifikasi berbagai jenis buah berbasis AI', 'Menampilkan informasi buah hasil identifikasi', 'Antarmuka untuk memulai pemindaian']
    },
    {
      title: 'Masjid Baiturrahman',
      category: 'Website',
      type: 'Web Development',
      image: '/assets/masjid.jpg',
      action: 'project',
      link: null,
      description: 'Website informasi Masjid Baiturrahman yang memudahkan jamaah menemukan jadwal salat, kegiatan, dan informasi masjid dalam satu tempat.',
      highlights: ['Informasi jadwal salat', 'Informasi kegiatan dan media masjid', 'Kontak serta informasi infaq']
    },
    {
      title: 'FluSeq AI',
    category: 'Website',
    type: 'Web Development',
    image: '/assets/fluseq.jpg',
    action: 'project',
    link: null,
    description: 'Platform analisis sekuens influenza untuk membantu mengidentifikasi pola dan membedakan subtipe H1N1 dan H3N2 melalui analisis protein.',
    highlights: ['Analisis sekuens influenza', 'Fokus pada subtipe H1N1 dan H3N2', 'Menyajikan hasil prediksi dan informasi dataset']
    },
  {
    title: 'Mind Metrics',
    category: 'Website',
    type: 'Web Development',
    image: '/assets/mind-metrics.jpg',
    action: 'project',
    link: null,
    description: 'Platform asesmen kepribadian yang membantu pengguna mengenali kecenderungan dirinya melalui pendekatan DISC.',
    highlights: ['Asesmen kepribadian DISC', 'Mengenalkan empat dimensi: Dominance, Influence, Steadiness, dan Conscientiousness', 'Menyajikan gambaran hasil untuk membantu pengguna memahami dirinya']
  },
  ];


function App() {
  const [active, setActive] = useState('Semua Project');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const filters = ['Semua Project', 'Website', 'UI/UX Design'];
  const filteredProjects = useMemo(() => active === 'Semua Project' ? projects : projects.filter(p => p.category === active), [active]);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [selectedProject]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <header className="navbar">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="VICTORA home">
          VICTORA
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka menu">☰</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <button onClick={() => scrollTo('about')}>Tentang</button>
          <button onClick={() => scrollTo('team')}>Tim</button>
          <button onClick={() => scrollTo('projects')}>Project</button>
          <button onClick={() => scrollTo('contact')}>Kontak</button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid" />
          <div className="hero-content">
            <span className="eyebrow">Digital Creative Agency</span>
            <h1>Crafting Digital<br /><span>Excellence</span></h1>
            <p>Kami mengubah ide kompleks menjadi solusi digital yang elegan, fungsional, dan memberikan dampak nyata bagi bisnis Anda.</p>
            <div className="hero-actions">
              <button className="primary" onClick={() => scrollTo('projects')}>Lihat Project</button>
              <button className="secondary" onClick={() => scrollTo('contact')}>Konsultasi Gratis</button>
            </div>
          </div>
          <div className="hero-wave" />
        </section>

        <section id="about" className="about-section section">
          <div className="about-inner">
            <div className="about-badge-col">
              <div className="about-univ-badge">🎓 Universitas YARSI</div>
              <div className="about-stats">
                <div className="stat-item"><strong>3</strong><span>Anggota Tim</span></div>
                <div className="stat-item"><strong>{projects.length}</strong><span>Proyek Aktif</span></div>
                <div className="stat-item"><strong>2023</strong><span>Angkatan</span></div>
              </div>
            </div>
            <div className="about-copy">
              <span className="section-kicker">WHO WE ARE</span>
              <h2>Mahasiswa <span className="about-highlight">Universitas YARSI</span><br />yang Membangun Nyata</h2>
              <p>Kami adalah tim mahasiswa tingkat akhir Program Studi Teknik Informatika Universitas YARSI yang berkolaborasi dalam mengerjakan Tugas Akhir. Kami percaya bahwa keberhasilan sebuah proyek tidak hanya ditentukan oleh kemampuan teknis, tetapi juga oleh komunikasi yang efektif, kerja sama yang solid, dan komitmen setiap anggota untuk mencapai tujuan bersama.</p>
              <p>VICTORA hadir sebagai representasi semangat kami dalam membangun solusi digital yang inovatif, profesional, dan bermanfaat. Melalui pertukaran ide, keterbukaan dalam berkomunikasi, serta kolaborasi yang saling mendukung, kami berupaya menggabungkan kemampuan dan perspektif setiap anggota menjadi sebuah karya yang bermakna. Bagi kami, teknologi bukan sekadar tentang membangun sistem, tetapi juga tentang bagaimana sebuah tim bekerja bersama untuk menciptakan solusi yang menjawab kebutuhan nyata.</p>
              <div className="stack-grid">
                <div className="stack-card">
                  <div className="stack-icon" style={{ background: 'linear-gradient(135deg,#ff2d20,#c0392b' }}>🔴</div>
                  <div className="stack-info">
                    <h4>Laravel</h4>
                    <p>Backend yang kokoh, scalable, dan aman untuk menangani logika bisnis kompleks.</p>
                  </div>
                </div>
                <div className="stack-card">
                  <div className="stack-icon" style={{ background: 'linear-gradient(135deg,#61dafb,#0891b2' }}>⚛</div>
                  <div className="stack-info">
                    <h4>React</h4>
                    <p>Frontend yang cepat dan interaktif dengan pengalaman pengguna yang mulus.</p>
                  </div>
                </div>
                <div className="stack-card">
                  <div className="stack-icon" style={{ background: 'linear-gradient(135deg,#a259ff,#6d28d9' }}>✦</div>
                  <div className="stack-info">
                    <h4>Figma</h4>
                    <p>Desain UI/UX yang intuitif, terstruktur, dan siap untuk diimplementasikan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="team-section section">
          <div className="section-heading"><span className="section-kicker">OUR EXPERTS</span><h2>Di Balik Layar</h2><i /></div>
          <div className="team-grid">
            {team.map(member => <article className="team-card" key={member.name}><img src={member.image} alt={member.name} /><h3>{member.name}</h3><p>{member.role}</p></article>)}
          </div>
        </section>

        <section id="projects" className="portfolio section">
          <div className="section-heading"><span className="section-kicker">LATEST WORKS</span><h2>Portofolio Project</h2><i /></div>
          <div className="filters">{filters.map(filter => <button key={filter} className={active === filter ? 'filter active' : 'filter'} onClick={() => setActive(filter)}>{filter}</button>)}</div>
          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <article
                className="project-card"
                key={`${project.category}-${project.title}-${index}`}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <span>{project.type}</span>
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <small>{project.type}</small>
                  <button
                    onClick={() =>
                      project.link
                        ? window.open(
                            project.link.startsWith('http')
                              ? project.link
                              : `https://${project.link}`,
                            '_blank'
                          )
                        : setSelectedProject(project)
                    }
                  >
                    {project.link
                      ? project.action === 'design' ? 'Lihat Design' : 'Lihat Project'
                      : 'Lihat Detail'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {selectedProject && (
          <div
            className="project-modal-backdrop"
            onClick={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null);
            }}
          >
            <section
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              aria-describedby="project-modal-description"
            >
              <button
                className="project-modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Tutup detail project"
              >
                ×
              </button>
              <img src={selectedProject.image} alt="" />
              <div className="project-modal-content">
                <span className="project-modal-type">{selectedProject.type}</span>
                <h2 id="project-modal-title">{selectedProject.title}</h2>
                <p id="project-modal-description">{selectedProject.description}</p>
                <p className="project-modal-availability">
                  Tautan publik belum tersedia. Project ini mungkin belum di-deploy
                  atau tautannya belum dibagikan.
                </p>
                <h3>Gambaran Project</h3>
                <ul>
                  {selectedProject.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        )}

        <section id="contact" className="cta section">
          <div className="cta-inner">
            <div><h2>Siap Memulai Project Anda?</h2><p>Konsultasikan kebutuhan digital Anda dengan tim ahli kami secara gratis dan temukan solusi terbaik.</p></div>
              <button
    className="cta-button"
    onClick={() => window.open('https://wa.me/6282258948564', '_blank')}
>
  ✉ Hubungi Kami
</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">VICTORA <span>Elevating through code and design.</span></div>
        <div className="socials"><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="LinkedIn">in</a></div>
        <div className="footer-line" />
        <p>© 2025 Tim VICTORA</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
