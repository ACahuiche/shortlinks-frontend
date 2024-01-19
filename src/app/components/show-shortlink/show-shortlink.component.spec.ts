import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShortlinkComponent } from './show-shortlink.component';

describe('ShowShortlinkComponent', () => {
  let component: ShowShortlinkComponent;
  let fixture: ComponentFixture<ShowShortlinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowShortlinkComponent]
    });
    fixture = TestBed.createComponent(ShowShortlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
