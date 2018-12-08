import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { PessoaService } from './shared/pessoa.service';
import { CadastroAlunosComponent } from './src/app/cadastro-alunos/cadastro-alunos.component';
import { CadastroPessoaComponent } from './src/app/cadastro-pessoa/cadastro-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginBoxComponent,
    CadastroAlunosComponent,
    CadastroPessoaComponent
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
    ]),
  ],
  providers: [
    PessoaService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
