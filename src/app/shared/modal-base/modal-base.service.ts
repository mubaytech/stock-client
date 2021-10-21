import { Injectable } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Injectable()
export class ModalBaseService {

  constructor(public modalController:ModalController) { }
  dismiss(data?:any){
    this.modalController.dismiss(data).then()
  }
}
