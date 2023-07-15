import './SearchForm.css';

function SearchForm() {

  return (
    <section className='search'>
      <div className='search__wapper'>

        <form className='search__row'>
          <input className='search__input' name='search' placeholder='Фильм' required />
          <button className='search__button'>Поиск</button>
        </form>

        <div className='search__filters'>
          <div className='filter-checkbox'>
            <div className='filter-checkbox__wrapper'>
              <input className='filter-checkbox__input' name='filter-films' id='filter-films' type='checkbox' />
              <label className='filter-checkbox__label' htmlFor='filter-films' tabIndex="0" />
            </div>
            <span className='filter-checkbox__span'>Короткометражки</span>
          </div>
        </div>
      </div>

    </section>
  );
}

export default SearchForm;

