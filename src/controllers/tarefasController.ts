import { Request, Response } from "express";
import TarefaService from "../services/tarefasService";
import TarefasHelper from "../helpers/tarefasHelper";
export default class TarefasController {
    public static async getTarefas(req: Request, res: Response) {
        try {
            const tarefas = await TarefaService.getTarefas();
            res.status(200).send({ message: tarefas });
        } catch (err) {
            res.status(500).send(err);
        }
    }

    public static async getTarefa(req: Request, res: Response) {
        try {
            let id: number = parseInt(req.params.id);
            const tarefa = await TarefaService.getTarefa(id);
            res.status(200).send({ message: tarefa });
        } catch (err) {
            res.status(500).send(err);
        }
    }

    public static async createTarefa(req: Request, res: Response) {
        try {
            const camposTarefa = req.body;
            TarefasHelper.validarCampos(req)
            const status = await TarefaService.createTarefa(camposTarefa);
            res.status(200).send({ message: status });
        } catch (err) {
            res.status(500).send(err);
        }
    }

    public static async updateTarefa(req: Request, res: Response) {
        return null;
    }
}
