import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRoteiroComponent } from './cadastro-roteiro.component';

describe('CadastroRoteiroComponent', () => {
  let component: CadastroRoteiroComponent;
  let fixture: ComponentFixture<CadastroRoteiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroRoteiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroRoteiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
