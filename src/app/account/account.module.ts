import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';
import { AccAvatarComponent } from './avatar/acc-avatar.component';
import { AccInformationComponent } from './information/acc-information.component';
import { AccPersonalComponent } from './personal/acc-personal.component';
import { AccSecurityComponent } from './security/acc-security.component';

import { AccPersonalInformationService } from './personal/acc-personal-information.service';

import { CommonModule } from '@angular/common';
import { AvatarModule } from 'ngx-avatar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AccountRoutingModule } from './rounting.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { ACCOUNT_CONFIG, AccountConfig } from './account.config';
import { TranslateService } from '@ngx-translate/core';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/account/', '.json');
}

@NgModule({
  declarations: [AccountComponent, AccAvatarComponent, AccInformationComponent, AccPersonalComponent, AccSecurityComponent],
  imports: [
    CommonModule,
    AvatarModule,
    AccountRoutingModule,
    FormsModule,
    NgSelectModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  providers: [
    { provide: ACCOUNT_CONFIG, useValue: AccountConfig },
    AccPersonalInformationService
  ],
  bootstrap: []
})

export class AccountModule {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}
