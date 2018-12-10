import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoteiroAlunoComponent } from './roteiro-aluno.component';

describe('RoteiroAlunoComponent', () => {
  let component: RoteiroAlunoComponent;
  let fixture: ComponentFixture<RoteiroAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoteiroAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoteiroAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
