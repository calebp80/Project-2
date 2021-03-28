const User = require("./user");
const Review = require("./review");
const Location = require("./location");
//const Post = require("./post");

// Post.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

User.hasMany(Review);

Review.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Review.belongsTo(Location);
Location.hasMany(Review);

// Post.hasMany(Review, {
//   foreignKey: "post_id",
//   onDelete: "CASCADE",
// });

module.exports = {  User, Review, Location };
