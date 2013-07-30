"use strict";
var colors = require('colors');
var express = require('express');
var path = require('path');
var http = require('http');
//var jade = require('jade');


/* ===================================================
 * CLASS
 * ===================================================*/
var NSyndApp = function(){
  
  //-- PRIVATE MEMBERS
  
  var ROOT_PATH_ACCESS = '../../';
  var self = this;
  
  var setupServer = function(){
    console.log("Setting up server...".yellow);
    // Set the environment variables we need.
    self.ip = process.env.NSYND_INTERNAL_IP;
    self.port = process.env.NSYND_INTERNAL_PORT || 8080;

    if (typeof self.ip === "undefined") {
      // Log errors but continue with 127.0.0.1 - this allows us to run/test the app locally.
      console.warn('No OPENSHIFT_INTERNAL_IP var, using 127.0.0.1');
      self.ip = "127.0.0.1";
    };
  };

  /*
   * Create the server.
   */
  var createServer = function(){
    //-- create webapp
    self.app = express();
    //self.app.set('view engine', 'jade');
    //self.app.set('views',path.join(__dirname, ROOT_PATH_ACCESS , '/views'));
    //self.app.use(express.static(path.join(__dirname, ROOT_PATH_ACCESS, 'public')));
    self.app.use(express.logger('dev'));
    self.app.use(express.favicon());
    self.app.use(express.bodyParser());
    self.app.use(express.methodOverride());
    self.app.use(self.app.router);

    // development only
    //if ('development' == self.app.get('env')) {
      self.app.use(express.errorHandler());
    //}
  }

  /*
   * create the routes.
   */
  var setRoutes = function() {
    self.routes = { };

    //-- default app page
    self.routes['/'] = function(req, res) {
      //-- use the template engine to render 'index'
      //res.render('index', {'title':'NSynd : syndication feed reader by leroyse'});
      res.send("Root resource reached");
    };

    self.routes['/login'] = function(req, res) {
      res.send("Login res");
    };

    self.routes['/logout'] = function(req, res) {
      res.send("Logout res");
    };
    
    self.routes['/subscribeFeed'] = function(req, res) {
      var body = 'Subscription to feed res.';
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', body.length);
      res.end(body);
    };
    //-- feed manipulation
    /*
    self.routes['/feed'] = function(req, res) {
      res.render('action', {'title':'NSynd ; syndication feed reader by leroyse', 'actionType': 'list feeds', 'param': ''});
    };
    self.routes['/feed/:id'] = function(req, res) {
      res.render('action', {'title':'NSynd ; syndication feed reader by leroyse', 'actionType': 'show feed', 'param': req.params.id});
    };
    */
    //-- setup the roots in the server
    for (var r in self.routes) {
      self.app.get(r, self.routes[r]);
    }
  }

  /**
   *  terminator === the termination handler
   *  Terminate server on receipt of the specified signal.
   *  @param {string} sig  Signal to terminate on.
   */
  var terminator = function(sig){
    if (typeof sig === "string") {
      console.log('%s: Received %s - terminating sample app ...'.red, Date(Date.now()), sig);
      process.exit(1);
    }
    console.log('%s: Node server stopped.'.yellow, Date(Date.now()) );
  }
  /*
   *
   */
  var setupTerminationHandlers = function(){
    console.log("Setting up termination handlers...".yellow);
    // Process on exit and signals.
    process.on('exit', function() { terminator(); });

    // Removed 'SIGPIPE' from the list - bugz 852598.
    [ 'SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT', 
      'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'].forEach(
      function(element, index, array) {
        process.on(element, function() { terminator(element); });
      }
    );
  };


  //-- PRIVILEGED MEMBERS
  
  /*
   *
   */
  this.init =  function(){
    console.log("NSyndApp init...".yellow);

    setupServer();
    createServer();
    setRoutes();
    setupTerminationHandlers();
  }

  this.listen = function(){
    self.app.listen(self.port, self.ip);
  }
}



/* ===================================================
 * Class Public interface
 * ===================================================*/
NSyndApp.prototype = {
  initialize: function(){
    this.init();
  },

  start: function(){
    //self.appSockets.listen(self.port, self.ip);
    this.listen();
  }
};


/* ===================================================
 * MODULE EXPORTS
 * ===================================================*/
module.exports = NSyndApp;


/* ===================================================
 * LOCAL EXECUJTION HOOK
 * ===================================================*/
if (require.main === module)
{
  console.log('LOCAL MODULE START'.red.bold);
  var nsyndServer = new NSyndApp();
  nsyndServer.initialize();
  nsyndServer.start();
}
