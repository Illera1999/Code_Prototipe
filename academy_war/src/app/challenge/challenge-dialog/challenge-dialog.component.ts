import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-challenge-dialog',
  templateUrl: './challenge-dialog.component.html',
  styleUrls: ['./challenge-dialog.component.scss']
})
export class ChallengeDialogComponent {

  data: string;

  constructor(private dialog: ModalService, @Inject(MAT_DIALOG_DATA) dat: string){ 
    this.data = dat;
  }
  
  close() {
    this.dialog.closeDialog();
  }
}