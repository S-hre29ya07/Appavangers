import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostFailedAPIComponent } from './most-failed-api.component';

describe('MostFailedAPIComponent', () => {
  let component: MostFailedAPIComponent;
  let fixture: ComponentFixture<MostFailedAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostFailedAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostFailedAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
