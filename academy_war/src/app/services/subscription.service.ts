import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { AuthService } from './auth.service';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Subscription } from '../class/subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private db = getFirestore(AuthService.getApp());

  constructor() { }

  async getSubscriptionFromUser(username: string): Promise<Subscription[]> {
    let sub: Subscription[] = [];
    try {
      const q = query(collection(this.db, "subscription"), where("user", "==", username));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let s = doc.data()
        sub!.push(new Subscription(s['id'], s['isActive'],
          s['price'], s['user'], s['course']))
      })
    } catch (e) {
      console.log(e);
    }
    return sub;
  }

  async isUserSubscribe(user: string, course: string) {
    let res = false;
    await this.getSubscriptionFromUser(user).then((data: Subscription[]) => {
      data.forEach((s: Subscription) => {
        if (s.getCourse() == course && s.getIsActive())
          res = true;
      })
    })
    return res;
  }
}
