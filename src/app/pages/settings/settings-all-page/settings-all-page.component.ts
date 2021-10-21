import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthGuardsService} from "../../../core/auth/auth-guards.service";
import {SettingsService} from "../../../core/settings.service";
import {CoreService} from "../../../core/core.service";

@Component({
  selector: 'app-settings-all-page',
  templateUrl: './settings-all-page.component.html',
  styleUrls: ['./settings-all-page.component.scss'],
})
export class SettingsAllPageComponent implements OnInit {
  constructor(
    public authGuard: AuthGuardsService,
    private changeDetectorRef: ChangeDetectorRef,
    public settingsService: SettingsService,
    public coreService: CoreService
  ) {
  }


  ngOnInit() {
  }

}
