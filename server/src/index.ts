import * as express from 'express';
import * as bodyParser from 'body-parser';
import { getPessoas, postPessoa, putPessoa, getPessoa, deletePessoa } from './controllers/pessoa';
import { getTurmas, postTurma, putTurma, getTurma, deleteTurma, getIntrutores, getAlunos, getRoteiros, getTurmasAluno } from './controllers/turma';

export const app = express();
export const port = process.env.PORT || 3000;

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(bodyParser.json());

app.get('/pessoas', getPessoas);
app.get('/pessoa/:cpf', getPessoa);
app.post('/pessoa', postPessoa);
app.put('/pessoa', putPessoa);
app.delete('/pessoa/:cpf', deletePessoa);

app.get('/turmas', getTurmas);
app.get('/aluno/:cpf/turmas', getTurmasAluno);
app.get('/turma/:id', getTurma);
app.get('/turma/:turmaId/instrutores', getIntrutores);
app.get('/turma/:turmaId/alunos', getAlunos);
app.get('/turma/:turmaId/roteiros', getRoteiros);

app.post('/turma', postTurma);
app.put('/turma', putTurma);
app.delete('/turma/:id', deleteTurma);

export const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
