exports.up = function(knex) {
    return knex.schema.createTable("users", (t) => {
        t.string("id").notNull().primary();
        t.string("name", 50).notNull();
        t.string("tag", 9).notNull().unique();
        t.text("bio").nullable();
        t.string("email", 80).notNull().unique();
        t.string("password", 100).notNull();
        t.string("avatar").nullable();
        t.timestamp("created_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users"); 
};
