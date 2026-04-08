import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDisplayPage } from './project-display-page';

describe('ProjectDisplayPage', () => {
  let component: ProjectDisplayPage;
  let fixture: ComponentFixture<ProjectDisplayPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDisplayPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDisplayPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
