import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonComponentComponent } from './add-person-component.component';

describe('AddPersonComponentComponent', () => {
  let component: AddPersonComponentComponent;
  let fixture: ComponentFixture<AddPersonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPersonComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
