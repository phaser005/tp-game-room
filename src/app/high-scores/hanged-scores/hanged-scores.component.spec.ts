import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangedScoresComponent } from './hanged-scores.component';

describe('HangedScoresComponent', () => {
  let component: HangedScoresComponent;
  let fixture: ComponentFixture<HangedScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangedScoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangedScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
