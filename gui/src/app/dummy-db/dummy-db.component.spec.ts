import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyDbComponent } from './dummy-db.component';

describe('DummyDbComponent', () => {
  let component: DummyDbComponent;
  let fixture: ComponentFixture<DummyDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
