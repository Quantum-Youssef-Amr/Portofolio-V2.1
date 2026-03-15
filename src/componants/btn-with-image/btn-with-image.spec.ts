import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWithImage } from './btn-with-image';

describe('BtnWithImage', () => {
  let component: BtnWithImage;
  let fixture: ComponentFixture<BtnWithImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnWithImage],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnWithImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
