'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommendSchema extends Schema {
  up () {
    this.create('commends', (table) => {
      table.increments()
      table.string("cmContent", 500)
      table.string("cmID", 80).notNullable().unique()
      table.string("cmDate", 80)
      table.string("newsID", 80).notNullable()
      table.string("userID", 80)
      table.boolean("cmStatus").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('commends')
  }
}

module.exports = CommendSchema
