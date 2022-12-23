import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("tarefa").del();

    // Inserts seed entries
    await knex("tarefa").insert([
        { titulo: "tarefa 1", data_termino: "2022-12-25", status: 0, prioridade: 0, descricao: "descricao 1" },
        { titulo: "tarefa 2", data_termino: "2022-12-25", status: 0, prioridade: 0, descricao: "descricao 2" },
        { titulo: "tarefa 3", data_termino: "2022-12-25", status: 0, prioridade: 0, descricao: "descricao 3" },
        

    ]);
};
