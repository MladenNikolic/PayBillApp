import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-item-dialog-component',
  templateUrl: './add-item-dialog-component.component.html',
  styleUrls: ['./add-item-dialog-component.component.css'],
})
export class AddItemDialogComponentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddItemDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

}
