const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt  = require('bcryptjs')

let createUser = (req, res) => {
    let objNewUser = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password)
    }
    User.create(objNewUser)
    .then(data => {
        res.send({
            message: 'User created',
            data
        })
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

let findAllUser = (req, res) => {
    User.find({})
    .then(data => {
        res.send({
            message: 'All User lists',
            data
        })
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

let deleteUser = (req, res) => {
    User.remove({_id: req.params.id})
    .then(data => {
        res.send({
            message: 'User deleted',
            data
        })
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

let findAUser = (req, res) => {
    User.findById(req.params.id)
    .then(data => {
        res.send({
            message: 'Find a user',
            data
        })
    })
    .catch(err => {
        res.status(404).send(err)
    })
}


let login = (req, res) => {
    let jwtSecret = 'w5f45wf4'
    User.findOne({
        username: req.body.username,
    })
    .then(data => {
        let payload = {
            _id: data.id,
            username: data.username,
        }
        let token = jwt.sign(payload, jwtSecret)
        res.send({
            token: token,
            message: 'Got token'
        })
        console.log(`ini data`, data)
    })
    .catch(err => {
        res.status(401).send(err)
    })
}

let updateUser = (req, res) => {
    let objUpdateUser = {
        gender: req.body.gender
    }
    User.findByIdAndUpdate(req._id, objUpdateUser)
    .then(data => {
        res.send({
            message: 'User, updated',
            data
        })
    })
    .catch(err => {
        res.status(401).send(err)
    })
}

module.exports = {
    createUser,
    findAllUser,
    findAUser,
    deleteUser,
    login,
    updateUser
}