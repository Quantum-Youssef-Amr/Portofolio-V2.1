import { Component } from '@angular/core';
import { PersonalLinks } from '../../app-types.model';

@Component({
  selector: 'app-contacts-card',
  imports: [],
  templateUrl: './contacts-card.html',
  styleUrl: './contacts-card.css',
})
export class ContactsCard {
  links: PersonalLinks = {
    githubLink: 'https://github.com/Quantum-Youssef-Amr',
    itchLink: 'https://youssef-amr0.itch.io/',
    linkedInLink: 'https://www.linkedin.com/in/youssef-amr-2ba9962b5',
    email: 'amry14003@gmail.com'
  }
}
