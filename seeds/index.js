const seedUser = require('./user-seeds');
const seedPost = require('./post-seeds');
const seedreview = require('./review-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUser();
  console.log('--------------');

  await seedPost();
  console.log('--------------');

  await seedreview();
  console.log('--------------');


  process.exit(0);
};

seedAll();