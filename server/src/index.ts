import * as express from 'express';
import * as bodyParser from 'body-parser';
import { getPessoas, postPessoa, putPessoa, getPessoa, deletePessoa } from './controllers/pessoa';
import { getTurmas, postTurma, putTurma, getTurma, deleteTurma, getIntrutores, getAlunos, postInstrutor, postAluno, postRoteiroTurma, deleteInstrutor, deleteAluno, hasAluno, hasInstrutor, hasRoteiro, deleteRoteiroTurma, getRoteirosTurma, getTurmasPessoa } from './controllers/turma';
import { getAvaliacoes, getAvaliacao, getRespostasAluno, getQuestoesRespondidas, addQuestaoRespondida, postMatricula, deleteMatricula, getMatriculas, addAvaliacao } from './controllers/matricula';
import { getRoteiro, getNoQuestoes, getQuestoes, postRoteiro, postQuestao, putRoteiro, deleteQuestao, deleteRoteiro, getRoteiros, getRoteirosDono } from './controllers/roteiro';

export const app = express();
export const port = process.env.PORT || 3000;

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(bodyParser.json());

// Pessoa -------------------------------------------------------------
app.get('/pessoas', getPessoas);
app.get('/pessoa/:cpf', getPessoa);
app.post('/pessoa', postPessoa);
app.put('/pessoa', putPessoa);
app.delete('/pessoa/:cpf', deletePessoa);

// Turma --------------------------------------------------------------
app.get('/turmas', getTurmas);
app.get('/turma/:turmaId', getTurma);
app.get('/pessoa/:cpf/turmas', getTurmasPessoa);
app.get('/turma/:turmaId/instrutores', getIntrutores);
app.get('/turma/:turmaId/alunos', getAlunos);
app.get('/turma/:turmaId/roteiros', getRoteirosTurma);
app.get('/turma/:turmaId/instrutor/:cpf', hasInstrutor);
app.get('/turma/:turmaId/aluno/:cpf', hasAluno);
app.get('/turma/:turmaId/roteiro/:roteiroId', hasRoteiro);

app.post('/turma', postTurma);
app.post('/turma/:turmaId/instrutor', postInstrutor);
app.post('/turma/:turmaId/aluno', postAluno);
app.post('/turma/:turmaId/roteiro', postRoteiroTurma);

app.put('/turma', putTurma);

app.delete('/turma/:turmaId', deleteTurma);
app.delete('/turma/:turmaId/instrutor/:cpf', deleteInstrutor);
app.delete('/turma/:turmaId/aluno/:cpf', deleteAluno);
app.delete('/turma/:turmaId/roteiro/:roteiroId', deleteRoteiroTurma);

// Matricula --------------------------------------------------------------
app.get('/matriculas', getMatriculas);
app.get('/matricula/aluno/:cpf/turma/:turmaId/avaliacoes', getAvaliacoes);
app.get('/matricula/aluno/:cpf/turma/:turmaId/respostasaluno', getRespostasAluno);
app.get('/matricula/aluno/:cpf/turma/:turmaId/roteiro/:roteiroId/avaliacao', getAvaliacao);
app.get('/matricula/aluno/:cpf/turma/:turmaId/roteiro/:roteiroId/questoesrespondidas', getQuestoesRespondidas);

app.post('/matricula/aluno/:cpf/turma/:turmaId/roteiro/:roteiroId', addAvaliacao);
app.post('/matricula/aluno/:cpf/turma/:turmaId/roteiro/:roteiroId/questao/:noQuestao', addQuestaoRespondida);
app.post('/matricula', postMatricula);

app.delete('/matricula/aluno/:cpf/turma/:turmaId', deleteMatricula);

// Roteiro --------------------------------------------------------------
app.get('/roteiros', getRoteiros);
app.get('/roteiro/:roteiroId', getRoteiro);
app.get('/roteiros/dono/:donoCpf', getRoteirosDono);
app.get('/roteiro/:roteiroId/noquestoes', getNoQuestoes);
app.get('/roteiro/:roteiroId/questoes', getQuestoes);

app.post('/roteiro', postRoteiro);
app.post('/roteiro/:roteiroId/questao', postQuestao);

app.put('/roteiro', putRoteiro);

app.delete('/roteiro/:roteiroId', deleteRoteiro);
app.delete('/roteiro/:roteiroId/index/:index', deleteQuestao);

export const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
