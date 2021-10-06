import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact, ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css'],
})
export class ContactCreateComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private service: ContactsService) {}

  ngOnInit(): void {}

  onSubmit() {
    let contact: Omit<Contact, 'id'> = {
      ...this.form.value,
      date: new Date(),
    };
    this.service.createContact(contact).subscribe((_) => {
      this.router.navigate(['']);
    });
  }
}
