var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var MessageSchema   = new Schema({
  text:       String,
  date:       Date,
  isCreated:  Boolean,
  author:     {
    name:     String,
    img:      String
  },
  roomId:     String
});

module.exports = mongoose.model('Message', MessageSchema);
