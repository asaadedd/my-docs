import { NgModule } from '@angular/core';

import { AccountStepsComponent } from './steps/account-steps.component';
import { AccountComponent } from './account.component';

import { CommonModule } from '@angular/common';

import { ACCOUNT_CONFIG, AccountConfig} from './account,config';

@NgModule({
  declarations: [AccountStepsComponent, AccountComponent],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ACCOUNT_CONFIG, useValue: AccountConfig }
  ],
  bootstrap: []
})

export class AccountModule {}
