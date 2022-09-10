import type { Knex } from "knex"
import rootPath from 'app-root-path'

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  dev: {
    client: "sqlite3",
    connection: {
      filename: `${rootPath.path}/db.sqlite3`
    },
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations"
    }
  }
};

export default config;
