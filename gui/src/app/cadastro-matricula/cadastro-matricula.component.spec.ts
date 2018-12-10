import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMatriculaComponent } from './cadastro-matricula.component';

describe('CadastroMatriculaComponent', () => {
  let component: CadastroMatriculaComponent;
  let fixture: ComponentFixture<CadastroMatriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroMatriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
