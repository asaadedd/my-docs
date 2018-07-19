import { NgModule } from '@angular/core';

import { USER_CONFIG, UserConfig} from './user.config';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    { provide: USER_CONFIG, useValue: UserConfig }
  ],
  bootstrap: []
})

export class UserModule { }
