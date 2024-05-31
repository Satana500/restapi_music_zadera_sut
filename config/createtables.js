const sequelize = require('../config/database');
const path = require('path');

const User = require(path.join(__dirname, '../models/user'));
const Music = require(path.join(__dirname, '../models/music'));
const Playlist = require(path.join(__dirname, '../models/playlist'));
const Music2Playlist = require(path.join(__dirname, '../models/music2playlist'));
const Author = require(path.join(__dirname, '../models/author'));

sequelize.sync({ force: true })
  .then(async () => {
    console.log("Database and tables created!");

    // Add users
    const user1 = await User.create({
      username: 'user1',
      email: 'user1@example.com',
      password: 'user1_123'
    });
    console.log('User 1 created:', user1.toJSON());

    const user2 = await User.create({
      username: 'user2',
      email: 'user2@example.com',
      password: 'user2_123'
    });
    console.log('User 2 created:', user2.toJSON());

    const author1 = await Author.create({
      music_group_name: 'Imagine Dragons',
      music_group_image: '../assets/'
    });
    console.log('Author created:', author1.toJSON());

    const author2 = await Author.create({
      music_group_name: 'Eminem',
      music_group_image: ''
    });
    console.log('Author created:', author2.toJSON());

    const author3 = await Author.create({
      music_group_name: 'Кино',
      music_group_image: ''
    });
    console.log('Author created:', author3.toJSON());

    const author4 = await Author.create({
      music_group_name: 'LiL PEEP',
      music_group_image: ''
    });
    console.log('Author created:', author4.toJSON());

    const author5 = await Author.create({
      music_group_name: 'The Weeknd',
      music_group_image: ''
    });
    console.log('Author created:', author5.toJSON());

    const music1 = await Music.create({
      musicname: 'Bones',
      author: author1.id,
      duration: '4:03',
      music_image:'../assets/images/bones.jpg',
      filepath: '../assets/music/Imagine-Dragons_Bones.mp3'
    });
    console.log('Music 1 created:', music1.toJSON());

    const music2 = await Music.create({
      musicname: 'The Real Slim Shady',
      author: author2.id,
      duration: '4:41',
      filepath: '../assets/music/The-Real_Slim-Shady.mp3'
    });
    console.log('Music 2 created:', music2.toJSON());

    const music3 = await Music.create({
      musicname: 'Группа крови',
      author: author3.id,
      duration: '3:57',
      filepath: '../assets/music/Kino_gruppa_krovi.mp3'
    });
    console.log('Music 3 created:', music3.toJSON());

    const music4 = await Music.create({
      musicname: 'Sex With My Ex',
      author: author4.id,
      duration: '2:06',
      filepath: '../assets/music/Lil-Peep_Sex-With-My-Ex.mp3'
    });
    console.log('Music 4 created:', music4.toJSON());

    const music5 = await Music.create({
      musicname: 'Blinding lights',
      author: author5.id,
      duration: '3:21',
      filepath: '../assets/music/the-weeknd_-_blinding-lights.mp3'
    });
    console.log('Music 4 created:', music5.toJSON());

    const playlist1 = await Playlist.create({
      playlistname: 'some staff',
      userId: user1.id,
    });
    console.log('Playlist 1 created:', playlist1.toJSON());

    const music2playlist1 = await Music2Playlist.create({
      musicId: music1.id,
      playlistId: playlist1.id,
    });
    console.log('Music2Playlist created:', music2playlist1.toJSON());

    const music2playlist2 = await Music2Playlist.create({
      musicId: music2.id,
      playlistId: playlist1.id,
    });
    console.log('Music2Playlist created:', music2playlist2.toJSON());

  })
  .catch(error => {
    console.error('Error creating database:', error);
  });
