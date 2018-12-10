import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTurmasComponent } from './mostrar-turmas.component';

describe('MostrarTurmasComponent', () => {
  let component: MostrarTurmasComponent;
  let fixture: ComponentFixture<MostrarTurmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarTurmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
