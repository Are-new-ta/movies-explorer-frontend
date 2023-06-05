import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileForm from '../ProfileForm/ProfileForm';
import './Profile.css';

function Profile() {

  const [isEdit, setIsEdit] = useState(false);

  const userName = 'Anna';
  const email = 'Anna@yandex.ru';

  const handleEditBtnClick = () => setIsEdit(true);

  return (
    <section className='profile wrapper'>
      <h1 className='profile__title'>{`Привет, ${userName}!`}</h1>
      {isEdit
        ?
        <ProfileForm buttonText='Сохранить' nameForm='profile' setIsEdit={setIsEdit} userName={userName} email={email} />
        :
        <div className='profile__container'>
          <div className='profile__line'>
            <p className='profile__text'>Имя</p>
            <p className='profile__text profile__text_type_s'>{userName}</p>
          </div>
          <div className='profile__line'>
            <p className='profile__text'>E-mail</p>
            <p className='profile__text profile__text_type_s'>{email}</p>
          </div>
          <button type='button' className='profile__edit-button' onClick={handleEditBtnClick}>Редактировать</button>

          <Link
            to={`/`}
            className='profile__link'>
            Выйти из аккаунта
          </Link>
        </div>
      }
    </section>
  )
};

export default Profile;
