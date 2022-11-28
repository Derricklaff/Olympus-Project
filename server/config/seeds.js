const db = require('./connection');
const { User } = require('../models');
db.once('open', async () => { 
  console.log('products seeded');
  await User.deleteMany();
  await User.create(
    {
    userName: 'tristan',
    password: 'password12345',
  },
  {
    userName: 'derrick',
    password: 'password12345',
  },
  {
    userName: 'gayle',
    password: 'password12345',
  }
  );
  await User.create({
    userName: 'rachel',
    password: 'password12345'
  });
  console.log('users seeded');
  process.exit();
});