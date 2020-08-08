'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PeopleSchema extends Schema {
  up () {
    this.create('people', (table) => {
      table.increments()
      table.integer('age')
      table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('people')
  }
}

module.exports = PeopleSchema
