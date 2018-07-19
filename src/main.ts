import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MdcModule } from './app/mdc.module';

platformBrowserDynamic().bootstrapModule(MdcModule)
  .catch(err => console.log(err));
