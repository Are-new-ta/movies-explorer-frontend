import AuthForm from '../AuthForm/AuthForm';
import './Login.css';
import { VALIDATION, EMAIL_PATTERN, PASSWORD_PATTERN } from '../../utils/const';
import useFormAndValidation from "../../hooks/useFormAndValidation";

function Login({ isLoading, handleLogin }) {

  const { values, errors, isValid, handleChange } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(
      values.email,
      values.password,
    )
  }

  return (
    <main>
      <AuthForm
        name='login'
        title='Рады видеть!'
        buttonText='Войти'
        link='signup'
        linkText='Регистрация'
        registrationText='Ещё не зарегистрированы?'
        isLoading={isLoading}
        onSubmit={handleSubmit}
        isValid={isValid}
      >
        <label className='form__label' htmlFor='email'>
          E-mail
          <input
            className='form__input'
            value={values.email || ''}
            onChange={handleChange}
            disabled={isLoading}
            pattern={EMAIL_PATTERN}
            placeholder='Введите E-mail'
            type='email'
            name='email'
            id='email'
            minLength='2'
            maxLength='30'
            autoComplete='on'
            required />
          <span className={`form__error  ${errors.email ? 'form__error_type_active' : ''} `}
            id="email-error">{VALIDATION.email.message}</span>
        </label>

        <label className='form__label' htmlFor='password'>
          Пароль
          <input
            className='form__input'
            value={values.password || ''}
            onChange={handleChange}
            disabled={isLoading}
            pattern={PASSWORD_PATTERN}
            placeholder='Введите пароль'
            type='password'
            name='password'
            id='password'
            minLength='6'
            maxLength='30'
            autoComplete='off'
            required />

          <span className={`form__error  ${errors.password ? 'form__error_type_active' : ''} `}
            id="password-error">{VALIDATION.password.message}</span>

        </label>
      </AuthForm>
    </main>
  )
};

export default Login;
