export const SHORT_FILM_DURATION = 40;

export const CodeError = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  ALREADY_EXISTS: 409,
  SERVER_ERROR: 500,
};

export const SearchFormMessage = {
  EMPTY: 'Нужно ввести ключевое слово',
  NOT_FOUND: 'Ничего не найдено',
  NOT_SAVED: 'У вас нет сохранённых фильмов',
  SEARCH_ERROR: 'Во время загрузки сохранённых фильмов произошла ошибка. Подождите немного и попробуйте обновить страницу.',
}

export const statusMessage = {
  SUCCESS: 'Всё прошло успешно!',
  REGISTER_SUCCESS: 'Вы успешно зарегистрировались!',
  UPDATE_SUCCESS: 'Ваши данные успешно изменены',
  ERROR: 'Во время запроса произошла ошибка. Подождите немного и попробуйте ещё раз.',
  BAD_REQUEST: 'Что-то пошло не так.',
}

//используемая ширина экрана
export const WindowWidth = {
  MOBILE: 480,
  TABLET: 900,
  DESKTOP: 1024,
};

//отображаемое количество фильмов на экране
export const Length = {
  MOBILE: 5,
  TABLET: 8,
  DESKTOP: 12,
}

export const USERNAME_PATTERN = '[А-Яа-я a-zA-Z0-9]{2,30}';
export const EMAIL_PATTERN = '[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]+';
export const PASSWORD_PATTERN = '(?=.*[A-z])(?=.*\\d)(?=.*[!@#$%^&*])(?=.{6,}).*';
export const HTTP_PATTERN = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$/;


export const VALIDATION = {
  username: {
    message: 'Имя может содержать только кириллицу, латиницу, цифры или пробел',
  },
  email: {
    message: 'Введите корректный Email-адрес',
  },
  password: {
    message: 'Пароль должен состоять минимум из 6 символов, включать латиницу, цифру и спецсимвол',
  },

};

