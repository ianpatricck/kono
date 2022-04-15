module.exports = {

    development: {
        client: 'mysql2',
        connection: {
            database: 'kono',
            user:     'patrick',
            password: 'patrickpass'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'kono_migrations',
            directory: __dirname + '/src/db/migrations'
        },
        seeds: {
            directory: __dirname + '/src/db/seeds'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user:     'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};
