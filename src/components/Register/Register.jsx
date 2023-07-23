import AuthForm from '../AuthForm/AuthForm';
import './Register.css';
import { VALIDATION, EMAIL_PATTERN, PASSWORD_PATTERN, USERNAME_PATTERN } from '../../utils/const';
import useFormAndValidation from "../../hooks/useFormAndValidation";

function Register({ handleRegister, isLoading }) {

  const { values, errors, isValid, handleChange } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(
      values.username,
      values.email,
      values.password,
    )
  }

  return (
    <main>
      <AuthForm
        name='register'
        title='Добро пожаловать!'
        buttonText='Зарегистрироваться'
        link='signin'
        linkText='Войти'
        registrationText='Уже зарегистрированы?'
        pattern={USERNAME_PATTERN}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        isValid={isValid} >

        <label className='form__label' htmlFor='name'>
          Имя
          <input
            className='form__input'
            value={values?.username || ''}
            onChange={handleChange}
            disabled={isLoading}
            pattern={USERNAME_PATTERN}
            placeholder='Введите Имя'
            name='username'
            type='text'
            id='name'
            minLength='2'
            maxLength='30'
            autoComplete='on'
            required />

          <span className={`form__error  ${errors.username ? 'form__error_type_active' : ''} `}
            id="userName-error">{VALIDATION.username.message}</span>

        </label>

        <label className='form__label' htmlFor='email'>
          E-mail
          <input
            className='form__input'
            value={values?.email || ''}
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
            value={values?.password || ''}
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

export default Register;
