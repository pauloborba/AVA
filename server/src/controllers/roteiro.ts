import { Request, Response } from 'express';
import { Roteiro } from '../models/Roteiro';
import { RepositorioRoteiro } from '../services/repositorioRoteiro';
import { Questao } from '../models/Questao';

const repositorio = new RepositorioRoteiro;

const sendJSON = (res: Response, body: any) => res.status(200).header('Content-Type', 'application/json').send(body);

export const getRoteiros = (req: Request, res: Response) => sendJSON(res, JSON.stringify(repositorio.roteiros));

export const getRoteiro = (req: Request, res: Response) => {
    const roteiro = repositorio.getRoteiro(req.params.roteiroId);
    sendJSON(res, JSON.stringify(roteiro));
};

export const getRoteirosDono = (req: Request, res: Response) => {
    const roteiros = repositorio.getRoteirosDono(req.params.donoCpf);
    sendJSON(res, JSON.stringify(roteiros));
};

export const getNoQuestoes = (req: Request, res: Response) => {
    const noQuestoes = repositorio.getNoQuestoes(req.params.roteiroId);
    sendJSON(res, JSON.stringify(noQuestoes));
};

export const getQuestoes = (req: Request, res: Response) => {
    const questoes = repositorio.getQuestoes(req.params.roteiroId);
    sendJSON(res, JSON.stringify(questoes));
};


export const postRoteiro = (req: Request, res: Response) => {
    const bool = repositorio.cadastrar(Roteiro.fromJSON(req.body));
    if (bool) {
        sendJSON(res, {
            'success': 'O roteiro foi cadastrado com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'O roteiro não pode ser cadastrado'
        });
    }
};

export const postQuestao = (req: Request, res: Response) => {
    const bool = repositorio.addQuestao(req.params.roteiroId, Questao.fromJSON(req.body));
    if (bool) {
        sendJSON(res, {
            'success': 'A questao foi cadastrada com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'A questao não pode ser cadastrada'
        });
    }
};

export const putRoteiro = (req: Request, res: Response) => {
    const bool = repositorio.atualizar(Roteiro.fromJSON(req.body));
    if (bool) {
        sendJSON(res, {
            'success': 'O roteiro foi atualizado com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'O roteiro não pode ser atualizado'
        });
    }
};

export const deleteRoteiro = (req: Request, res: Response) => {
    const bool = repositorio.remover(req.params.roteiroId);
    if (bool) {
        sendJSON (res, {
            'success': 'O roteiro foi removido com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'O roteiro não pode ser removido'
        });
    }
};

export const deleteQuestao = (req: Request, res: Response) => {
    const bool = repositorio.removeQuestao(req.params.roteiroId, req.params.index);
    if (bool) {
        sendJSON (res, {
            'success': 'O roteiro foi removido com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'O roteiro não pode ser removido'
        });
    }
};