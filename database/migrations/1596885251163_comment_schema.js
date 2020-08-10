'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.increments()
      table.string("cm_Content", 500)
      table.string("cm_ID", 80).notNullable().unique()
      table.string("cm_Date", 80)
      table.string("news_ID", 80).notNullable()
      table.string("user_ID", 80)
      table.boolean("cm_Status").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('comments')
  }
}

module.exports = CommentSchema
