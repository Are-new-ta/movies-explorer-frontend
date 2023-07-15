import './Portfolio.css';

function Portfolio() {
  return (
    <div className='portfolio '>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a href='https://github.com/Are-new-ta/how-to-learn'
            className='portfolio__link'
            target='_blank'
            rel='noreferrer'>
            Статичный сайт
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>

        <li className='portfolio__item'>
          <a href='https://are-new-ta.github.io/russian-travel/'
            className='portfolio__link'
            target='_blank'
            rel='noreferrer'>
            Адаптивный сайт
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>

        <li className='portfolio__item'>
          <a href='https://github.com/Are-new-ta/react-mesto-api-full-gha'
            className='portfolio__link'
            target='_blank'
            rel='noreferrer'>
            Одностраничное приложение
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
      </ul>
    </div >
  )
};

export default Portfolio;



