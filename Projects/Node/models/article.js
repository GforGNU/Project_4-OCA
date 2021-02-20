let mongoose = require('mongoose');

//Articel Schema

let articleSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true 
    },
    body:{
        type: String,
        required: true
    }
});

let Aricle = module.exports = mongoose.model('Article', articleSchema)