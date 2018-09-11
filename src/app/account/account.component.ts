import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'acc-root',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent {
  @HostBinding('class.account-root') class = true;
}
