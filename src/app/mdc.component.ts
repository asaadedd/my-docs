import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'mdc-root',
  templateUrl: './mdc.component.html',
  styleUrls: ['./mdc.component.css']
})
export class MdcRootComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}
