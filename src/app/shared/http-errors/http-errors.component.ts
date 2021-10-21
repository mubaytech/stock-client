import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-http-errors',
    templateUrl: './http-errors.component.html',
    styleUrls: ['./http-errors.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HttpErrorsComponent implements OnInit {
    @Input() errors;

    constructor(public modal: ModalController) {
    }

    ngOnInit() {
    }

    dismiss($event: MouseEvent) {
        const {tagName} = $event.target as HTMLElement;
        if (tagName === 'ION-ROW' || tagName === 'ION-COL' || tagName === 'ION-CONTENT') {
            this.modal.dismiss().then();
        }
    }
}
