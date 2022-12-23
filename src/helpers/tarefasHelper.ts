import { Request } from "express";

export default class TarefasHelper {
    public static validarCampos(req: Request): void {
        if (!req.body.titulo) {
            throw "O campo título é obrigatório";
        }
        if (!req.body.descricao) {
            throw "O campo descrição é obrigatório";
        }
        if (typeof req.body.titulo != "string") {
            throw "O campo título deve ser uma string";
        }
        if (typeof req.body.descricao != "string") {
            throw "O campo descrição deve ser uma string";
        }
        if (req.body.data_termino) {
            if (new Date(req.body.data_termino) < new Date()) {
                throw "A data de término deve ser maior que a data atual";
            }
        }
        if (req.body.prioridade) {
            if (req.body.prioridade < 1 || req.body.prioridade > 5) {
                throw "A prioridade deve ser um número entre 1 e 5";
            }
        }

        if (req.body.status) {
            if (req.body.status < 0 || req.body.status > 1) {
                throw "O status deve ser 0 (não concluída) ou 1 (concluída)";
            }
        }
    }
}
