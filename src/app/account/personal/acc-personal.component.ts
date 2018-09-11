import { Component, Inject, HostBinding } from '@angular/core';
import { AccountService, AccountProperty } from '../account.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'acc-personal',
  templateUrl: './acc-personal.component.html',
  styleUrls: ['./acc-personal.component.css']
})

export class AccountPersonalComponent {
  @HostBinding('class.account-root') class = true;
  public proprieties: AccountProperty[];
  private modelChanged: Subject<ProprietyChange> = new Subject<ProprietyChange>();

  constructor(private accountService: AccountService) {
    this.proprieties = this.accountService.getPersonalProprieties();
    this.modelChanged
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(model => { this.accountService.setPersonalProperty(model.key, model.value); });
  }

  changeProperty(key: string, value: string) {
    this.modelChanged.next({key, value});
  }
}

interface ProprietyChange {
  key: string;
  value: string;
}
