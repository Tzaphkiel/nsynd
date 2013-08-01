"use strict";
var colors = require('colors')

/* ===================================================
 * CLASS
 * ===================================================*/
var NSyndApi = function(){
  
  //-- PRIVATE MEMBERS
  var self = this;
 
  var initialize = function(){
    //-- connect to database
  };
  var destroy = function(){
    //-- release/clean database connection
  }

  //API METHODS
  var login = function(){
  };


  //-- PRIVILEGED MEMBERS
  
  /*
   *
   */
  this.init =  function(){
    console.log("NSyndApi init...".yellow);
    initialize();
  }
}



/* ===================================================
 * Class Public interface (API)
 * ===================================================*/
NSyndApi.prototype = {
  login: function(username, passwordHash){
    //TODO sanitize the parameters 1st !
    return this.login(username, password);
  },
  logout: function(){
  },
  
  subscribeFeed: function(){
  },
  unsubscribeFeed: function(){
  },
  
  getCategories: function(){
  },
  getFeeds: function(){
  },
  getHeadlines: function(){
  },
  getArticle: function(){
  },
  
  markFeedRead: function(){
  },
  markArticleRead: function(){
  },
  markArticleFavorite: function(){
  },
 
  getArticleTags: function(){
  },
  setArticleTags: function(){
  },
  removeArticleTags: function(){
  }
};


/* ===================================================
 * MODULE EXPORTS
 * ===================================================*/
module.exports = NSyndApi;

