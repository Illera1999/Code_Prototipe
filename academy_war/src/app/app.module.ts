import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LessonComponent } from './lesson/lesson.component';
import { CourseComponent } from './course/course.component';
import { CourseMenuComponent } from './course/course-menu/course-menu.component';
import { LessonDropdownComponent } from './lesson/lesson-dropdown/lesson-dropdown.component';
import { DropdownLessonsComponent } from './course/dropdown-lessons/dropdown-lessons.component';
import { DropdownChallengesComponent } from './course/dropdown-challenges/dropdown-challenges.component';
import { ChallengeComponent } from './challenge/challenge.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CourseComponent,
    CourseMenuComponent,
    DropdownLessonsComponent,
    DropdownChallengesComponent,
    LessonComponent,
    LessonDropdownComponent,
    CourseComponent,
    CourseMenuComponent,
    ChallengeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
