import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlinkResultComponent } from './shortlink-result.component';

describe('ShortlinkResultComponent', () => {
  let component: ShortlinkResultComponent;
  let fixture: ComponentFixture<ShortlinkResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortlinkResultComponent]
    });
    fixture = TestBed.createComponent(ShortlinkResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
