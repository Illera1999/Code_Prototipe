import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { DataUserFireService } from './data-user-fire.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static app: any;

  constructor(private auth: AngularFireAuth, private router: Router,
    private db: DataUserFireService) { }

  public static getApp() {
    if (!this.app)
      this.app = initializeApp(environment.firebaseConfig);
    return this.app
  }

  async login(email: string, password: string) {
    await this.auth.signInWithEmailAndPassword(email, password)
      .then((value: any) => {
        console.log("Nice, it worked! \n", value);
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });
  }

  async register(email: string, username: string, password: string) {
    await this.auth.createUserWithEmailAndPassword(email, password)
      .then((value: any) => {
        console.log("Nice, it worked! \n", value);
        this.createUserInDB(email, username);
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });
  }

  private async createUserInDB(email: string, username: string) {
    await this.db.createUserData(email, username);
  }

  async logout() {
    await this.auth.signOut().then(() => {
      this.router.navigate(['/']);
      localStorage.removeItem("user");
      window.location.reload();
    });
  }
}
