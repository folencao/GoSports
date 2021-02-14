import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventFieldComponent } from './event-field.component';

describe('EventFieldComponent', () => {
  let component: EventFieldComponent;
  let fixture: ComponentFixture<EventFieldComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EventFieldComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
