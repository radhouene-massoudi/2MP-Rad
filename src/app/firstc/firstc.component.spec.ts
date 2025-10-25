import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcComponent } from './firstc.component';

describe('FirstcComponent', () => {
  let component: FirstcComponent;
  let fixture: ComponentFixture<FirstcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstcComponent]
    });
    fixture = TestBed.createComponent(FirstcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
