import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { MdcRootComponent } from './mdc.component';

import { ACCOUNT_CONFIG, AccountConfig } from './account/account.config';

@NgModule({
  declarations: [
    MdcRootComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      maxOpened: 5,
      preventDuplicates: true,
      resetTimeoutOnDuplicate: true
    }),
    CoreModule
  ],
  providers: [
    { provide: ACCOUNT_CONFIG, useValue: AccountConfig }
    ],
  bootstrap: [MdcRootComponent]
})

export class MdcModule { }
