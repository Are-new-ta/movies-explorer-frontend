import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import './AuthForm.css';
import Preloader from "../Preloader/Preloader";
import logo from '../../images/logo.svg';

function AuthForm({ nameForm, title, buttonText, link, linkText, registrationText, children, onSubmit, isLoading, isValid }) {

  const { pathname } = useLocation();
  const buttonSubmitClassNames = cn('form__button-submit', {
    'form__button-login': pathname === '/signin',
    'form__button-register': pathname === '/signup',
  });

  return (
    <section className='auth-form'>
      <div className='auth-form__container'>

        <Link to='/' className='auth-form__logo-link'>
          <img src={logo} alt='Логотип учебного проекта' className='logo' />
        </Link>

        <h1 className='auth-form__title'>{title}</h1>
      </div>

      <form
        className='form'
        name={`form-${nameForm}`}
        onSubmit={onSubmit}>

        {children}

        {isLoading ? <Preloader /> : ''}

        <button
          type='submit'
          disabled={!isValid || isLoading}
          className={buttonSubmitClassNames}>{buttonText}</button>
      </form>

      <p className='auth-form__registration-text'>{registrationText}&nbsp;
        <Link to={`/${link}`} className='auth-form__link'>{linkText}</Link>
      </p>
    </section>
  )
};

export default AuthForm;
