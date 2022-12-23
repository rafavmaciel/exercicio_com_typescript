import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('tarefa', function (table) {
        table.increments('id').primary();
        table.string('titulo', 255).notNullable();
        table.date('data_termino')
        table.integer('status').defaultTo(0);
        table.integer('prioridade').defaultTo(0);
        table.string('descricao', 4000).notNullable();
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('tarefa');

}

