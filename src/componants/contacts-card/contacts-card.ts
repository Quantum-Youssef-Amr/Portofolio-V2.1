import { Component, inject, OnInit } from '@angular/core';
import { PersonalLinks } from '../../app-types.model';
import { AppData } from '../../services/app.data';

@Component({
  selector: 'app-contacts-card',
  imports: [],
  templateUrl: './contacts-card.html',
  styleUrl: './contacts-card.css',
})
export class ContactsCard implements OnInit{
  private _data_service: AppData = inject(AppData);
  links!: PersonalLinks;

  ngOnInit(): void {
    this.links = this._data_service.App_Personal_links;
  }

}
