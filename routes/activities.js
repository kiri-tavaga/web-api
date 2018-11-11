const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getHobbies()
    .then(activities => {
      res.send({activities})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getHobby(id)
    .then(activity => {
      res.json({activity})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/add', (req, res) => {
  const data = {name: 'Knitting', frequency: 'hourly', level: 1}
  db.addHobby(data)
    .then(activity => {
      res.json({activity})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/:id', (req, res) => {
  const id = Number(req.params.id)
  const data = {name: 'Driving', frequency: 'daily', level: 9}
  db.updateHobby(id, data)
    .then(activity => {
      res.json({activity})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/delete/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteHobby(id)
    .then(activities => {
      res.json({activities})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
