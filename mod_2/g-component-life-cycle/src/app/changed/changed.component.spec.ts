import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedComponent } from './changed.component';

describe('ChangedComponent', () => {
  let component: ChangedComponent;
  let fixture: ComponentFixture<ChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
