import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarRoteirosComponent } from './mostrar-roteiros.component';

describe('MostrarRoteirosComponent', () => {
  let component: MostrarRoteirosComponent;
  let fixture: ComponentFixture<MostrarRoteirosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarRoteirosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarRoteirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
