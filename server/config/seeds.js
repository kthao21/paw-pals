const db = require('./connection');
const { User, Animal, Category } = require('../models');
const petDB = require('./petDB');

db.once('open', async () => {
  await petDB('Category', 'categories');
  await petDB('Animal', 'animals');
  await petDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Dog' },
    { name: 'Cat' },
    { name: 'Bird' }
  ]);

  console.log('categories seeded');

  const animals = await Animal.insertMany([
    {
      name: 'Kobe',
      image: 'dog2.jpg',
      gender: 'male',
      age: 2,
      category: categories[0]._id,

    },
    {
      name: 'Luna',
      image: 'dog6.jpg',
      gender: 'female',
      age: 2,
      category: categories[0]._id,
    },
    {
      name: 'Maxwell',
      image: 'cat1.jpg',
      gender: 'male',
      age: 1,
      category: categories[1]._id,
    },
    {
      name: 'Wynston',
      image: 'cat2.jpg',
      gender: 'male',
      age: 4,
      category: categories[1]._id,
    },
    {
      name: 'Sammi',
      image: 'bird1.jpg',
      gender: 'female',
      age: 2,
      category: categories[2]._id,
    },
    {
      name: 'Henry',
      image: 'bird2.jpg',
      gender: 'male',
      age: 2,
      category: categories[2]._id,
    },
    {
      name: 'Tyson',
      image: 'cat3.jpg',
      gender: 'male',
      age: 4,
      category: categories[1]._id,
    },
    {
      name: 'Bailey',
      image: 'dog1.jpg',
      gender: 'male',
      age: 7,
      category: categories[0]._id,
    },
    {
      name: 'Marvin',
      image: 'dog3.jpg',
      gender: 'male',
      age: 2,
      category: categories[0]._id,
    },
    {
      name: 'Teddy',
      image: 'dog4.jpg',
      gender: 'male',
      age: 3,
      category: categories[0]._id,
    },
    {
      name: 'Koda',
      image: 'dog6.jpg',
      gender: 'male',
      age: 3,
      category: categories[0]._id,
    },
    {
      name: 'Charlie',
      image: 'cat4.jpg',
      gender: 'male',
      age: 2,
      category: categories[1]._id,
    }
  ]);

  console.log('pets seeded');
  console.log(animals);

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
