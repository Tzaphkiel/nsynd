Router.configure({
  layoutTemplate: "layout",
  loadingTemplate: "loading",
  //notFoundTemplate: "notFound"
  
  waitOn: function() {
    return  [Meteor.subscribe('tags'), Meteor.subscribe('categories'), Meteor.subscribe('feeds'), Meteor.subscribe('articles')];
  }
  
});

Router.route('/', {name: "welcome"});
Router.route('/list', {name: "articlesList"});
Router.route('/thumbs', {name: "articlesThumb"});

