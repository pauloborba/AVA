import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarRoteirosComponent } from './gerenciar-roteiros.component';

describe('GerenciarRoteirosComponent', () => {
  let component: GerenciarRoteirosComponent;
  let fixture: ComponentFixture<GerenciarRoteirosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarRoteirosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarRoteirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
