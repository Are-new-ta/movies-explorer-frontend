import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { SearchFormMessage } from '../../utils/const';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function SearchForm({ handleSubmitSearch, handleChangeCheckbox, showError, isLoading }) {
  const { pathname } = useLocation();
  const { values, setValues, handleChange, isValid, setIsValid } = useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    isValid ? handleSubmitSearch(values.searchWord) : showError(SearchFormMessage.EMPTY);
  };

  useEffect(() => {
    if (pathname === '/movies') {
      const storageSearchWord = localStorage.getItem('storageSearchWord');
      storageSearchWord && setValues({ searchWord: storageSearchWord });
      setIsValid(true);
    } else {
      setValues({ searchWord: '' });
    }
  }, [pathname]);

  const classNameSearchButton = cn('search__button', {
    'search__button_disabled': isLoading,
  })


  return (
    <section className='search'>
      <div className='search__wapper'>

        <form
          className='search__form'
          name='form-search'
          onSubmit={handleSubmit}
          noValidate >

          <input
            className='search__input'
            name='searchWord'
            id='searchWord'
            type='text'
            minLength='2'
            maxLength='30'
            placeholder='Фильм'
            value={values.keyWord || ''}
            onChange={handleChange}
            disabled={isLoading}
            required />

          <button className={classNameSearchButton} disabled={isLoading} type='submit' aria-label='Поиск'>Поиск</button>

        </form>

        <FilterCheckbox handleCheckbox={handleChangeCheckbox} />
      </div>

    </section>
  );
}

export default SearchForm;

