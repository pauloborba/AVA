import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoteiroProfessorComponent } from './roteiro-professor.component';

describe('RoteiroProfessorComponent', () => {
  let component: RoteiroProfessorComponent;
  let fixture: ComponentFixture<RoteiroProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoteiroProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoteiroProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
