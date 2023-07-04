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
      action=''
      method=''
      onSubmit={handleSubmit}
    >
      <div className='profile__line'>
        <label htmlFor='name' className='profile__text'>Имя</label>
        <input
          type='text'
          name='name'
          className='profile__text profile__text_type_s'
          value={userName}
          id='name'
          minLength='2'
          maxLength='30'
          placeholder='Имя'
        />
      </div>
      <div className='profile__line'>
        <label htmlFor='email' className='profile__text'>E-mail</label>
        <input
          type='email'
          name='email'
          className='profile__text profile__text_type_s'
          value={email}
          id='email'
          minLength='2'
          maxLength='30'
          placeholder='E-mail'
        />
      </div>
      <p className='profile__error' />
      <button type='submit' className='form__submit-button'>{buttonText}</button>
    </form>
  )
}

export default ProfileForm;