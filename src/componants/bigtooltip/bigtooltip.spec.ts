import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bigtooltip } from './bigtooltip';

describe('Bigtooltip', () => {
  let component: Bigtooltip;
  let fixture: ComponentFixture<Bigtooltip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bigtooltip],
    }).compileComponents();

    fixture = TestBed.createComponent(Bigtooltip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
