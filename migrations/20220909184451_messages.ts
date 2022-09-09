import { Knex } from "knex";


export async function up(knex: Knex): Promise<void>
{

       return knex.schema
              .createTable('messages', function (table)
              {
                     table.increments('id');
                     table.text("message").nullable()
                     table.string('phone', 255).nullable()
                     table.string("fileSrc", 255).nullable()
                     table.boolean('hasMedia')
              })
}


export async function down(knex: Knex): Promise<void>
{
}

