import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddPersonComponentComponent } from './components/add-person-component/add-person-component.component';
import { ItemListComponentComponent } from './components/item-list-component/item-list-component.component';
import { PayListComponentComponent } from './components/pay-list-component/pay-list-component.component';
import { ItemComponentComponent } from './components/item-list-component/item-component/item-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddItemDialogComponentComponent } from './components/item-list-component/add-item-dialog-component/add-item-dialog-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponentComponent,
    ItemListComponentComponent,
    PayListComponentComponent,
    ItemComponentComponent,
    AddItemDialogComponentComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
