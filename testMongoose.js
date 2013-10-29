var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
var PostSchema = new Schema({
  author : ObjectId
  , title : String
  , body : String
  , date : Date
});

console.log('Schema created...');
var Post = mongoose.model('BlogPost', PostSchema);

console.log('Post created...');
var Post = mongoose.model('BlogPost', PostSchema);

new Post({title: "test title"}).save(function(err){
  console.log('That was easy - storing a new Post entry in mongo');
});


//var Cat = mongoose.model('Cat', { name: String });

//var kitty = new Cat({ name: 'Zildjian' });
//kitty.save(function (err) {
//  if (err) // ...
//    console.log('meow');
//});
console.log('At the end of the program...');

console.log('search: ');
Post.find({title: 'test'}).run(function(err, post){
  console.log('found smth?');
  console.log(post);
});
