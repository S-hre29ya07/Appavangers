import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAPIComponent } from './total-api.component';

describe('TotalAPIComponent', () => {
  let component: TotalAPIComponent;
  let fixture: ComponentFixture<TotalAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
