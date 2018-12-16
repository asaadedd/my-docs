import {Component, HostBinding, Inject} from '@angular/core';
import { ACCOUNT_CONFIG, AccountInformationType, IAccountConfig} from '../account.config';

@Component({
  selector: 'acc-information',
  templateUrl: './acc-information.component.html',
  styleUrls: ['./acc-information.component.css']
})

export class AccInformationComponent {
  public informationTypes: Array<AccountInformationType>;

  constructor(@Inject(ACCOUNT_CONFIG) private accountConfig: IAccountConfig) {
    this.informationTypes = this.accountConfig.INFORMATION;
  }
}
