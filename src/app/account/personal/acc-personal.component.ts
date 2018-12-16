import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { AccPersonalInformationService, PersonalProperties } from './acc-personal-information.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'acc-personal',
  templateUrl: './acc-personal.component.html',
  styleUrls: ['./acc-personal.component.css']
})

export class AccPersonalComponent implements OnDestroy {
  @HostBinding('class.account-root') class = true;
  public proprieties: PersonalProperties;
  private readonly proprietiesSubscription: Subscription;
  private readonly modelChanged: Subject<ProprietyChange>;
  private readonly modelChangedSubscription: Subscription;

  constructor(private accPersonalInformation: AccPersonalInformationService) {
    this.modelChanged = new Subject<ProprietyChange>();
    this.modelChangedSubscription = this.modelChanged
      .pipe(debounceTime(500))
      .subscribe(model => { this.accPersonalInformation.setProperty(model.property, model.value); });
    this.proprietiesSubscription = this.accPersonalInformation.getProprieties().subscribe((proprieties: PersonalProperties) => {
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
