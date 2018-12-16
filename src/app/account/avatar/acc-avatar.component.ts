import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'acc-avatar',
  templateUrl: './acc-avatar.component.html',
  styleUrls: ['./acc-avatar.component.css']
})

export class AccAvatarComponent {
  public avatar: Observable<Blob>;
  public fullName: Observable<string>;

  constructor(private accountService: AccountService) {
    this.avatar = this.accountService.getAvatar();
    this.fullName = this.accountService.getFullName();
  }
}
