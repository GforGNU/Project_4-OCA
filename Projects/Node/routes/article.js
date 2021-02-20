const express = require('express');
var article = require('../models/article');
const router = express();

router.post('/addarticle', (req,res)=>{
    let articles = {
        title:'test',
        author:'lojain',
        body:'test body'
    }
    article.create(articles).then(function(articledata){
        res.send(articledata)
    })
})

router.get('/test', (req,res)=>{
    res.send("test")
})

module.exports = router;