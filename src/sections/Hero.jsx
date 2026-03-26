import Button from '../components/Button'

function Hero() {
  return (
    <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <p style={{ color: '#e56af5', marginBottom: '8px' }}>Bonjour, je m'appelle</p>
      <h1>Julie Lefort</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '500px', marginBottom: '32px' }}>
        Je suis apprentie de troisième année en développement à l'Ecole des Métiers de Fribourg.
      </p>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button href="#projects">Voir mes projets</Button>
        <Button href="#contact">Me contacter</Button>
      </div>
    </section>
  )
}

export default Hero
