const Article = require('../models/article')

let createArticle = (req, res) => {
    let objNewArticle = {
        userId: req._id,
        title: req.body.title,
        text: req.body.text,
        date: new Date(Date.now()).toLocaleString()
    }
    Article.create(objNewArticle)
    .then(data => {
        res.send({
            message: 'Article created',
            data
        })
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

let getAllArticle = (req, res) => {
    Article.find()
    .then(data => {
        res.send({
            message: 'List of article',
            data
        })
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

let getMyArticle = (req, res) => {
    Article.find({userId: req._id})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

let deleteArticle = (req, res) => {
    Article.findByIdAndRemove({
        _id:req.params.id,
        userId: req._id
    })
    .then(data => {
        res.send({
            message: 'Data deleted',
            data
        })
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

let findAnArticle = (req, res) => {
    Article.findById(req.params.id)
    .then(data => {
        res.send({
            message: 'Find an article',
            data
        })
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

let updateArticle = (req, res) => {
    let objUpdateArticle = {
        title: req.body.title,
        text : req.body.text,
        date : `Edited: ${new Date(Date.now()).toLocaleString()}`
    }
    Article.findByIdAndUpdate({_id:req.params.id, userId: req._id}, objUpdateArticle)
    .then(data => {
        res.send({
            message: 'Article updated',
            data
        })
        console.log(req.body)
    })
    .catch(err => {
        res.status(404).send(err)
    })
}



module.exports = {
    createArticle,
    getAllArticle,
    getMyArticle,
    deleteArticle,
    findAnArticle,
    updateArticle
}