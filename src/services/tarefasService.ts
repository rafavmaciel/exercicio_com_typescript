const db = require("../database/mysqlCon");

interface Tarefa {
    id: number;
    titulo: string;
    data_termino: Date;
    status: number;
    prioridade: number;
    descricao: string;
}

export default class TarefaService {
    public static async getTarefas(): Promise<Tarefa[]> {
        try {
            const tarefas = await db("tarefa").select("*");
            return tarefas;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    public static async getTarefa(id: number): Promise<any> {
        try {
            const tarefa = await db("tarefa").select("*").where("id", id);
            return tarefa;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    public static async createTarefa(tarefa: Tarefa) {
        try {
            const status = await db("tarefa").insert(tarefa);
            return status;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    public async updateTarefa() {
        return null;
    }
}
