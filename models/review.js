const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Review extends Model {}

Review.init(
  {
    title: DataTypes.STRING,
		body: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = Review;