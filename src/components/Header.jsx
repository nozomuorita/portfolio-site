import { useEffect, useRef } from 'react'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import logoImage from '../../public/Planet Arcadia (1)_1.png'
import audioSource from '../../public/audio.mp3'

const navigationItems = [
  { href: '#top', label: 'TOP' },
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#qualifications', label: 'Qualifications' },
  { href: '#skill', label: 'SKILL' },
  { href: '#account', label: 'Account' },
]

function Header() {
  const audioRef = useRef(null)

  useEffect(() => {
    const navbar = document.querySelector('#mainNav')
    const navbarToggler = document.querySelector('.navbar-toggler')
    const navLinks = document.querySelectorAll('#navbarResponsive .nav-link')

    const updateNavbar = () => {
      navbar?.classList.toggle('navbar-shrink', window.scrollY !== 0)
    }

    const collapseNavigation = () => {
      if (
        navbarToggler &&
        window.getComputedStyle(navbarToggler).display !== 'none'
      ) {
        navbarToggler.click()
      }
    }

    updateNavbar()
    document.addEventListener('scroll', updateNavbar)
    navLinks.forEach((link) => link.addEventListener('click', collapseNavigation))

    return () => {
      document.removeEventListener('scroll', updateNavbar)
      navLinks.forEach((link) =>
        link.removeEventListener('click', collapseNavigation),
      )
    }
  }, [])

  useEffect(() => {
    const audio = new Audio(audioSource)
    audioRef.current = audio

    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [])

  const toggleAudio = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      void audio.play()
    } else {
      audio.pause()
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#top">
          <img className="logo" src={logoImage} alt="NOZOMU ORITA" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ms-1" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            {navigationItems.map(({ href, label }) => (
              <li className="nav-item" key={href}>
                <a className="nav-link" href={href}>
                  {label}
                </a>
              </li>
            ))}
            <a className="music-button" id="play" onClick={toggleAudio}>
              <LibraryMusicIcon fontSize="large" className="music-icon" />
            </a>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
