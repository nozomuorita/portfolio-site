import video from '../../public/skyscrapers_-_98151 (720p)-24b0a77a.mp4'
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

        <div className="container title-text">
          <div className="masthead-subheading">Welcome To My PortFolio</div>
          <div className="masthead-heading text-uppercase">NOZOMU ORITA</div>
          <a className="btn btn-primary btn-xl text-uppercase" href="#about">
            Tell Me More
          </a>
        </div>
      </header>

      <div className="overlay" />
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
