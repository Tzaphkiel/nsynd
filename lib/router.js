Router.configure({
  layoutTemplate: "layout",
  loadingTemplate: "loading",
  notFoundTemplate: "notFound",
  
  waitOn: function() {
    return  [Meteor.subscribe('tags'), Meteor.subscribe('categories'), Meteor.subscribe('feeds'), Meteor.subscribe('articles')];
    //FIXME remove the feed subscription and make it depend on the category selected or provide a subset of feeds with updates in various categories.
    //FIXME remove the articles subscription and make it depend on the feed selected or provide the latest articles from all feeds & categories.
  }
  
});

// When the article is unknown, the routing URL is still valid but does not yield a valid article page.
//Router.onBeforeAction('dataNotFound', {only: 'articlePage'});

Router.route('/', {name: "welcome"});
Router.route('/list', {name: "articlesList"});
Router.route('/thumbs', {name: "articlesThumb"});

