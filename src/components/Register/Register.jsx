import AuthForm from '../AuthForm/AuthForm';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Register({ onSubmit }) {

  const { values, error, isValid, handleChange } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(
      values.userName,
      values.email,
      values.password,
    )
  }

  return (
    <AuthForm
      name='register'
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      link='signin'
      linkText='Войти'
      registrationText='Ещё не зарегистрированы?'
      onSubmit={handleSubmit}
      isValid={isValid} >
      <label className='form__label' htmlFor='name'>
        Имя
        <input
          className='form__input'
          name='userName'
          type='text'
          id='name'
          minLength='3'
          maxLength='30'
          value={values.userName || ''}
          onChange={handleChange}
          required />

        <span className={`form__error  ${!isValid ? 'form__error_type_active' : ''} `}
          id="userName-error">{error.userName}</span>
      </label>

      <label className='form__label' htmlFor='email'>
        E-mail
        <input
          type='email'
          name='email'
          id='email'
          className='form__input'
          minLength='3'
          maxLength='30'
          required
          value={values.email || ''}
          onChange={handleChange} />

        <span className={`form__error  ${!isValid ? 'form__error_type_active' : ''} `}
          id="email-error">{error.email}</span>
      </label>

      <label className='form__label' htmlFor='password'>
        Пароль
        <input
          type='password'
          name='password'
          id='password'
          minLength='6'
          maxLength='30'
          className='form__input'
          value={values.password || ''}
          onChange={handleChange}
          required />

        <span className={`form__error  ${!isValid ? 'form__error_type_active' : ''} `}
          id="password-error">{error.password}</span>
      </label>
    </AuthForm>
  )
};

export default Register;
