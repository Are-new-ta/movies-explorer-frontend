import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { useState } from 'react';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openMenu = () => {
    setIsMenuOpen(true)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <div className='app'>
      <Routes>
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />

        <Route path='/' element={
          <>
            <Header openMenu={openMenu} />
            <Main isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
            <Footer />
          </>
        } />

        <Route path='/movies' element={
          <>
            <Header openMenu={openMenu} />
            <Movies />
            <Footer />
          </>
        } />

        <Route path='/saved-movies' element={
          <>
            <Header openMenu={openMenu} />
            <SavedMovies />
            <Footer />
          </>
        } />

        <Route path='/profile' element={
          <>
            <Header openMenu={openMenu} />
            <Profile />
          </>
        } />

        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default App;