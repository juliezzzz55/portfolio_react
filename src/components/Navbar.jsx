function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 40px', background: '#0f0f0f', position: 'sticky', top: 0, borderBottom: '1px solid #222' }}>
      <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Ton Nom</span>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '24px' }}>
        <li><a href="#about">À propos</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
