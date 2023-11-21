import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExecutionPieComponent } from './test-execution-pie.component';

describe('TestExecutionPieComponent', () => {
  let component: TestExecutionPieComponent;
  let fixture: ComponentFixture<TestExecutionPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestExecutionPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestExecutionPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
