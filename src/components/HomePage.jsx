import video from '../assets/hero/city-nightscape.mp4'
import About from './section/About'
import Contact from './section/Contact'
import Footer from './section/Footer'
import Portfolio from './section/Portfolio'
import Qualification from './section/Qualification'
import Skill from './section/skill'

function HomePage() {
  return (
    <>
      <header className="masthead" id="top">
        <video autoPlay loop muted playsInline className="video">
          <source src={video} type="video/mp4" />
        </video>

        <div className="overlay" />

        <div className="container title-text">
          <div className="masthead-subheading">Welcome To My PortFolio</div>
          <div className="masthead-heading text-uppercase">NOZOMU ORITA</div>
          <a className="btn hero-cta" href="#about">
            <span>Tell Me More</span>
            <span className="hero-cta__arrow" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </header>
      <About />
      <Portfolio />
      <Qualification />
      <Skill />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage
