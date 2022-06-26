exports.up = function(knex) {
    return knex.schema.createTable("messages", (t) => {
        t.increments("id");
        t.text("message");
        t.timestamp("created_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
        t.string("user_id")
            .references("id")
            .inTable("users")
            .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("messages"); 
};
