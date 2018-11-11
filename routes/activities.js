const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getHobbies()
    .then(users => {
      res.send({users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getHobby(id)
    .then(user => {
      res.json({user: user})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/add', (req, res) => {
  const data = {name: 'Chris', email: 'chris@email'}
  db.addHobby(data)
    .then(user => {
      res.json({user})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/:id', (req, res) => {
  const id = Number(req.params.id)
  const data = {name: 'Dani', email: 'dani@email'}
  db.updateHobby(id, data)
    .then(user => {
      res.json({user: user})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
module.exports = router