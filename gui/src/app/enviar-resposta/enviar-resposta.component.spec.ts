import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarRespostaComponent } from './enviar-resposta.component';

describe('EnviarRespostaComponent', () => {
  let component: EnviarRespostaComponent;
  let fixture: ComponentFixture<EnviarRespostaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarRespostaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarRespostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
