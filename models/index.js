const User = require("./User");
const Review = require("./Review");
const Comment = require("./Comment");

User.hasMany(Review, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
});

// Comment to User associations - users have many comments and a comment belongs to a user
User.hasMany(Comment, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// Comment to Review associations - movie reviews have many comments - a comment belongs to a review
Review.hasMany(Comment, {
  foreignKey: "review_id",
});

Comment.belongsTo(Review, {
  foreignKey: "review_id",
});

module.exports = { User, Review, Comment };
