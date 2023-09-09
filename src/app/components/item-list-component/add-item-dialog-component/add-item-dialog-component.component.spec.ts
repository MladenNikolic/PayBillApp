import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemDialogComponentComponent } from './add-item-dialog-component.component';

describe('AddItemDialogComponentComponent', () => {
  let component: AddItemDialogComponentComponent;
  let fixture: ComponentFixture<AddItemDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemDialogComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
