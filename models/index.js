const User = require('./user');
const Review = require('./review');
const Location = require('./location');


User.hasMany(Review);
Review.belongsTo(User);

Review.belongsTo(Location);
Location.hasMany(Review);

module.exports = { User, Review, Location };
