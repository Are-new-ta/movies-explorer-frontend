import './AboutMe.css';
import photo from '../../images/me.jpg';
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <div className='about-me__content '>
        <h2 className='about-me__title'>Студентка</h2>
        <div className='about-me__wrapper'>
          <div className='about-me__info'>
            <h3 className='about-me__name'>Анна</h3>
            <p className='about-me__student'>Фронтенд-разработчик</p>
            <p className="about-me__text">
              Я родилась в г. Брянске, закончила БГИТА по специальности ПГС и стала дипломированным инженером-проектировщиком.
              Уже 7 лет живу в Москве и работаю по специальности. Люблю читать антиутопии, смотреть авторское кино и JavaScript.
              С 2022 года увлекаюсь программированием, в данный момент заканчиваю курс Веб-разработчик, чему ужасно рада)
              Сначала не ожидала, что может быть действительно интересно решать всякие задачи и изучать то,
              что раньше казалось совершенно непостижимым. Но по мере изучения HTML, CSS, JavaScript, React оказалось,
              что если очень трудиться, то все в конце-концов получается)
            </p>
            <a
              href='https://github.com/Are-new-ta'
              className='about-me__link'
              target='_blank'
              rel="noreferrer">Github</a>
          </div>
          <img src={photo} alt='Анна' className='about-me__photo' />
        </div>
        <Portfolio />
      </div>
    </section>
  )
};

export default AboutMe;