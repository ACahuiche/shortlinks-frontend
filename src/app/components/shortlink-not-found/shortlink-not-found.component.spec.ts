import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlinkNotFoundComponent } from './shortlink-not-found.component';

describe('ShortlinkNotFoundComponent', () => {
  let component: ShortlinkNotFoundComponent;
  let fixture: ComponentFixture<ShortlinkNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortlinkNotFoundComponent]
    });
    fixture = TestBed.createComponent(ShortlinkNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
