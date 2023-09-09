import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemDialogComponentComponent } from './add-item-dialog-component/add-item-dialog-component.component';

@Component({
  selector: 'app-item-list-component',
  templateUrl: './item-list-component.component.html',
  styleUrls: ['./item-list-component.component.css']
})

export class ItemListComponentComponent {
  animal: string = "";
  name: string = "";

  constructor(public dialog: MatDialog) { }


  openModal() {
    const dialogRef = this.dialog.open(AddItemDialogComponentComponent, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
