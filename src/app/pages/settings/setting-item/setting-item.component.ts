import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Setting} from "../../../../generated/types.graphql-gen";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthGuardsService} from "../../../core/auth/auth-guards.service";
import {SettingsService} from "../../../core/settings.service";
import {debounceTime, filter, skip, switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-setting-item',
  templateUrl: './setting-item.component.html',
  styleUrls: ['./setting-item.component.scss'],
})
export class SettingItemComponent implements OnInit {

  setting: Setting;

  @Input() placeholder = true;

  @Input('setting') set setting$(item: Setting) {
    this.model.get('value').setValue(item?.value?.value);
    this.setting = item;
  } ;

  model = new FormGroup({
    value: new FormControl(null, [Validators.required])
  });

  constructor(
    public authGuard: AuthGuardsService,
    private changeDetectorRef: ChangeDetectorRef,
    public settingsService: SettingsService
  ) {
  }

  ngOnInit(): void {
    this.model.controls.value.valueChanges.pipe(
      // tap(v => console.log(v)),
      // ?skip(1),
      debounceTime(300),
      filter(v => v !== (this.setting.value.value)),
      switchMap(value => {

        if (this.setting.type === 'user') {
          const data: Setting = {
            ...this.setting,
            value: {
              ...(this.setting.value),
              value: value as any
            }
          };
          return this.settingsService.setForUser(data)
        }
        // return this.settingsService.set()
      })
    ).subscribe()
  }

}
