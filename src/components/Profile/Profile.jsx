import { useState, useContext, useRef } from 'react';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
import MainApi from '../../utils/MainApi';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { EMAIL_PATTERN, USERNAME_PATTERN, statusMessage } from '../../utils/const';

function Profile({ setTooltipSettings, setInfoTooltipPopupOpen, signOut }) {

  const nameInput = useRef(false);
  const userContext = useContext(CurrentUserContext);
  const [userData, setUserData] = useState(userContext.currentUser);
  const [currentError, setCurrentError] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  const initialValues = {
    username: userData.name,
    email: userData.email,
  };

  async function handleEdit(evt) {
    evt.preventDefault();
    await setIsEdit(true);
    nameInput.current.focus();
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    setCurrentError('');
    setIsLoading(true);
    setUserData({
      name: values.username,
      email: values.email,
    });

    MainApi.changeUserInfo({
      name: values.username,
      email: values.email,
    })
      .then((data) => {
        setCurrentError('');
        setIsEdit(false);
        setInfoTooltipPopupOpen(true);
        setTooltipSettings({
          message: statusMessage.UPDATE_SUCCESS,
          isSuccess: true,
        })
        resetForm({
          username: data.name,
          email: data.email,
        })
      })
      .catch(async (err) => {
        const { message } = await err.json();
        setTooltipSettings({
          message: statusMessage.BAD_REQUEST,
          isSuccess: false,
        })
        setInfoTooltipPopupOpen(true);
        setCurrentError(message);
      })
      .finally(() => setIsLoading(false))
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
          <form
            className='profile__container'
            name={`form-profile`}
            onSubmit={handleSubmit} >

            <div className='profile__line'>
              <label htmlFor='name' className='profile__text'>Имя</label>
              <input
                className='profile__text profile__text_type_s'
                type='text'
                name='username'
                id='username'
                minLength='2'
                maxLength='30'
                placeholder='Имя'
                autoComplete='on'
                pattern={USERNAME_PATTERN}
                value={values.username || ''}
                onChange={handleChange}
                disabled={isLoading || !isEdit}
                ref={nameInput}
                required />
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
                autoComplete='on'
                pattern={EMAIL_PATTERN}
                value={values.email || ''}
                onChange={handleChange}
                disabled={isLoading || !isEdit}
                required />
            </div>

            <span className={`profile__error  ${errors ? 'profile__error_visible' : ''} `}>
              {errors.username || errors.email}</span>

            <div className='profile__nav'>
              <button type='submit' className='profile__submit-button' disabled={!isButtonActive}>Сохранить</button>
            </div>

            {isLoading ? <Preloader /> : ''}

          </form>
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
              <button type='button' className='profile__edit-button' onClick={handleEdit}>Редактировать</button>
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
