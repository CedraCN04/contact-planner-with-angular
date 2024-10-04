import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-card-contact',
  standalone: true,
  imports: [],
  templateUrl: './card-contact.component.html',
  styleUrl: './card-contact.component.scss'
})
export class CardContactComponent implements OnInit {

  contact!: Contact

  constructor() {
    this.contact = new Contact(1, 'John', 'https://img.freepik.com/vecteurs-libre/illustration-du-jeune-homme-souriant_1308-174669.jpg?t=st=1728054598~exp=1728058198~hmac=e7f7b2b35361d9503b9a8e80add25dd9a2b7d551731155e62dca4b852c59223b&w=1380', "0909090909", "bonjour@gmail.com")
  }

  ngOnInit(): void {
    
  }
}
