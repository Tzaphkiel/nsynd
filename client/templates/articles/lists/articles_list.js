Template.articlesList.helpers({
  articles: function () {
    return Article.find()
  }
});