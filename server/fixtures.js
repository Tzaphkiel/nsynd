// depends on "underscore.js" otherwise use Array.prototype.forEach() instead.

/**
 * Base model elements
 */
Tag = new Mongo.Collection("tag");
Category = new Mongo.Collection("category");
Feed = new Mongo.Collection("feed");
Article = new Mongo.Collection("article");

if (Tag.find().count() === 0) {
  var tags = [{label: "science"}, {label: "electronics"}, {label: "art"}, {label: "design"}, {label: "book"}, {label: "music"}, {label: "programming"}, {label: "photography"}, {label: "business"}];
  _.each(tags, function(tag) {
    Tag.insert(tag);  
  });
}

if (Category.find().count() === 0) {
  //ATT: put hierarchy dependent categ after their parent creation! (see condition code below)
  var categs = [{label: "Electronics", collapsed: true}, {label: "Programming", collapsed: true}, {label: "Photography", collapsed: true}, {label: "Business", collapsed: true}, {label: "Other", collapsed: true}, {label: "Electronics", collapsed: true, parentCat: "Programming"}];
  _.each(categs, function(categ) {
    if (categ.parentCat !== undefined) {
      var parentCateg = Category.find({label: categ.parentCat}).fetch()[0];
      categ.parentCat = parentCateg._id;
    }
    Category.insert(categ);
  });
}

if (Feed.find().count() === 0) {
  Feed.insert({
    type: "rss",
    title: "Clients from Hell",
    xmlUrl: "http://clientsfromhell.tumblr.com/rss",
    htmlUrl: "http://clientsfromhell.net/"
  });
}

if (Article.find().count() === 0) {
  //Article.insert({
  //});
}


/**
 * User model elements
 */
UserFeedTag = new Mongo.Collection("userFeedTag");
UserArticleTag = new Mongo.Collection("userArticleTag");
UserCategoryFeed = new Mongo.Collection("userCategoryFeed");
UserFeed = new Mongo.Collection("userFeed");
UserArticle = new Mongo.Collection("userArticle");

if (UserFeedTag.find().count() === 0) {
  UserFeedTag.insert({
    
  });
}
if (UserArticleTag.find().count() === 0) {
  UserFeedTag.insert({
    
  });
}

if (UserCategoryFeed.find().count() === 0) {
  var categ = Category.find({label: "Other"}).fetch()[0];
  var user = "leroyse";
  var feed = Feed.find({title: "Clients from Hell"}).fetch()[0];
  UserCategoryFeed.insert({
    refUser: user,
    refCategory: categ._id,
    refFeed: feed._id
  });
}

if (UserFeed.find().count() === 0) {
  UserFeed.insert({
    
  });
}

if (UserArticle.find().count() === 0) {
  UserArticle.insert({
    
  });
}

