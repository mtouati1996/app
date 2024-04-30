import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminateurComponent } from './examinateur.component';

describe('ExaminateurComponent', () => {
  let component: ExaminateurComponent;
  let fixture: ComponentFixture<ExaminateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
