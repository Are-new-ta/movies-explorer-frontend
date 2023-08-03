# Дипломный проект: "Movies Explorer"

### Ссылка на макет:

 https://disk.yandex.ru/d/1APvjJQVhzJlTw 

 ### Ссылка на пул реквест:
https://github.com/Are-new-ta/movies-explorer-frontend/pull/3

### Ссылки на проект

IP-адрес 158.160.45.34

Frontend https://mesto.annausova.nomoredomains.work

Backend https://api.mesto.annausova.nomoredomains.work

### Чеклист Дипломной работы:

- [Чеклист]( https://code.s3.yandex.net/web-developer/static/new-program/web-diploma-criteria-2.0/checklist_react_diplom.pdf);


## 1. Описание проекта
Дипломный проект "Movies Explorer" - приложение для поиска и просмотра фильмов международного фестиваля документального кино о новой культуре "Beat Film Festival". Выполнен в рамках образовательной программы [Яндекс Практикума](https://practicum.yandex.ru/) и представляет собой отзывчиво-адаптивное приложение (SPA), написанное на "React" (часть frontend) и "Express" (часть backend).

##  2. Установка и запуск приложения в локальном репозитории, эксплуатация
1. `git clone https://github.com/Are-new-ta/movies-explorer-frontend` - клонировать репозиторий на свое устройство (HTTPS)
2. `npm i` - установить зависимости
3. `npm run start` - запустить приложение

  ### Для корректной работы в локальном репозитории следует также клонировать 
  `git clone https://github.com/Are-new-ta/movies-explorer-api` и запустить в первую очередь его командой 
  `npm run dev` (после установки зависимостей)

##  Необходимая функциональность проекта
 1. Правильно работают оба состояния шапки: если пользователь не залогинился, в шапке должны быть
кнопки «Войти» и «Регистрация»; если пользователь залогинился, кнопки исчезают — и появляются
кнопки «Фильмы», «Сохранённые фильмы» и «Аккаунт», в том числе и на главной странице.
При поиске текст запроса, найденные фильмы и состояние переключателя короткометражек
сохраняются в хранилище. Если пользователь повторно переходит на страницу фильмов, то при
монтировании компонента данные достаются из локального хранилища. Страница отображается в
соответствии с загруженными из хранилища данными.
Все формы валидируются и на стороне клиента. Пользователь не может отправить запрос с
невалидными данными.

2. При поиске текст запроса, найденные фильмы и состояние переключателя короткометражек
сохраняются в хранилище. Если пользователь повторно переходит на страницу фильмов, то при
монтировании компонента данные достаются из локального хранилища. Страница отображается в
соответствии с загруженными из хранилища данными.

3. Все формы валидируются и на стороне клиента. Пользователь не может отправить запрос с
невалидными данными.

### Страницы «Регистрация» и «Авторизация»:
1. На странице «Регистрация» клик по кнопке «Зарегистрироваться» отправляет запрос на роут /signup ,
если данные введены корректно. Если запрос прошёл успешно, то автоматически производится вход и
редирект на страницу /movies .
2. На странице «Авторизация» клик по кнопке «Войти» отправляет запрос на роут /signin , если данные
введены корректно. Если запрос прошёл успешно, происходит редирект на страницу /movies .
3. Все формы валидируются и на стороне клиента.

### Страница редактирование профиля:
1. На странице редактирования профиля клик по кнопке «Сохранить» отправляет запрос на роут
/users/me , если данные введены корректно.
2. Пользователю отображается уведомление об успешном запросе к серверу при сохранении профиля.
3. Если на странице редактирования профиля введённая информация соответствует текущим данным
пользователя, кнопка «Сохранить» заблокирована и нельзя отправить запрос сохранения.

### Поиск фильмов:
1. Прелоадер крутится во время выполнения запроса фильмов.
2. Работа с фильтром настроена:
3. Поиск фильмов регистронезависимый.
4. Если запрос выполняется впервые, то работа с фильтром происходит после получения данных.
5. Если карточки уже были отображены на странице в блоке результатов, клик по чекбоксу «Короткометражки» приводит к повторной фильтрации результата.
6. После успешного сабмита формы поиска появляется блок с результатами. Если ничего не найдено, выводится текст: «Ничего не найдено».
На странице всех фильмов в блоке результата отображается такое же количество карточек, как в макете.
7. Нажатие на кнопку «Ещё» отображает следующий ряд с тем же числом карточек. При отображении всех
карточек кнопка "Ещё" скрывается.

### Карточки:
1. Карточка состоит из изображения, названия фильма и его длительности. Длительность фильма
рассчитывается корректно и соответствует формату в макете. Клик по карточке ведёт на трейлер
фильма.
2. Кнопка лайка имеет правильное состояние, в зависимости от того, добавлен ли фильм в сохранённые или нет.
3. При клике на иконку «Лайк» в блоке карточки выполняется запрос к /movies нашего API для установки
или снятия лайка, в зависимости от текущего состояния.

### На странице «Сохранённые фильмы»:
1. Отображается форма поиска. Она позволяет искать фильмы по уже полученным данным о
сохранённых фильмах.
2. Блок карточки содержит кнопку удаления, а не лайка.
3. При нажатии на кнопку удаления выполняется запрос на удаление фильма. После успешного запроса
карточка удаляется со страницы.

