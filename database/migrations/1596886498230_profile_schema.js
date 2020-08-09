'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
      table.increments()
      table.string("firstname", 80).notNullable()
      table.string("lastname", 80).notNullable()
      table.integer("age", 80).notNullable()
      table.string("gender", 80).notNullable()
      table.string("userID", 80).notNullable().unique()
      table.string("username", 80).notNullable().unique()
      table.string("email", 254).notNullable().unique()
      table.string("password", 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfileSchema
