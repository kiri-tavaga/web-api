const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  getHobbies,
  getHobby,
  addHobby,
  updateHobby
}

function getUsers (testDb) {
  const db = testDb || connection
  return db('users').select()
}

function getUser (id, testDb) {
  const db = testDb || connection
  return db('users').where('id', id).first()
}

function addUser (data, db = connection) {
  return db('users').insert(data)
}

function updateUser (id, user, db = connection) {
  return db('users').where('id', id).update(user)
}

// Hobbies

function getHobbies (testDb) {
  const db = testDb || connection
  return db('activities').select()
}

function getHobby (id, testDb) {
  const db = testDb || connection
  return db('activities').where('id', id).first()
}

function addHobby (data, db = connection) {
  return db('activities').insert(data)
}

function updateHobby (id, user, db = connection) {
  return db('activities').where('id', id).update(user)
}
