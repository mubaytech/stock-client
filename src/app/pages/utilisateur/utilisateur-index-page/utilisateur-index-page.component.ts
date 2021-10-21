import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-utilisateur-index-page',
  templateUrl: './utilisateur-index-page.component.html',
  styleUrls: ['./utilisateur-index-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UtilisateurIndexPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
