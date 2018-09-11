import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { MdcRootComponent } from './mdc.component';

import { ACCOUNT_CONFIG, AccountConfig } from './account/account.config';

@NgModule({
  declarations: [
    MdcRootComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    OverlayModule,
    CoreModule
  ],
  providers: [
    { provide: ACCOUNT_CONFIG, useValue: AccountConfig }
    ],
  bootstrap: [MdcRootComponent]
})

export class MdcModule { }
