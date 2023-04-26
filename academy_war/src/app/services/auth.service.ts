import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router) {
    console.log(auth);
  }

  async login(email: string, password: string) {
    await this.auth.signInWithEmailAndPassword(email, password)
      .then((value: any) => { console.log("Nice, it worked! \n", value); })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });
  }

  async register(email: string, password: string) {
    await this.auth.createUserWithEmailAndPassword(email, password)
      .then((value: any) => { console.log("Nice, it worked! \n", value); })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });
  }

  async logout() {
    await this.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}
