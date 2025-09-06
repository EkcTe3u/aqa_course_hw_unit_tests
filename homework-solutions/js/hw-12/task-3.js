// На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей.
//   Вывести на экран: имя, e-mail, телефон и название компании пользователя.
//   Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах.
//   Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий.
//   Для реализации трех запросов воспользоваться Promise.all().
//   (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId).
//       Пример:
//       1.  name: Leanne Graham
//           email: Sincere@april.biz
//           phone: 1-770-736-8031 x56442
//           company: Romaguera-Crona
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)
//       __________________________________

//       2.  name: Ervin Howell
//           email: Shanna@melissa.tv
//           phone: 010-692-6593 x09125
//           company: Deckow-Crist
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)
const baseUrl = 'https://jsonplaceholder.typicode.com/';

async function getUsers(url) {
  const response = await fetch(`${url}users/`);
  const users = await response.json();
  return users;
}

async function getUserAlbums(url) {
  const response = await fetch(`${url}albums`);
  const albums = await response.json();
  return albums;
}

// Исправлена ошибка в запросе
async function getAlbumPhotos(url) {
  const response = await fetch(`${url}photos`);
  const photos = await response.json();
  return photos;
}

Promise.all([getUsers(baseUrl), getUserAlbums(baseUrl), getAlbumPhotos(baseUrl)]).then(([users, albums, photos]) => {
  users.forEach((user) => {
    console.log(
      `${user.id}. name: ${user.name}\n   username: ${user.username}\n   phone: ${user.phone}\n   email: ${user.email}\n   company: ${user.company.name}\n   Albums:`,
    );
    const userAlbums = albums.filter((album) => album.userId === user.id);
    userAlbums.forEach((album) => {
      const albumPhotos = photos.filter((photo) => photo.albumId === album.id);
      console.log(`     ${album.title} (${albumPhotos.length} photos)`);
    });
    console.log('--------------------------------------');
  });
});
