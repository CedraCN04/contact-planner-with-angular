import { Component } from '@angular/core';
import { CardContactComponent } from './card-contact/card-contact.component';
import { MenuComponent } from './menu/menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, CardContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
