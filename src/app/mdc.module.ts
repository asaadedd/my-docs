import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { MdcRootComponent } from './mdc.component';

@NgModule({
  declarations: [
    MdcRootComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [MdcRootComponent]
})

export class MdcModule { }
