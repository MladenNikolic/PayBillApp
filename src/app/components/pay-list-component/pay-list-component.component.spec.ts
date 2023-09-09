import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayListComponentComponent } from './pay-list-component.component';

describe('PayListComponentComponent', () => {
  let component: PayListComponentComponent;
  let fixture: ComponentFixture<PayListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
