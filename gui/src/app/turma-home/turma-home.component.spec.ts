import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaHomeComponent } from './turma-home.component';

describe('TurmaHomeComponent', () => {
  let component: TurmaHomeComponent;
  let fixture: ComponentFixture<TurmaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
