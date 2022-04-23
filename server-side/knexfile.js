require("dotenv").config();

module.exports = {

    development: {
        client: 'mysql2',
        connection: {
            database: process.env.DB_NAME,
            user:     process.env.DB_USER,
            password: process.env.DB_PASS
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'kono_migrations',
            directory: __dirname + '/src/db/migrations'
        } 
    }
};
