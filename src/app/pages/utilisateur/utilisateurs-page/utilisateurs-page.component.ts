import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-utilisateurs-page',
  templateUrl: './utilisateurs-page.component.html',
  styleUrls: ['./utilisateurs-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UtilisateursPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
