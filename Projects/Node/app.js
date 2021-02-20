const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const articleRoutes = require('./routes/article');

connectDB();



//init App
const app = express();

//bring in models
let Article = require('./models/article');
const { Mongoose } = require('mongoose');

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//Home Route
app.get('/', (req, res) => {

    Article.find({}, function(err, articles){
        if(err){
            console.log('theres an error');
        }else{
            res.render('index', {
                title:'Aricles', 
                articles: articles
            });
        }

});

});


//Add Route
app.get('/articles/add', function(req,res){
    res.render('add_article', {
        title:'add article'
    });  
})


//article route
app.use('/artcle',articleRoutes)
Mongoose.connect('monogodb://localhost/Cluster0', {userNewParser:true});



//start server
app.listen(3000, function(){
    console.log('server started on port 3000')
})