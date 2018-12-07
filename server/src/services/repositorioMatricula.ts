import { Matricula } from "../models/Matricula";
import { Pessoa } from "../models/Pessoa";
import { Turma } from "../models/Turma";
import { Avaliacao } from "../models/Avaliacao";
import { RespostaRoteiro } from "../models/RespostaRoteiro";

export class RepositorioMatricula {
    private matricula: Matricula[];

    public getTurmas(cpfAluno: string): Turma[] {
        // TODO implementar getTurmas
        return null;
    }

    public getAlunos(idTurma: string): Pessoa[] {
        // TODO implementar getAlunos
        return null;
    }

    public getAvaliacao(cpfAluno: string, idTurma: string): Avaliacao[] {
        // TODO implementar getAvaliacao
        return null;
    }

    public getRespostaAluno(cpfAluno: string, idTurma: string): RespostaRoteiro[] {
        //TODO getRespostaAluno
        return null;
    }
}