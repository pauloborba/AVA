import { Request, Response } from 'express';
import { RepositorioMatricula } from '../services/repositorioMatricula';
import { Matricula } from '../models/Matricula';
import { QuestaoRespondida } from '../models/QuestaoRespondida';

const repositorio = new RepositorioMatricula;

const sendJSON = (res: Response, body: any) => res.status(200).header('Content-Type', 'application/json').send(body);


export const getMatriculas = (req: Request, res: Response) => sendJSON(res, JSON.stringify(repositorio.matricula));

export const getAvaliacoes = (req: Request, res: Response) => {
    const avaliacoes = repositorio.getAvaliacoes(req.params.cpf, req.params.turmaId);
    sendJSON(res, JSON.stringify(avaliacoes));
};

export const getAvaliacao = (req: Request, res: Response) => {
    const avaliacao = repositorio.getAvaliacao(req.params.cpf, req.params.turmaId, req.params.roteiroId);
    sendJSON(res, JSON.stringify(avaliacao));
};

export const getRespostasAluno = (req: Request, res: Response) => {
    const respostasAluno = repositorio.getRespostasAluno(req.params.cpf, req.params.turmaId);
    sendJSON(res, JSON.stringify(respostasAluno));
};

export const getQuestoesRespondidas = (req: Request, res: Response) => {
    const questoesRespondidas = repositorio.getQuestoesRespondidas(req.params.cpf, req.params.turmaId, req.params.roteiroId);
    sendJSON(res, JSON.stringify(questoesRespondidas));
};

export const addQuestaoRespondida = (req: Request, res: Response) => {
    const bool = repositorio.addQuestaoRespondida(req.params.cpf, req.params.turmaId, req.params.roteiroId, req.params.noQuestao, QuestaoRespondida.fromJSON(req.body));
    if (bool) {
        sendJSON(res, {
            'success': 'A QuestaoRespondida foi cadastrada com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'A QuestaoRespondida não pode ser cadastrada'
        });
    }
};

export const postMatricula = (req: Request, res: Response) => {
    const bool = repositorio.cadastrar(Matricula.fromJSON(req.body));
    if (bool) {
        sendJSON(res, {
            'success': 'A matricula foi cadastrada com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'A matricula não pode ser cadastrada'
        });
    }
};

export const deleteMatricula = (req: Request, res: Response) => {
    const bool = repositorio.remover(req.params.cpf, req.params.turmaId);
    if (bool) {
        sendJSON (res, {
            'success': 'A matricula foi removida com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'A matricula não pode ser removida'
        });
    }
};