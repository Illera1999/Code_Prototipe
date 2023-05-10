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
<<<<<<< HEAD
import { AppCourseMainComponent } from './app-course-main/app-course-main.component';
import { LessonComponent } from './lesson/lesson.component';
=======
import { CourseComponent } from './course/course.component';
import { CourseMenuComponent } from './course/course-menu/course-menu.component';
>>>>>>> singleCourse

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
<<<<<<< HEAD
    AppCourseMainComponent,
    LessonComponent
=======
    CourseComponent,
    CourseMenuComponent
>>>>>>> singleCourse
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
