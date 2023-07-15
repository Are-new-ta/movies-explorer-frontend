import AuthForm from '../AuthForm/AuthForm';
import './Login.css';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Login({ onSubmit }) {

  const { values, error, isValid, handleChange } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(
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
        onSubmit={handleSubmit}
        isValid={isValid}
      >
        <label className='form__label' htmlFor='email'>
          E-mail
          <input
            className='form__input'
            value={values.email || ''}
            onChange={handleChange}
            placeholder='Введите E-mail'
            type='email'
            name='email'
            id='email'
            minLength='2'
            maxLength='30'
            autoComplete='on'
            required />
          <span className={`form__error  ${!isValid ? 'form__error_type_active' : ''} `}
            id="email-error">{error.email}</span>
        </label>

        <label className='form__label' htmlFor='password'>
          Пароль
          <input
            className='form__input'
            value={values.password || ''}
            onChange={handleChange}
            placeholder='Введите пароль'
            type='password'
            name='password'
            id='password'
            minLength='6'
            maxLength='30'
            autoComplete='off'
            required />

          <span className={`form__error  ${!isValid ? 'form__error_type_active' : ''} `}
            id="password-error">{error.password}</span>
        </label>
      </AuthForm>
    </main>
  )
};

export default Login;
