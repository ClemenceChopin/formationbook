const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const bookSchema = require('./books').schema; 

const UserShema = new Schema({
        nom: String,
        books : [bookSchema],
        blogBooks : [{
            type:Schema.Types.ObjectId,
            ref : 'blogBook'
        }]
}); 

UserShema.virtual('countBooks').get(function(){
    return this.books.length;
});

const userModel = mongoose.model('user', UserShema);

module.exports = userModel;
