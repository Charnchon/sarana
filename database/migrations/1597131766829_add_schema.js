'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddSchema extends Schema {
  up () {
    this.create('adds', (table) => {
      table.increments()
      // table.string("username", 80).notNullable().unique()
      table.string("news_Topic", 254).unique()
      table.string("news_Content", 10000)
      table.string("news_Cg", 80).notNullable()
      // table.string("news_ID", 80).notNullable().unique()
      table.string("news_Date", 80)
      // table.string("writer", 80)
      // table.integer("news_View").notNullable()
      // table.boolean("news_Status")
      table.timestamps()
    })
  }

  down () {
    this.drop('adds')
  }
}

module.exports = AddSchema
