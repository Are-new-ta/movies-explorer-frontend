import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './FilterCheckbox.css';
import '../SearchForm/SearchForm.css';

function FilterCheckbox({ handleCheckbox }) {

  const { pathname } = useLocation();
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    handleCheckbox(!isChecked);
  };

  useEffect(() => {
    if (pathname === '/movies') {
      const storageIsShort = JSON.parse(localStorage.getItem('storageIsShort'));
      storageIsShort && setIsChecked(storageIsShort);
    } else {
      setIsChecked(false);
    }
  }, [pathname]); //изначчально тут не было отслеживания pathname 

  return (
    <div className='search__filters'>
      <div className='filter-checkbox'>
        <div className='filter-checkbox__wrapper'>
          <input
            className='filter-checkbox__input'
            name='filter-films'
            id='filter-films'
            type='checkbox'
            checked={isChecked}
            onChange={handleChange} />

          <label className='filter-checkbox__label' htmlFor='filter-films' tabIndex="0" />
        </div>
        <span className='filter-checkbox__span'>Короткометражки</span>
      </div>
    </div>


    // <div className='filter'>
    //   <label className='filter__content'>
    //     <input
    //       className='filter__input'
    //       type='checkbox'
    //       name='filter'
    //       id='filter'
    //       checked={isChecked}
    //       onChange={handleChange} />
    //     <span className='filter__toogle' />
    //     <span className='filter__title'>Короткометражки</span>
    //   </label>
    // </div>
  )
};

export default FilterCheckbox;





// после редактирования для <level-3>, кажется этот код нигде не применялся
// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import './FilterCheckbox.css';

// // изначально в переданных параметрах isShortFilm, setIsShotFilm
// function FilterCheckbox({ handleCheckbox }) {

//   const { pathname } = useLocation();
//   const [isChecked, setIsChecked] = useState(false);

//   const handleChange = () => {
//     setIsChecked(!isChecked);
//     handleCheckbox(!isChecked);
//   };

//   useEffect(() => {
//     if (pathname === '/movies') {
//       const storageIsShort = JSON.parse(localStorage.getItem('storageIsShort'));
//       storageIsShort && setIsChecked(storageIsShort);
//     } else {
//       setIsChecked(false);
//     }
//   }, []);

//   return (
//     <div className='filter'>
//       <label className='filter__content'>
//         <input
//           className='filter__input'
//           type='checkbox'
//           name='filter'
//           id='filter'
//           checked={isChecked}
//           onChange={handleChange} />
//         <span className='filter__toogle' />
//         <span className='filter__title'>Короткометражки</span>
//       </label>
//     </div>
//   )
// };

// export default FilterCheckbox;