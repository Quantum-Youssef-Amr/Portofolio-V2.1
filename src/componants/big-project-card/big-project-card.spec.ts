import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigProjectCard } from './big-project-card';

describe('BigProjectCard', () => {
  let component: BigProjectCard;
  let fixture: ComponentFixture<BigProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigProjectCard],
    }).compileComponents();

    fixture = TestBed.createComponent(BigProjectCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
