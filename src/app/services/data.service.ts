import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  people: Person[] = [];
  items: Item[] = [];

  constructor() { }

  addPerson(person: Person) {
    this.people.push(person);
  }

  addItem(item: Item) {
    this.items.push(item);
    this.recaulculatePay(item);
  }

  recaulculatePay(item: Item) {
    let price = item.price / item.people.length;
    item.people.forEach((itemPerson) => {
      this.people.find((person) => {
        if (person.name === itemPerson.name) person.pay += price;
      })
    })

  }
}
