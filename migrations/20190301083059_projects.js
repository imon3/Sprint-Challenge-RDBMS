
exports.up = function (knex, Promise) {
    return knex.schema.creteTable('projects', function (tbl) {
        tbl
            .increments()

        tbl
            .string('name', 128)
            .notNullable()
            .unique()

        tbl
            .string('description', 50000)
            .notNullable()

        tbl
            .boolean('completed')
            .notNullable()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExist('projects')
};
