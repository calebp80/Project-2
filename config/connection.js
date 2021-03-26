// // Dependencies
// console.log(process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PW)
// const Sequelize = require('sequelize');

// // Creates mySQL connection using Sequelize
// // Include your MySQL user/password information
// const sequelize = process.env.JAWSDB_URL
// console.log(process.env)
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize('haunted', 'root', '', {
//       host: 'localhost',
//       port: 3306,
//       dialect: 'mysql'
//     });

// // Exports the connection for other files to use
// module.exports = sequelize;


require('dotenv').config();

// Dependencies
const Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize
// Include your MySQL user/password information
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('haunted', 'root', 'password', {
      host: 'localhost',
      port: 3306,
      dialect: 'mysql'
    });

// Exports the connection for other files to use
module.exports = sequelize;