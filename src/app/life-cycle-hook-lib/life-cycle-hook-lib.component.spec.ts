import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleHookLibComponent } from './life-cycle-hook-lib.component';

describe('LifeCycleHookLibComponent', () => {
  let component: LifeCycleHookLibComponent;
  let fixture: ComponentFixture<LifeCycleHookLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleHookLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleHookLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
