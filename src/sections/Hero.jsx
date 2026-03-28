import Button from '../components/Button'
import Aurora from '../components/Aurora/Aurora'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-aurora">
        <Aurora
          colorStops={['#e7bdf6', '#9067c6', '#493270']}
          amplitude={1.2}
          blend={0.6}
          speed={0.8}
        />
      </div>
      <div className="hero-content">
        <p className="hero-subtitle">Bonjour, je m'appelle</p>
        <h1>Julie Lefort</h1>
        <p className="hero-description">
          Je suis apprentie de troisième année en développement à l'Ecole des Métiers de Fribourg.
        </p>
        <div className="hero-buttons">
          <Button href="#projects">Voir mes projets</Button>
          <Button href="#contact">Me contacter</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
