import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleLikeSearchTypeAheadComponent } from './google-like-search-type-ahead.component';

describe('GoogleLikeSearchTypeAheadComponent', () => {
  let component: GoogleLikeSearchTypeAheadComponent;
  let fixture: ComponentFixture<GoogleLikeSearchTypeAheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleLikeSearchTypeAheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleLikeSearchTypeAheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
