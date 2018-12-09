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

@NgModule({
  declarations: [
    AppComponent,
    LoginBoxComponent,
    CadastroPessoaComponent,
    CadastroTurmaComponent,
    MostrarTurmasComponent,
    CadastroMatriculaComponent,
    TurmaHomeComponent,
    MostrarRoteirosComponent
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
        path: 'vizualizar-roteiros',
        component: MostrarRoteirosComponent
      }
    ]),
  ],
  providers: [
    PessoaService,
    TurmaService,
    MatriculaService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
