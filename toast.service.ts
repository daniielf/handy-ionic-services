import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

enum Position {
  TOP = 'top',
  BOTTOM = 'bottom'
};

@Injectable()
export class ToastService {
    private activeToast: any;
    constructor(private toastCtrl:ToastController) {
		}

    /**
    * Display an Toast Alert on screen with a message
    * @param {string} message Message on Toast Alert
    * @param {number} alertDuration Time duration of the Toast Alert(in Milliseconds)
    * @param {boolean} displayCloseButton Display close button
    * @param {string} closeText Message on Close Button
    * @param {Position} position Position of the toast on screen
    **/
		public showToastAlert(message:string, alertDuration:number = 3500, displayCloseButton:boolean = true, closeText: string = 'x', position: Position = Position.TOP){
      if (this.activeToast != null){
        this.dismissToast();
      }
      this.activeToast = this.toastCtrl.create({
        message: message,
        duration: alertDuration,
        position: position,
        showCloseButton: displayCloseButton,
        closeButtonText: closeText
      });
      this.activeToast.present();
    }

    /**
    * Dismiss the Toats Alert
    **/
    public dismissToast(){
      this.activeToast.dismiss();
    }

}
