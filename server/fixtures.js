// depends on "underscore.js" otherwise use Array.prototype.forEach() instead.

/**
 * Base model elements
 */
if (Tag.find().count() === 0) {
  var tags = [{label: "science"}, {label: "electronics"}, {label: "art"}, {label: "design"}, {label: "book"}, {label: "music"}, {label: "programming"}, {label: "photography"}, {label: "business"}];
  _.each(tags, function(tag) {
    Tag.insert(tag);  
  });
}

if (Category.find().count() === 0) {
  //ATT: put hierarchy dependent categ after their parent creation! (see condition code below)
  var categs = [{label: "Electronics"}, {label: "Programming"}, {label: "Photography"}, {label: "Business"}, {label: "Other"}, {label: "Electronics", parentCat: "Programming"}];
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
  var feed = Feed.find().fetch()[0];
  var articles = [{refFeed: feed._id, url: "", shortContent: "", fullContent: "", thumb: null, title: "Some article title", description: "Some article description content that will summarize the article", date: "2014-10-22"}, {refFeed: feed._id, url: "", shortContent: "", fullContent: "", thumb: null, title: "Some other article title", description: "Some article description content that will summarize the article", date: "2014-10-22"}, {refFeed: feed._id, url: "", shortContent: "", fullContent: "", thumb: null, title: "Some article title", description: "Some article description content that will summarize the article", date: "2014-10-22"}, {refFeed: feed._id, url: "", shortContent: "", fullContent: "", thumb: null, title: "Some article title", description: "Some article alternate description content that will summarize this particular article", date: "2014-10-22"}, {refFeed: feed._id, url: "", shortContent: "", fullContent: "", thumb: null, title: "Some article title", description: "Some article description content that will summarize the article", date: "2014-10-22"}, {refFeed: feed._id, url: "", shortContent: "", fullContent: "", thumb: null, title: "Some article title", description: "Some article description content that will summarize the article", date: "2014-10-22"}, {refFeed: feed._id, url: "", shortContent: "", fullContent: "", thumb: null, title: "Some article title", description: "Some article description content that will summarize the article", date: "2014-10-22"}, {refFeed: feed._id, url: "", shortContent: "", fullContent: "", thumb: null, title: "Some article title", description: "Some article description content that will summarize the article", date: "2014-10-05"}, {refFeed: feed._id, url: "", shortContent: "", fullContent: "", thumb: null, title: "Some article title", description: "Some article description content that will summarize the article, Some article description content that will summarize the article", date: "2014-10-22"}, {refFeed: feed._id, url: "", shortContent: "", fullContent: "", thumb: null, title: "Some article title", description: "Some article description content that will summarize the article", date: "2014-10-12"}, {refFeed: feed._id, url: "", shortContent: "", fullContent: "", thumb: null, title: "Some article title", description: "Some article description content that will summarize the article", date: "2014-09-22"}, {refFeed: feed._id, url: "", shortContent: "", fullContent: "", thumb: null, title: "Some article title", description: "Some article description content that will summarize the article", date: "2014-08-23"}];
  _.each(articles, function(article) {
    Article.insert(article);
  });
}


/**
 * User model elements
 */
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
  var feed = Feed.find().fetch()[0];
  UserFeed.insert({
    refUser: "leroyse",
    refFeed: feed
  });
}

if (UserArticle.find().count() === 0) {
  UserArticle.insert({
    
  });
}

