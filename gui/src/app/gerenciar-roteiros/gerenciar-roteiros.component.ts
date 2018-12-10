import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
    
@Component({
  selector: 'app-gerenciar-roteiros',
  templateUrl: './gerenciar-roteiros.component.html',
  styleUrls: ['./gerenciar-roteiros.component.css']
})
export class GerenciarRoteirosComponent implements OnInit {
  @Input()
  public cpfAtual:string;
  @Input()
  public turmaAtual:string;
  

  public redirectAcessarRoteiro(id: string){
  
  }

  public adicionarRoteiro(){
    this.router.navigate(['/cadastro-roteiro'],{queryParams:{cpfAtual:this.cpfAtual}});
  }
  
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

}
