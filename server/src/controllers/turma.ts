import { Request, Response } from 'express';
import { RepositorioTurma } from '../services/repositorioTurma';
import { Turma } from '../models/Turma';

const repositorio = new RepositorioTurma;

const sendJSON = (res: Response, body: any) => res.status(200).header('Content-Type', 'application/json').send(body);

export const getTurmas = (req: Request, res: Response) => sendJSON(res, JSON.stringify(repositorio.turmas));

export const getTurma = (req: Request, res: Response) => {
    const turma = repositorio.getTurma(req.params.id as string);
    sendJSON(res, JSON.stringify(turma));
};

export const postTurma = (req: Request, res: Response) => {
    const bool = repositorio.cadastrar(req.body as Turma);
    if (bool) {
        sendJSON(res, {
            'success': 'A turma foi cadastrada com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'A turma não pode ser cadastrada'
        });
    }
};

export const putTurma = (req: Request, res: Response) => {
    const bool = repositorio.atualizar(req.body as Turma);
    if (bool) {
        sendJSON(res, {
            'success': 'A turma foi atualizada com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'A turma não pode ser atualizada'
        });
    }
};

export const deleteTurma = (req: Request, res: Response) => {
    const bool = repositorio.remover(req.params.id);
    if (bool) {
        sendJSON(res, {
            'success': 'A turma foi removida com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'A turma não pode ser removida'
        });
    }
};