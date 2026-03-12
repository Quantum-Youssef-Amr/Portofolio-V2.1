import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsCard } from './contacts-card';

describe('ContactsCard', () => {
  let component: ContactsCard;
  let fixture: ComponentFixture<ContactsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactsCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
