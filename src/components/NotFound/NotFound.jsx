import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='not-found'>
      <h1 className='not-found__header'>404</h1>
      <p className='not-found__text'>Страница не найдена</p>
      <button type='button' className='not-found__button' onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
}

export default NotFound;