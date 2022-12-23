import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",
    connection: {
      host: 'localhost',
      user: 'root',
      password: '031993Ra',
      database: 'tarefas_comeia',
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    }
  },


};

module.exports = config;
