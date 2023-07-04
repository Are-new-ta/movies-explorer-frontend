import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {

  const navigate = useNavigate();

  return (
    <main >
      <section className='not-found'>
        <div className="not-found__container">
          <h3 className="not-found__title">404</h3>
          <p className="not-found__description">Страница не найдена</p>
        </div>
        <button className='not-found__link' type='button' onClick={() => navigate('/')}>Назад</button>
      </section>
    </main>
  )
}

export default NotFound;


