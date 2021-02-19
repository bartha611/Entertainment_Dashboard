exports.up = function (knex) {
  return knex.schema.createTable("reviews", function (t) {
    t.increments("id").unsigned().notNullable().primary();
    t.integer("rating").unsigned().notNullable();
    t.integer("movie_id").unsigned().notNullable();
    t.text("review").nullable();
    t.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("reviews");
};
