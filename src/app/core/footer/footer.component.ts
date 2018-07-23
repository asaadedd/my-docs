import { Component, Inject } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Observable } from 'rxjs';
import { CORE_CONFIG } from '../core.config';

@Component({
  selector: 'mdc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  public tabs: Observable<Array<Tab>>;

  constructor(@Inject(CORE_CONFIG) public coreConfig: CoreConfig, private userService: UserService) {
    this.tabs = this.userService.getUserTabs();
  }
}
