Template.articleLists.helpers({
  articles: function () {
    return Article.find()
  }
});