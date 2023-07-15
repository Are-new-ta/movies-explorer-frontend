import './FilterCheckbox.css';

function FilterCheckbox({ isShortFilm, setIsShotFilm }) {
  return (
    <div className='filter'>
      <label className='filter__content'>
        <input
          className='filter__input'
          onClick={() => setIsShotFilm(!isShortFilm)}
          type='filter'
          name='filter'
          id='filter'
          checked={isShortFilm} />
        <span className='filter__toogle' />
        <span className='filter__title'>Короткометражки</span>
      </label>
    </div>
  )
};

export default FilterCheckbox;