import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarTurmaComponent } from './gerenciar-turma.component';

describe('GerenciarTurmaComponent', () => {
  let component: GerenciarTurmaComponent;
  let fixture: ComponentFixture<GerenciarTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
