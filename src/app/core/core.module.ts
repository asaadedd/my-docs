import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { UserModule } from '../user/user.module';
import { CommonModule } from '@angular/common';

import { CORE_CONFIG, CoreConfig} from './core.config';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    RoutingModule,
    UserModule,
    HttpClientModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: CORE_CONFIG, useValue: CoreConfig }
  ],
  exports: [
    HttpClientModule,
    TranslateModule,
    RouterModule,
    UserModule,
    HeaderComponent,
    FooterComponent,
    CommonModule
  ]
})
export class CoreModule { }
