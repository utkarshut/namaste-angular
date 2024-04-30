import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCommunicationLibComponent } from './data-communication-lib.component';

describe('DataCommunicationLibComponent', () => {
  let component: DataCommunicationLibComponent;
  let fixture: ComponentFixture<DataCommunicationLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataCommunicationLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataCommunicationLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
