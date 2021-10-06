import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export type Contact = {
  id: number;
  name: string;
  phone: string;
  date: Date;
};

const BASE_URL = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private httpClient: HttpClient) {}

  findAllContacts() {
    return this.httpClient.get<Contact[]>(`${BASE_URL}/contacts`);
  }

  findContactById(id: number) {
    return this.httpClient.get<Contact>(`${BASE_URL}/contacts/${id}`);
  }

  createContact(contact: Omit<Contact, 'id'>) {
    return this.httpClient.post<Contact>(`${BASE_URL}/contacts`, contact);
  }

  updateContact(contact: Contact) {
    return this.httpClient.put<Contact>(
      `${BASE_URL}/contacts/${contact.id}`,
      contact
    );
  }

  deleteContact(id: number) {
    return this.httpClient.delete(`${BASE_URL}/contacts/${id}`);
  }
}
