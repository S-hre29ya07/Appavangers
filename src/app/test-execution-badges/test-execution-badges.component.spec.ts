import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExecutionBadgesComponent } from './test-execution-badges.component';

describe('TestExecutionBadgesComponent', () => {
  let component: TestExecutionBadgesComponent;
  let fixture: ComponentFixture<TestExecutionBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestExecutionBadgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestExecutionBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
