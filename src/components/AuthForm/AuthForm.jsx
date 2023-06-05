import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import './AuthForm.css';
import logo from '../../images/logo.svg';

function AuthForm({ name, title, buttonText, link, linkText, registrationText, children, onSubmit }) {

  const { isValid, resetForm } = useFormAndValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

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
        name={`form-${name}`}
        action=''
        method=''
        onSubmit={onSubmit}
      >
        {children}

        <button
          type='submit'
          disabled={!isValid}
          className='form__button-submit auth-form__button-submit'>{buttonText}</button>
      </form>

      <p className='form__registration-text'>{registrationText}&nbsp;
        <Link to={`/${link}`} className='form__link'>{linkText}</Link>
      </p>
    </section>
  )
};

export default AuthForm;



