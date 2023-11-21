import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgResponseTimeComponent } from './avg-response-time.component';

describe('AvgResponseTimeComponent', () => {
  let component: AvgResponseTimeComponent;
  let fixture: ComponentFixture<AvgResponseTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgResponseTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgResponseTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
