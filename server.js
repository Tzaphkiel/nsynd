"use strict";

var nsynd = require('./lib/nsyndapp');

/* ===================================================
 * CLASS
 * ===================================================*/
var App = function(){
  //-- PRIVATE MEMBERS
  var self = this;

  //-- PRIVILEGED MEMBERS
  this.init = function(){
    var nsyndServer = new nsynd();
    nsyndServer.init();
    nsyndServer.start();
  }
}

/* ===================================================
 * Class Public interface
 * ===================================================*/
App.prototype = {
  initialize: function(){
    this.init();
  }
};

/* ===================================================
 * MODULE EXPORTS
 * ===================================================*/
module.exports = App;

/* ===================================================
 * APPLICATION ENTRY POINT
 * ===================================================*/
if (require.main === module)
{
  console.log('LOCAL MODULE START'.red.bold);
  var nsyndapp = new App();
  nsyndapp.initialize();
}
