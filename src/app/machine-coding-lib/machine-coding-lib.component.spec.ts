import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineCodingLibComponent } from './machine-coding-lib.component';

describe('MachineCodingLibComponent', () => {
  let component: MachineCodingLibComponent;
  let fixture: ComponentFixture<MachineCodingLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineCodingLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineCodingLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
