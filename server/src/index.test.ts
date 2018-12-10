import * as http from 'http';
import * as request from 'request-promise';
import { port, server } from './';
import { Pessoa } from './models/Pessoa';
import { Turma } from './models/Turma';
import { Matricula } from './models/Matricula';
import { Roteiro } from './models/Roteiro';
import { Avaliacao } from './models/Avaliacao';
import { RespostaRoteiro } from './models/RespostaRoteiro';
import { Meta } from './models/Meta';

const base_url = `http://localhost:${port}`;

describe('O servidor', () => {
    let serverInstance: http.Server;

    beforeAll(() => serverInstance = server);
    
    it('cadastra pessoa', () => {
        const options = {
            uri: base_url + '/pessoa',
            body: new Pessoa,
            json: true,
        };
        options.body.cpf ="123";
        options.body.nome = "guila";
        return request.post(options)
        .then((body) => expect(body).toEqual({"success": "A pessoa foi cadastrada com sucesso"}))
        .catch((error) => expect(error).toBeNull());
    });

    it('cTURMA', () => {
        // const options = {
        //     uri: base_url + '/turma',
        //     body: new Turma,
        //     json: true,
        // };
        // options.body.id = "if688";
        // const a = new Pessoa;
        // a.cpf = "123";
        // a.nome = "guila";
        // options.body.alunos = [a,a,a,a];
        // return request.post(options)
        // .then((body) => expect(body).toEqual({"success": "A pessoa foi cadastrada com sucesso"}))
        // .catch((error) => expect(error).toBeNull());
    });
    
    it('RMMMMMMMM', () => {
        const options = {
            uri: base_url + '/aluno/123/turmas'
        };
        return request.get(options)
        .then((body) => expect(body).toEqual([]))
        .catch((error) => expect(error).toBeNull());
    });


    /*
    it('cadastra pessoa', () => {
        const options = {
            method: 'POST',
            uri: base_url + '/matricula',
            body: new Matricula,
            json: true,
        };
        const a = new Pessoa;
        a.cpf = "123";
        const t = new Turma;
        t.id = "if688";
        options.body.aluno = a;
        options.body.turma = t;
        options.body.avaliacoes["mapa"] = new Avaliacao("aaaaaaa");
        options.body.avaliacoes["mapa"].conceito = Meta.MPA;
        options.body.respostasAluno["cu"] = new RespostaRoteiro();
        options.body.respostasAluno["bllll"] = new RespostaRoteiro();
        return request.post(options)
        .then((body) => expect(body).toEqual({"success": "A pessoa foi cadastrada com sucesso"}))
        .catch((error) => expect(error).toBeNull());
    });
    
    it('RMMMMMMMM', () => {
        const options = {
            uri: base_url + '/matricula/aluno/123/turma/if688'
        };
        return request.delete(options)
        .then((body) => expect(body).toEqual([]))
        .catch((error) => expect(error).toBeNull());
    });

    it('GEEEET', () => {
        const options = {
            method: 'GET',
            uri: base_url + '/matricula/aluno/123/turma/if688/roteiro/mapa/questoesrespondidas'
        };
        return request.get(options)
        .then((body) => expect(body).toEqual([]))
        .catch((error) => expect(error).toBeNull());
    });
        
        
        it('remove', () => {
            const options = {
                method: 'DELETE',
                uri: base_url + '/turma/123',
            };
            return request.delete(options)
            .then((body) => expect(body).toEqual({"success": "A pessoa foi cadastrada com sucesso"}))
            .catch((error) => expect(error).toBeNull());
        });
        
        it('aaaaa', () => {
            const options = {
                method: 'GET',
                uri: base_url + '/turmas',
            };
            return request.get(options)
            .then((body) => expect(body).toEqual([]))
            .catch((error) => expect(error).toBeNull());
        });
    it('não cadastra pessoas com cpf duplicado', () => {
        const options = {
            method: 'POST',
            uri: base_url + '/pessoa',
            body: new Pessoa(),
            json: true,
        };
        options.body.nome = 'Mari';
        options.body.cpf = '965';
        options.body.email = "m@cin.ufpe.br"
        return request.post(options)
            .then((body) => {
                expect(body).toEqual({
                    success: 'A pessoa foi cadastrada com sucesso',
                });

                const options = {
                    method: 'POST',
                    uri: base_url + '/pessoa',
                    body: new Pessoa(),
                    json: true,
                };
                options.body.nome = 'Pedro';
                options.body.cpf = '965';
                options.body.email = 'p@cin.ufpe.br';
                return request.post(options)
                    .then((body) => {
                        expect(body).toEqual({
                            failure: 'A pessoa não pode ser cadastrada',
                        });

                        const options = {
                            method: 'GET',
                            uri: base_url + '/pessoas',
                            json: true,
                        };
                        return request.get(options)
                            .then((body) => {
                                expect(body).toContain('{"nome":"Mari","cpf":"965","email":"p@cin.ufpe.br"}');
                                expect(body).not.toContain('{"nome":"Pedro","cpf":"965","email":"m@cin.ufpe.br"}');
                            })
                            .catch((error) => expect(error).toBeNull());
                    })
                    .catch((error) => expect(error).not.toBeNull());
            })
            .catch((error) => expect(error).toBeNull());
    });
*/
    afterAll(() => serverInstance.close());

});
