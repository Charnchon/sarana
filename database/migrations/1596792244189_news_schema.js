'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NewsSchema extends Schema {
  up () {
    this.create('news', (table) => {
      table.increments()
      table.string("newsTopic", 254).unique()
      table.string("newsContent", 10000)
      table.string("newsCg", 80).notNullable()
      table.string("newsID", 80).notNullable().unique()
      table.string("newsDate", 80)
      table.string("writer", 80)
      table.integer("newsView").notNullable()
      table.boolean("newsStatus")
      table.timestamps()
    })
  }

  down () {
    this.drop('news')
  }
}

module.exports = NewsSchema
