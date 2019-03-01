
exports.up = function (knex, Promise) {
    return knex.schema.createTable('actions', function (tbl) {
        tbl
            .increments()

        tbl
            .string('action_description', 50000)
            .notNullable()

        tbl
            .string('notes', 10000)

        tbl
            .boolean('completed')
            .notNullable()

        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExist('actions')
};
