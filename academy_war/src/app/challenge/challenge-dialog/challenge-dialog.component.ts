import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-challenge-dialog',
  templateUrl: './challenge-dialog.component.html',
  styleUrls: ['./challenge-dialog.component.scss']
})
export class ChallengeDialogComponent {
  constructor(private dialog: ModalService){}
  
  close() {
    this.dialog.closeDialog();
  }
}
