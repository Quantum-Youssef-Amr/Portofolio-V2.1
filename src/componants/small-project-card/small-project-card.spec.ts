import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallProjectCard } from './small-project-card';

describe('SmallProjectCard', () => {
  let component: SmallProjectCard;
  let fixture: ComponentFixture<SmallProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallProjectCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SmallProjectCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
