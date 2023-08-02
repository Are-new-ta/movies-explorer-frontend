import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__container">
        <h2 className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__info">
          <span className=" footer__year">&copy; {new Date().getFullYear()}</span>
          <ul className="footer__links">
            <li>
              <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li>
              <a href="https://github.com/Are-new-ta" className="footer__link" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
      </section>
    </footer >
  )
}

export default Footer;