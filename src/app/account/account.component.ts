import { Component, OnDestroy } from '@angular/core';
import { AccountService } from './account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'acc-root',
  templateUrl: './account.component.html'
})

export class AccountComponent implements OnDestroy {
  public isTutorial: boolean;
  private accountSubscriber: Subscription;

  constructor(private accountService: AccountService) {
    this.isTutorial = this.accountService.isTutorial();
    this.accountSubscriber = this.accountService.getAccount().subscribe((accountInfo: AccountInfo) => {
      this.isTutorial = accountInfo.tutorial;
    });
  }

  ngOnDestroy() {
    this.accountSubscriber.unsubscribe();
  }
}
