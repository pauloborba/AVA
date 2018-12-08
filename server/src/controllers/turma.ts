import { Request, Response } from 'express';
import { RepositorioTurma } from '../services/repositorioTurma';
import { Turma } from '../models/Turma';
import { Pessoa } from '../models/Pessoa';
import { Roteiro } from '../models/Roteiro';

const repositorio = new RepositorioTurma;

const sendJSON = (res: Response, body: any) => res.status(200).header('Content-Type', 'application/json').send(body);


// Gets -----------------------------------------------------------------------------------

export const getTurmas = (req: Request, res: Response) => sendJSON(res, JSON.stringify(repositorio.turmas));

export const getTurma = (req: Request, res: Response) => {
    const turma = repositorio.getTurma(req.params.id as string);
    sendJSON(res, JSON.stringify(turma));
};

export const getTurmasAluno = (req: Request, res: Response) => {
    const turmas = repositorio.getTurmasAluno(req.params.cpf);
    sendJSON(res, JSON.stringify(turmas));
};

export const getIntrutores = (req: Request, res: Response) => {
    const instrutores = repositorio.getInstrutores(req.params.turmaId as string);
    sendJSON(res, JSON.stringify(instrutores));
};

export const getAlunos = (req: Request, res: Response) => {
    const alunos = repositorio.getAlunos(req.params.turmaId);
    sendJSON(res, JSON.stringify(alunos));
};

export const getRoteiros = (req: Request, res: Response) => {
    const roteiros = repositorio.getRoteiros(req.params.turmaId);
    sendJSON(res, JSON.stringify(roteiros));
};


// Posts -----------------------------------------------------------------------------------

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

export const postInstrutor = (req: Request, res: Response) => {
    const bool = repositorio.postInstrutor(req.params.turmaId, req.body as Pessoa);
    if (bool) {
        sendJSON(res, {
            'success': 'O instrutor foi cadastrado com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'O instrutor não pode ser cadastrada'
        });
    }
};

export const postAluno = (req: Request, res: Response) => {
    const bool = repositorio.postAluno(req.params.turmaId, req.body as Pessoa);
    if (bool) {
        sendJSON(res, {
            'success': 'O aluno foi cadastrado com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'O aluno não pode ser cadastrada'
        });
    }
};

export const postRoteiro = (req: Request, res: Response) => {
    const bool = repositorio.postRoteiro(req.params.turmaId, req.body as Roteiro);
    if (bool) {
        sendJSON(res, {
            'success': 'O roteiro foi cadastrado com sucesso'
        });
    } else {
        res.status(400).send({
            'failure': 'O roteiro não pode ser cadastrada'
        });
    }
};


// Puts -----------------------------------------------------------------------------------

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

// Delete ---------------------------------------------------------------------------

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



//hasInstrutor
//hasAluno
//hasRoteiro


//removeInstrutor
//removeAluno
//removeRoteiro