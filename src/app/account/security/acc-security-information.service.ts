import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ACCOUNT_CONFIG, IAccountConfig } from '../account.config';
import { TranslateService } from '@ngx-translate/core';
import { AccountService, AccountInfo, AccountProperty } from '../account.service';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()

export class AccSecurityInformationService {
  private static readonly PROPERTY_TRANSLATE_PATH = 'information.security.property';

  constructor(
    @Inject(ACCOUNT_CONFIG) private accountConfig: IAccountConfig,
    private translate: TranslateService,
    private accountService: AccountService,
    private toastrService: ToastrService
  ) {
  }

  public setProperty(property: string, value: string) {
    const propertyDisplayName = this.translate.instant(`${AccSecurityInformationService.PROPERTY_TRANSLATE_PATH}.${property}`);
    const valueChangedText = this.translate.instant(this.accountConfig.MESSAGES.VALUE_CHANGED);
    this.toastrService.success(valueChangedText, propertyDisplayName, {
      timeOut: 5000,
      positionClass: 'toast-top-center'
    });
    this.accountService.setPersonalProperty(property, value);
  }

  public getProprieties(): Observable<SecurityProperties> {
    return this.accountService.getAccount().pipe(
      map((account: AccountInfo) => ({
        loginWithPattern: {
          key: 'loginWithPattern',
          value: account.security.loginWithPattern
        },
        loginWithFingerPrint: {
          key: 'loginWithPattern',
          value: account.security.loginWithFingerPrint
        }
      }))
    );
  }
}

export interface SecurityProperties {
  loginWithPattern: AccountProperty;
  loginWithFingerPrint: AccountProperty;
}
