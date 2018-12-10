import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatisticaAlunoComponent } from './estatistica-aluno.component';

describe('EstatisticaAlunoComponent', () => {
  let component: EstatisticaAlunoComponent;
  let fixture: ComponentFixture<EstatisticaAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatisticaAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
