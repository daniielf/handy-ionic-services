import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingService {

  private loader: any;
  constructor(private loadCtrl : LoadingController) {

  }

  /**
  * Method to start a Loadinc Alert
  * @param {string} message Message on the Loading Alert
  * @param {boolean} enableTouchDismiss ()Boolean to allow the dismiss the Loading Alert by tapping the backdrop
  **/
  public startLoading(message:string, enableTouchDismiss: boolean = false){
    this.loader = this.loadCtrl.create({
      content: message,
      enableBackdropDismiss: enableTouchDismiss
    });
    this.loader.present();
  }

  /**
  * Method to hide the Loading Alert
  **/
  public stopLoading(){
    if (this.loader && !this.loader._isHidden){
      this.loader.dismiss();
    }
  }
}
