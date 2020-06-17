exports.up = function (knex) {
  return knex.schema
    .createTable("department", (tbl) => {
      tbl.increments();

      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("users", (tbl) => {
      tbl.increments();

      tbl.string("username", 128).notNullable().unique().index();
      tbl.string("password", 256).notNullable();

      tbl
        .integer("department")
        .unsigned()
        .references("department.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("department").dropTableIfExists("users");
};
