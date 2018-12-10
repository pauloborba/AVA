import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { PessoaService } from './shared/service/pessoa.service';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { CadastroTurmaComponent } from './cadastro-turma/cadastro-turma.component';
import { TurmaService } from './shared/service/turma.service';
import { MostrarTurmasComponent } from './mostrar-turmas/mostrar-turmas.component';
import { CadastroMatriculaComponent } from './cadastro-matricula/cadastro-matricula.component';
import { MatriculaService } from './shared/service/matricula.service';
import { TurmaHomeComponent } from './turma-home/turma-home.component';
import { MostrarRoteirosComponent } from './mostrar-roteiros/mostrar-roteiros.component';
import { CadastroRoteiroComponent } from './cadastro-roteiro/cadastro-roteiro.component';
import { GerenciarTurmaComponent } from './gerenciar-turma/gerenciar-turma.component';
import { RoteiroService } from './shared/service/roteiro.service';
import { GerenciarRoteirosComponent } from './gerenciar-roteiros/gerenciar-roteiros.component';
import { GerenciarEstatisticasComponent } from './gerenciar-estatisticas/gerenciar-estatisticas.component';
import { DummyDbComponent } from './dummy-db/dummy-db.component';
import { RoteiroProfessorComponent } from './roteiro-professor/roteiro-professor.component';
import { CadastrarQuestaoComponent } from './cadastrar-questao/cadastrar-questao.component';
import { RoteiroAlunoComponent } from './roteiro-aluno/roteiro-aluno.component';
import { EstatisticaQuestaoComponent } from './estatistica-questao/estatistica-questao.component';
import { EstatisticaAlunoComponent } from './estatistica-aluno/estatistica-aluno.component';
import { EnviarRespostaComponent } from './enviar-resposta/enviar-resposta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginBoxComponent,
    CadastroPessoaComponent,
    CadastroTurmaComponent,
    MostrarTurmasComponent,
    CadastroMatriculaComponent,
    TurmaHomeComponent,
    MostrarRoteirosComponent,
    CadastroRoteiroComponent,
    GerenciarTurmaComponent,
    GerenciarRoteirosComponent,
    GerenciarEstatisticasComponent,
    DummyDbComponent,
    RoteiroProfessorComponent,
    CadastrarQuestaoComponent,
    RoteiroAlunoComponent,
    EstatisticaQuestaoComponent,
    EstatisticaAlunoComponent,
    EnviarRespostaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginBoxComponent,
      },
      {
        path: 'cadastro-pessoa',
        component: CadastroPessoaComponent,
      },
      {
        path: 'cadastro-turma',
        component: CadastroTurmaComponent,
      },
      {
        path: 'turmas',
        component: MostrarTurmasComponent,
      },
      {
        path: 'cadastro-matricula',
        component: CadastroMatriculaComponent,
      }
      ,
      {
        path: 'turma-home',
        component: TurmaHomeComponent,
      },    
      {
        path: 'populate',
        component: DummyDbComponent,
      },   
      {
        path: 'roteiro-professor',
        component: RoteiroProfessorComponent,
      },
      {
        path: 'roteiro-aluno',
        component: RoteiroAlunoComponent,
      },
      {
        path: 'mostrar-roteiro',
        component: MostrarRoteirosComponent,
      },
      {
        path: 'cadastro-roteiro',
        component: CadastroRoteiroComponent,
      }
    ]),
  ],
  providers: [
    PessoaService,
    TurmaService,
    MatriculaService,
    RoteiroService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
