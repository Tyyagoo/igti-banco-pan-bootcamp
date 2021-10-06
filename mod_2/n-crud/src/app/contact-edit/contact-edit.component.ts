import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
})
export class ContactEditComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  contact?: Contact;

  constructor(
    private router: Router,
    private acRouter: ActivatedRoute,
    private service: ContactsService
  ) {}

  ngOnInit(): void {
    this.acRouter.paramMap.subscribe((params) => {
      let id = params.get('id') as unknown as number;
      this.service.findContactById(id).subscribe((res) => {
        this.contact = res;
        this.form.reset(this.contact);
      });
    });
  }

  onSubmit() {
    let newContact = {
      ...this.contact,
      ...this.form.value,
      date: new Date(),
    };
    this.service.updateContact(newContact).subscribe((res) => {
      this.contact = res;
      this.form.reset(this.contact);
    });
  }

  onDelete() {
    this.service
      .deleteContact(this.contact?.id!)
      .subscribe(() => this.router.navigate(['']));
  }
}
