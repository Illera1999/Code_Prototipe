import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonDropdownComponent } from './lesson-dropdown.component';

describe('LessonDropdownComponent', () => {
  let component: LessonDropdownComponent;
  let fixture: ComponentFixture<LessonDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
