exports.up = function(knex) {
    return knex.schema.createTable("users", (t) => {
        t.string("id").notNull().primary();
        t.string("name", 50).notNull();
        t.string("tag", 6).notNull();
        t.text("bio").nullable();
        t.string("email", 80).notNull();
        t.string("password", 40).notNull();
        t.string("avatar").nullable();
        t.timestamp("created_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.dropTableIfExists("users"); 
};
