import { useState, useContext, useRef } from 'react';
import '../Profile/Profile.css';
import Preloader from '../Preloader/Preloader';
import MainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { VALIDATION, statusMessage } from '../../utils/const';


function ProfileForm({ setTooltipSettings, setInfoTooltipPopupOpen }) {

  const userContext = useContext(CurrentUserContext);
  const [userData, setUserData] = useState(userContext.currentUser);

  const initialValues = {
    username: userData.name,
    email: userData.email,
  };

  const [currentError, setCurrentError] = useState('');
  const nameInput = useRef(false);
  const { values, handleChange, resetForm } = useFormAndValidation({ initialValues });
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


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

  return (
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
          pattern={VALIDATION.username.pattern}
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
          pattern={VALIDATION.email.pattern}
          value={values.email || ''}
          onChange={handleChange}
          disabled={isLoading || !isEdit}
          required />
      </div>
      {isLoading ? <Preloader /> : ''}
    </form>
  )
}

export default ProfileForm;