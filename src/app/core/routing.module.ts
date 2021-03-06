import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingGuardService } from './routing-guard.service';

const routes: Routes = [
  // { path: 'home', loadChildren: '', canLoad: [CoreRoutingGuard] },
  // { path: 'stats', loadChildren: '', canLoad: [CoreRoutingGuard] },
  // { path: 'openings', loadChildren: '', canLoad: [CoreRoutingGuard] },
  // { path: 'my-openings', loadChildren: '', canLoad: [CoreRoutingGuard] },
  { path: 'account', loadChildren: '../account/account.module#AccountModule'}
];

@NgModule({
  providers: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
