import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCourseMainComponent } from './app-course-main.component';

describe('AppCourseMainComponent', () => {
  let component: AppCourseMainComponent;
  let fixture: ComponentFixture<AppCourseMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCourseMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCourseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
