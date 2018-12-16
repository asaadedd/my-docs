import { AccPersonalInformationService } from './acc-personal-information.service';
import { AccountConfig } from '../account.config';

describe('Service: AccPersonalInformationService', () => {
  let suite;
  beforeEach(() => {
    suite = {};
    suite.translate = {instant: jest.fn()};
    suite.accountService = {setPersonalProperty: jest.fn(), getAccount: jest.fn()};
    suite.toastrService = {error: jest.fn(), success: jest.fn()};
    suite.accPersonalInformation = new AccPersonalInformationService(
      AccountConfig, suite.translate, suite.accountService, suite.toastrService
    );
  });

  afterEach(() => {
      suite = null;
  });

  describe('When property is set', () => {
    it('should set error message when the value is mandatory and empty', () => {
      suite.translate.instant.arguments('information.personal.property.firstName').returnValue('First Name');
      suite.translate.instant.arguments('information.personal.messages.wrongValue').returnValue('Wrong Value');

      suite.accPersonalInformation.setProperty('firstName', '');

      expect(suite.toastrService.error).toBeCalledTimes(1);
      expect(suite.toastrService.error).toBeCalledWith('Wrong Value', 'First Name', {
        timeOut: 5000,
        positionClass: 'toast-top-center'
      });
    });

    it('should set error message when the value is mandatory and erroneous', () => {

    });
  });
});
