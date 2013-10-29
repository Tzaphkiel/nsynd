"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var User = new Schema({
    username: {type: String, index: true},
    password : String,
    email : { type: String, unique: true},
    lastConnected: Date
});

//-- tags are global available entities.
var Tag = new Schema({
    label: String
});

//-- feeds are globaly available
var Feed = new Schema({
    label: String,
    url: String,
    lastUpdated: Date,
    //?? icon: Buffer,
});

var Article = new Schema({
    parentFeed: ObjectId,
    title: String,
    url: String,
    pubDate: Date,
    author: String,
    contentShort: String,
    content: String,
    // per user tag: [Tag]
});

//-- user dependant schemas:
//-- categories are user dependant, each user can have their own set of categories. They are hierarchical !
var Category = new Schema({
    user: ObjectId,
    label: {type: String, unique: true, index: true},
    parent: ObjectId
});
//-- used to check which feed the user has and what tags he's assigned to it.
var UserFeed = new Schema({
    user: ObjectId,
    feed: ObjectId,
    tags: [Tag]
});
//-- used to check which article the user has read.
var UserArticle = new Schema({
    user: ObjectId,
    article: ObjectId
    //feedref for easieer articleId lookup ?
});



/* ===================================================
 * MODULE EXPORTS
 * ===================================================*/
//module.exports = NSyndApi;

