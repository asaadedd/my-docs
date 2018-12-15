import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { AccountPersonalInformationService, PersonalProperty } from './acc-personal-information.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'acc-personal',
  templateUrl: './acc-personal.component.html',
  styleUrls: ['./acc-personal.component.css']
})

export class AccountPersonalComponent implements OnDestroy {
  @HostBinding('class.account-root') class = true;
  public proprieties: PersonalProperty;
  private readonly proprietiesSubscription: Subscription;
  private readonly modelChanged: Subject<ProprietyChange>;
  private readonly modelChangedSubscription: Subscription;

  constructor(private accountPersonalInformation: AccountPersonalInformationService) {
    this.modelChanged = new Subject<ProprietyChange>();
    this.modelChangedSubscription = this.modelChanged
      .pipe(debounceTime(500))
      .subscribe(model => { this.accountPersonalInformation.setProperty(model.property, model.value); });
    this.proprietiesSubscription = this.accountPersonalInformation.getProprieties().subscribe((proprieties: PersonalProperty) => {
      this.proprieties = proprieties;
    });
  }

  public changeProperty(property: string, value: string) {
    this.modelChanged.next({property, value});
  }

  public ngOnDestroy() {
    this.proprietiesSubscription.unsubscribe();
    this.modelChangedSubscription.unsubscribe();
  }
}

interface ProprietyChange {
  property: string;
  value: string;
}
