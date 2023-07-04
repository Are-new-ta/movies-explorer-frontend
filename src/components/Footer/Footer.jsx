import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <nav className='footer__container'>
          <a href='https://practicum.yandex.ru/'
            className='footer__link'
            target='_blank'
            rel="noreferrer">Яндекс.Практикум</a>

          <a href='https://github.com/Are-new-ta'
            className='footer__link'
            target='_blank'
            rel="noreferrer">Github</a>
          <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        </nav>
      </div>

    </footer>
  )
}

export default Footer;
