import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import MainApi from '../../utils/MainApi';
import './App.css';
import { statusMessage } from '../../utils/const';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(null);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tooltipSettings, setTooltipSettings] = useState({
    message: '',
    isSuccess: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      MainApi.setToken();
      Promise.all([MainApi.getUserInfo(), MainApi.getSavedMovies()])
        .then(([me, apiSavedMovies]) => {
          setCurrentUser(me);
          setSavedMovies(apiSavedMovies.filter((film) => film.owner._id === me._id));
        })
        .catch(async (err) => {
          const { message } = await err.json();
          setTooltipSettings({
            message,
            isSuccess: false,
          });
          setInfoTooltipPopupOpen(true);
        })
        .finally(() => { })
    }
  }, [loggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      MainApi
        .checkToken(jwt)
        .then((res) => {
          setCurrentUser(res);
          setLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
          signOut();
        });
    } else setLoggedIn(false);
  }, [navigate]);

  function closeAllPopups() {
    setInfoTooltipPopupOpen(false);
    setIsOpenMenu(false);
  }

  function handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  };

  function handleLogin(email, password) {
    setIsLoading(true);
    MainApi
      .login(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        setTooltipSettings({
          message: statusMessage.SUCCESS,
          isSuccess: true,
        });
        setInfoTooltipPopupOpen(true);
      })
      .catch(async (error) => {
        const { message } = await error.json();
        setTooltipSettings({
          message,
          isSuccess: false,
        });
        setInfoTooltipPopupOpen(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleRegister(name, email, password) {
    setIsLoading(true);
    MainApi
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch(async (error) => {
        const { message } = await error.json();
        setTooltipSettings({
          message,
          isSuccess: false,
        });
        setInfoTooltipPopupOpen(true)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function signOut() {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    setSavedMovies([]);
    setIsLoading(false);
    closeAllPopups();
    navigate('/');
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser, savedMovies, setSavedMovies }}>
      <div className='app'>
        <Routes>
          <Route path='/signin' element={loggedIn ? <Navigate to='/movies' />
            : <Login handleLogin={handleLogin} isLoading={isLoading} />} />

          <Route path='/signup' element={loggedIn ?
            <Navigate to='/movies' />
            : <Register handleRegister={handleRegister} isLoading={isLoading} />} />

          <Route path='/' element={
            <>
              <Header
                loggedIn={loggedIn}
                isOpenMenu={isOpenMenu}
                setIsOpenMenu={setIsOpenMenu}
                handleOverlayClick={handleOverlayClick} />
              <Main />
              <Footer />
            </>} />

          <Route path='/movies' element={
            <ProtectedRoute loggedIn={loggedIn} >
              <Header
                loggedIn={loggedIn}
                isOpenMenu={isOpenMenu}
                setIsOpenMenu={setIsOpenMenu}
                handleOverlayClick={handleOverlayClick} />
              <Movies />
              <Footer />
            </ProtectedRoute>} />

          <Route path='/saved-movies' element={
            <ProtectedRoute loggedIn={loggedIn} >
              <Header
                loggedIn={loggedIn}
                isOpenMenu={isOpenMenu}
                setIsOpenMenu={setIsOpenMenu}
                handleOverlayClick={handleOverlayClick} />
              <SavedMovies />
              <Footer />
            </ProtectedRoute>} />

          <Route path='/profile' element={
            <ProtectedRoute loggedIn={loggedIn} >
              <Header
                loggedIn={loggedIn}
                isOpenMenu={isOpenMenu}
                setIsOpenMenu={setIsOpenMenu}
                handleOverlayClick={handleOverlayClick} />
              <Profile
                signOut={signOut}
                setTooltipSettings={setTooltipSettings}
                setInfoTooltipPopupOpen={setInfoTooltipPopupOpen} />
            </ProtectedRoute>} />

          <Route path='*' element={<NotFound />} />

        </Routes>

        <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          onClose={closeAllPopups}
          tooltipSettings={tooltipSettings}
          onOverlayClick={handleOverlayClick} />

      </div>
    </CurrentUserContext.Provider>

  )
}

export default App;