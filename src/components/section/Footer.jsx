import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__identity">
          <span className="site-footer__name">NOZOMU ORITA</span>
          <span className="site-footer__copyright">
            © {currentYear} All rights reserved.
          </span>
        </div>

        <nav className="site-footer__links" aria-label="Footer navigation">
          <a
            className="site-footer__icon-link"
            href="https://github.com/nozomuorita"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <GitHubIcon />
          </a>
          <a
            className="site-footer__icon-link"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram profile"
          >
            <InstagramIcon />
          </a>
          <a className="site-footer__top-link" href="#top">
            Back to top
            <KeyboardArrowUpIcon fontSize="small" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
