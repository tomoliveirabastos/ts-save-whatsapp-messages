"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_root_path_1 = __importDefault(require("app-root-path"));
// Update with your config settings.
const config = {
    dev: {
        client: "sqlite3",
        connection: {
            filename: `${app_root_path_1.default.path}/db.sqlite3`
        },
        useNullAsDefault: true,
        migrations: {
            tableName: "knex_migrations"
        }
    }
};
exports.default = config;
