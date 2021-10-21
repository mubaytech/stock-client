import {Injectable} from '@angular/core';
import {LoadingController} from "@ionic/angular";
import {LoadingOptions} from "@ionic/core/dist/types/components/loading/loading-interface";

@Injectable()
export class LoadingService {
  private loading: HTMLIonLoadingElement;

  constructor(
    public loadingController: LoadingController,
  ) {
  }

  async presentLoading(options: LoadingOptions) {
    if (this.loading) {
      return;
    }
    this.loading = await this.loadingController.create({
      message: 'Connextion en cours...',
      backdropDismiss: false,
      ...options
    });
    return this.loading.present();
  }

  async show(options: string) {
    if (this.loading) {
      return;
    }
    this.loading = await this.loadingController.create({
      message: options,
      backdropDismiss: false,
    });
    this.loading.onDidDismiss().then(_ => {
      this.loading = null;
    })
    return this.loading.present();
  }

  async close() {
    return this.loading.dismiss();
  }
}
