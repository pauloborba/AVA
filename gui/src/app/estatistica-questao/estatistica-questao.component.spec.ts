import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatisticaQuestaoComponent } from './estatistica-questao.component';

describe('EstatisticaQuestaoComponent', () => {
  let component: EstatisticaQuestaoComponent;
  let fixture: ComponentFixture<EstatisticaQuestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatisticaQuestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticaQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
