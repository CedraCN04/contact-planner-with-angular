import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardContactComponent } from './card-contact/card-contact.component';
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { MenuComponent } from './menu/menu.component';
import { Contact } from './models/contact';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuComponent, CardContactComponent, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  contacts: Contact[]= [];

  addContact(contact: Contact) {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
  }
}
