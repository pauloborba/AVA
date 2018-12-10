import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarEstatisticasComponent } from './gerenciar-estatisticas.component';

describe('GerenciarEstatisticasComponent', () => {
  let component: GerenciarEstatisticasComponent;
  let fixture: ComponentFixture<GerenciarEstatisticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarEstatisticasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarEstatisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
