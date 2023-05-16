import { publishFacade } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/class/course';
import { DataUserFireService } from 'src/app/services/data-user-fire.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-pay-modal',
  templateUrl: './pay-modal.component.html',
  styleUrls: ['./pay-modal.component.scss'],
})
export class PayModalComponent {

  protected course: Course;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Course,
            private dbSubscription: SubscriptionService,
            private user: DataUserFireService){
    this.course = data;
  }

  activePay(){
    this.dbSubscription.activateSubscription(this.user.getLocalUserEmail(),this.course.getProgrammingLanguage());
    window.location.reload();
  }
}
