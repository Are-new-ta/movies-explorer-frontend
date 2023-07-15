import React from 'react';
import '../Profile/Profile.css';

function ProfileForm({ userName, nameForm, email, buttonText, setIsEdit }) {

  function handleSubmit(e) {
    e.preventDefault();
    setIsEdit(false);
  };

  return (
    <form
      className='profile__container'
      name={`form-${nameForm}`}
      onSubmit={handleSubmit} >
      <div className='profile__line'>
        <label htmlFor='name' className='profile__text'>Имя</label>
        <input
          className='profile__text profile__text_type_s'
          type='text'
          name='name'
          id='name'
          minLength='2'
          maxLength='30'
          placeholder='Имя'
          autoComplete='on'
          defaultValue='Виталий'
          required
        />
      </div>
      <div className='profile__line'>
        <label htmlFor='email' className='profile__text'>E-mail</label>
        <input
          className='profile__text profile__text_type_s'
          type='email'
          name='email'
          id='email'
          minLength='2'
          maxLength='30'
          placeholder='E-mail'
          defaultValue='pochta@yandex.ru'
          autoComplete='on'
          required
        />
      </div>
      <p className='profile__error' />
      <button type='submit' className='profile__submit-button'>{buttonText}</button>
    </form>
  )
}

export default ProfileForm;