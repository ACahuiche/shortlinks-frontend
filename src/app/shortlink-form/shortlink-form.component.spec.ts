import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlinkFormComponent } from './shortlink-form.component';

describe('ShortlinkFormComponent', () => {
  let component: ShortlinkFormComponent;
  let fixture: ComponentFixture<ShortlinkFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortlinkFormComponent]
    });
    fixture = TestBed.createComponent(ShortlinkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
