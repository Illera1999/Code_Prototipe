import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  constructor(protected dialog: MatDialog) {}

  openDialog(component: any, heigh?: string, width?: string, data?: any) {
    this.dialog.open(component, {
      height: heigh,
      width: width,
      data: data,
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
