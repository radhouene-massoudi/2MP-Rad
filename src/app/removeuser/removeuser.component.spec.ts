import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveuserComponent } from './removeuser.component';

describe('RemoveuserComponent', () => {
  let component: RemoveuserComponent;
  let fixture: ComponentFixture<RemoveuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveuserComponent]
    });
    fixture = TestBed.createComponent(RemoveuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
