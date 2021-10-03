import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshedComponent } from './refreshed.component';

describe('RefreshedComponent', () => {
  let component: RefreshedComponent;
  let fixture: ComponentFixture<RefreshedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
