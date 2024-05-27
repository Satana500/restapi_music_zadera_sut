REST API для платформы прослушивания музыки
Добро пожаловать в репозиторий REST API для сервиса прослушивания музыки. Этот проект предоставляет возможности для регистрации и аутентификации пользователей, прослушивания музыкальных треков, а также создания и управления плейлистами. Пользователи могут делиться своими плейлистами с друзьями.

<h1>Основные функции:</h1>
Регистрация новых пользователей,
Вход в систему для существующих пользователей,
Поиск музыкальных треков,
Управление плейлистами,
Создание новых плейлистов,
Добавление треков в плейлисты,
Удаление треков из плейлистов,
Обмен плейлистами с друзьями.

![image](https://github.com/Satana500/restapi_music_zadera_sut/assets/113170386/609b73ca-2a1b-4207-97f1-c8d44dacbf89)

Использование
Регистрация пользователя
Отправьте POST-запрос на /api/register с данными пользователя.

Пример запроса:

json
Copy code
{
  "username": "example_user",
  "email": "user@example.com",
  "password": "password123"
}
Аутентификация пользователя
Отправьте POST-запрос на /api/login с данными для входа.

Пример запроса:

json
Copy code
{
  "username": "example_user",
  "password": "password123"
}
Создание плейлиста
Отправьте POST-запрос на /api/playlists с названием плейлиста.

Пример запроса:

json
Copy code
{
  "name": "My Playlist"
}
Добавление трека в плейлист
Отправьте POST-запрос на /api/playlists/{playlist_id}/tracks с идентификатором трека.

Пример запроса:

json
Copy code
{
  "track_id": 123
}

Спасибо за использование нашего сервиса! Если у вас есть вопросы или предложения, пожалуйста, создайте issue в этом репозитории.