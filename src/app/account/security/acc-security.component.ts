import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AccSecurityInformationService, SecurityProperties } from './acc-security-information.service';

@Component({
  selector: 'acc-security',
  templateUrl: './acc-security.component.html',
  styleUrls: ['./acc-security.component.css']
})

export class AccSecurityComponent implements OnDestroy {
  @HostBinding('class.account-root') class = true;
  public proprieties: SecurityProperties;
  private readonly proprietiesSubscription: Subscription;
  private readonly modelChanged: Subject<ProprietyChange>;
  private readonly modelChangedSubscription: Subscription;

  constructor(private accSecurityInformation: AccSecurityInformationService) {
    this.modelChanged = new Subject<ProprietyChange>();
    this.modelChangedSubscription = this.modelChanged
      .pipe(debounceTime(500))
      .subscribe(model => { this.accSecurityInformation.setProperty(model.property, model.value); });
    this.proprietiesSubscription = this.accSecurityInformation.getProprieties().subscribe((proprieties: SecurityProperties) => {
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
