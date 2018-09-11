import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { AccountPersonalComponent } from './personal/acc-personal.component';

const routes: Routes = [
  { path: '', component: AccountComponent},
  { path: 'personal', component: AccountPersonalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountRoutingModule {}
