import { Component, Inject } from '@angular/core';
import { UserService } from '../../user/user.service';
import { CORE_CONFIG } from '../core.config';
import { Observable } from 'rxjs';

@Component({
  selector: 'mdc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public tabs: Observable<Array<Tab>>;

  constructor(@Inject(CORE_CONFIG) public coreConfig: CoreConfig, private userService: UserService) {
    this.tabs = this.userService.getUserTabs();
  }
}
