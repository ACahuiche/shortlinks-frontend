import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShortlinkComponent } from './create-shortlink.component';

describe('CreateShortlinkComponent', () => {
  let component: CreateShortlinkComponent;
  let fixture: ComponentFixture<CreateShortlinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateShortlinkComponent]
    });
    fixture = TestBed.createComponent(CreateShortlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
