import { Request, Response } from 'express';
import { RepositorioPessoa } from '../services/repositorioPessoa';
import { Pessoa } from '../models/Pessoa';

const repositorio = new RepositorioPessoa;

const sendJSON = (res: Response, body: any) => res.status(200).header('Content-Type', 'application/json').send(body);

export const getPessoas = (req: Request, res: Response) => sendJSON(res, JSON.stringify(repositorio.pessoas));

export const getPessoa = (req: Request, res: Response) => {
    const pessoa = repositorio.getPessoa(req.params.cpf);
    sendJSON(res, JSON.stringify(pessoa));
};

export const postPessoa = (req: Request, res: Response) => {
    const bool = repositorio.cadastrar(req.body as Pessoa);
    if (bool) {
        sendJSON(res, {
            'success': 'A pessoa foi cadastrada com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'A pessoa não pode ser cadastrada'
        });
    }
};

export const putPessoa = (req: Request, res: Response) => {
    const bool = repositorio.atualizar(req.body as Pessoa);
    if (bool) {
        sendJSON(res, {
            'success': 'A pessoa foi atualizada com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'A pessoa não pode ser atualizada'
        });
    }
};

export const deletePessoa = (req: Request, res: Response) => {
    const bool = repositorio.remover(req.params.cpf);
    if (bool) {
        sendJSON (res, {
            'success': 'A pessoa foi removida com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'A pessoa não pode ser removida'
        });
    }
};