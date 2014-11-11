/*
 * Base mode publications
 */
Meteor.publish("tags", function() {
  return Tag.find();
});
Meteor.publish("categories", function() {
  return Category.find();
});
Meteor.publish("feeds", function() {
  return Feed.find();
});
Meteor.publish('articles', function() {
  return Article.find();
});



/*
 * User colelctions publications
 */
Meteor.publish("userFeedTag", function() {
  UserFeedTag.find({refUser: "leroyse"}, {fields: {}});//to be replaces when user credentials & session available !
});
Meteor.publish("userArticleTag", function() {
  UserArticleTag.find({refUser: "leroyse"}, {fields: {}});//to be replaces when user credentials & session available !
});
Meteor.publish("userCategoryFeed", function() {
  UserCategoryFeed.find({refUser: "leroyse"}, {fields: {refFeed: true, refCategory: true}});//to be replaces when user credentials & session available !
});
Meteor.publish("userFeed", function() {
  UserFeed.find({refUser: "leroyse"}, {fields: {}});//to be replaces when user credentials & session available !
});
Meteor.publish("userArticle", function() {
  UserArticle.find({refUser: "leroyse"}, {fields: {}});//to be replaces when user credentials & session available !
});




