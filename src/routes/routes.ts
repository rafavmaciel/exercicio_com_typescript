import { Router } from "express";
import jwt = require('../services/jwt');
import { Request, Response } from 'express';
import TarefasController  from "../controllers/tarefasController";

const router = Router();

router.get("/getJwtToken", (req, res) => {
    const token = jwt.createJWT();
    res.status(200).send({ token });
    }
);

router.get("/tarefas", jwt.verifyJWT, (req: Request, res: Response) => {
    TarefasController.getTarefas(req, res);
});

router.get("/tarefa/:id", jwt.verifyJWT, (req: Request, res: Response) => {
    TarefasController.getTarefa(req, res);
});

router.post("/tarefa", jwt.verifyJWT, (req: Request, res: Response) => {
    TarefasController.createTarefa(req, res);
});


export default router;