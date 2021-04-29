import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesScoresComponent } from './tiles-scores.component';

describe('TilesScoresComponent', () => {
  let component: TilesScoresComponent;
  let fixture: ComponentFixture<TilesScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilesScoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TilesScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
