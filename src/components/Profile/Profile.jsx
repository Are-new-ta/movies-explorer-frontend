import { useRef } from 'react';
import './Profile.css';
import ProfileForm from '../ProfileForm/ProfileForm';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Profile({ isEdit, setIsEdit, userData, isLoading, signOut }) {

  const nameInput = useRef(false);
  const initialValues = {
    username: userData.name,
    email: userData.email,
  };

  const { values, errors, isValid } = useFormAndValidation({ initialValues });

  async function handleEdit(evt) {
    evt.preventDefault();
    await setIsEdit(true);
    nameInput.current.focus();
  }

  const isButtonActive = isValid
    && !isLoading
    && (values.username !== initialValues.username || values.email !== initialValues.email);

  return (
    <main>
      <section className='profile'>
        <h1 className='profile__title'>{`Привет, ${userData.name}!`}</h1>
        {isEdit
          ?
          <ProfileForm buttonText='Сохранить' nameForm='profile' setIsEdit={setIsEdit} username={userData.name} email={userData.email} />
          :
          <div className='profile__container'>
            <div className='profile__line'>
              <p className='profile__text'>Имя</p>
              <p className='profile__text profile__text_type_s'>{userData.name || ''}</p>
            </div>
            <div className='profile__line'>
              <p className='profile__text'>E-mail</p>
              <p className='profile__text profile__text_type_s'>{userData.email || ''}</p>
            </div>
            <div className='profile__nav'>

              <p className='profile__error'>{errors.username || errors.email}</p>

              {isEdit
                ?
                <button type='submit' className='profile__submit-button' disabled={!isButtonActive}>Сохранить</button>
                :
                <button type='button' className='profile__edit-button' onClick={handleEdit}>Редактировать</button>
              }
              {!isEdit
                ?
                <button type='button' className='profile__exit-button profile__link' onClick={signOut}>Выйти из аккаунта</button>
                :
                ''
              }
            </div>
          </div>
        }
      </section>
    </main>
  )
};

export default Profile;


