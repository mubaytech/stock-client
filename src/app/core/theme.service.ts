import {Injectable} from '@angular/core';
import {DomController} from '@ionic/angular';
import {StorageService} from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    backgroudColor = 'var(ion-background-color),var(--ion-color-light)';

    constructor(private domCtrl: DomController, public storage: StorageService) {
        this.storage.ready.subscribe(() => {
            this.storage.getItem('backgroudColor').then(value => {
                if (value) {
                    this.backgroudColor = value;
                    this.init();
                } else {
                    this.init();
                }

            });
        });
    }

    init() {
        this.setTheme();
    }

    private setTheme() {

    }
}
