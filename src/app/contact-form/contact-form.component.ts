import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  @Output() contactCreated = new EventEmitter<Contact>();
  contact: Contact = new Contact(0, '', '', '', '');

  onSubmit() {
    this.contactCreated.emit(this.contact);
    this.contact = new Contact(0, '', '', '', ''); // Réinitialiser le formulaire
  }
}
