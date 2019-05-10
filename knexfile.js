module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/users.db3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};

//npx knex init
//npx knex migrate: make create_roles_table
//npx knex migrate:latest

//remove a added table
// npx knex migrate:rollback

//seeding
//npx knex seed:make 001-roles
// npx knex seed:run
