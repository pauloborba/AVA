import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarQuestaoComponent } from './cadastrar-questao.component';

describe('CadastrarQuestaoComponent', () => {
  let component: CadastrarQuestaoComponent;
  let fixture: ComponentFixture<CadastrarQuestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarQuestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
