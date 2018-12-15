import {Inject, Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {ACCOUNT_CONFIG, IAccountConfig, AccountInfo, AccountProperty, PersonalInformation} from '../account.config';
import {TranslateService} from '@ngx-translate/core';
import {AccountService} from '../account.service';
import {delay, map, mergeMap} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()

export class AccountPersonalInformationService {
  private static readonly PROPERTY_TRANSLATE_PATH = 'information.personal.property';
  private readonly securityProperties: AccountProperty[];

  constructor(
    @Inject(ACCOUNT_CONFIG) private accountConfig: IAccountConfig,
    private translate: TranslateService,
    private accountService: AccountService,
    private toastrService: ToastrService,
    private translateService: TranslateService
  ) {
    this.securityProperties = this.accountConfig.SECURITY.ALL_PARAMETERS.map((property) => ({
      key: property,
      value: this.getValue(property),
      options: this.getOption(property)
    }));
  }
}
