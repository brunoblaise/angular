import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InPComponent } from './in-p.component';

describe('InPComponent', () => {
  let component: InPComponent;
  let fixture: ComponentFixture<InPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InPComponent]
    });
    fixture = TestBed.createComponent(InPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
