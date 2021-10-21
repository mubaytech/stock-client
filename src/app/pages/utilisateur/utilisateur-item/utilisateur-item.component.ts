import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-utilisateur-item',
  templateUrl: './utilisateur-item.component.html',
  styleUrls: ['./utilisateur-item.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UtilisateurItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
