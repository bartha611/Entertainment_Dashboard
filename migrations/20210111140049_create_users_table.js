exports.up = function (knex) {
  return knex.schema.createTable("users", function (t) {
    t.increments("id").unsigned().notNullable().primary();
    t.string("username").notNullable().unique().index();
    t.string("email").notNullable().unique().index();
    t.string("profile_photo").nullable();
    t.string("password").notNullable();
    t.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
