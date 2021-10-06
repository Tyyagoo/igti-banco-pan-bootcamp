import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact, ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private router: Router, private service: ContactsService) {}

  ngOnInit(): void {
    this.service.findAllContacts().subscribe((res) => {
      this.contacts = res;
    });
  }

  goToEdit(id: number) {
    this.router.navigate(['edit', id]);
  }
}
