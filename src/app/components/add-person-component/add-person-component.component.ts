import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-add-person-component',
  templateUrl: './add-person-component.component.html',
  styleUrls: ['./add-person-component.component.css']
})
export class AddPersonComponentComponent implements OnInit {
  name = new FormControl('');
  personForm: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.personForm = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.personForm.valid) {
      const name = this.personForm.value.name;
      const person: Person = {
        name,
        pay: 0
      }
      this.dataService.addPerson(person);
      this.personForm.reset();
    }
  }

}
