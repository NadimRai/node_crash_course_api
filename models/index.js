var mongoose =  require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/test');

mongoose.Promise = global.Promise;

module.exports.Todo = require("./todo");