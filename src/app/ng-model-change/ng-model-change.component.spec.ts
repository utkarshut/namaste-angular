import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelChangeComponent } from './ng-model-change.component';

describe('NgModelChangeComponent', () => {
  let component: NgModelChangeComponent;
  let fixture: ComponentFixture<NgModelChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModelChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgModelChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
