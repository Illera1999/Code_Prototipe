import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { LessonDropdownComponent } from './lesson/lesson-dropdown/lesson-dropdown.component';
import { LessonComponent } from './lesson/lesson.component';
import { ChallengeComponent } from './challenge/challenge.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'course/:id', component: CourseComponent },
  { path: 'lesson', component: LessonComponent },
  { path: 'challenge', component: ChallengeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
