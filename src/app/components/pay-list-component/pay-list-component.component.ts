import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { DataService } from 'src/app/services/data.service';
import { MatTableModule } from '@angular/material/table';

let ELEMENT_DATA: Person[] = [];

@Component({
  selector: 'app-pay-list-component',
  templateUrl: './pay-list-component.component.html',
  styleUrls: ['./pay-list-component.component.css'],
})
export class PayListComponentComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    ELEMENT_DATA = this.dataService.people;
  }

}
