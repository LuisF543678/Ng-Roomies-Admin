import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private router: Router) { }
  b64_to_utf8(str: string) {
    return decodeURIComponent(escape(window.atob(str)));
  }
  canActivate(): boolean {
    let user: any;
    user = localStorage.getItem('user');
    //console.log(user);
    let duser = this.b64_to_utf8(user);
    if (duser !== null) {
      user = JSON.parse(duser);
      if (user.access_token !== undefined) {
        console.log('true');
        return true;
      }
    }
    return false;
  }

}
