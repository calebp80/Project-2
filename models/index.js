const User = require("./user");
const Review = require("./review");
//const Post = require("./post");

// Post.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

User.hasMany(Review);

Review.belongsTo(User, {
  foreignKey: "user_id",
  //foreignKey: "Id",
  onDelete: "CASCADE",
});


// Post.hasMany(Review, {
//   foreignKey: "post_id",
//   onDelete: "CASCADE",
// });

module.exports = {  User, Review, };
