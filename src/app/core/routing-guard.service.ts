import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RoutingGuardService implements CanLoad, CanActivate {
  constructor(private userService: UserService) {}

  canLoad(activeRoute: Route): Observable<boolean> {
    return this.userService.getUserAllowedPaths().pipe(map((activePaths) => activePaths.indexOf(activeRoute.path) > -1));
  }

  canActivate(activeRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.getUserAllowedPaths().pipe(map((activePaths) => activePaths.indexOf(state.url) > -1));
  }
}
