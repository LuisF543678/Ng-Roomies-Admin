import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private router: Router) { }
  // b64_to_utf8(str: string) {
  //   return decodeURIComponent(escape(window.atob(str)));
  //}
  canActivate(): boolean {
    let user: any;
    user = localStorage.getItem('user');
    if (user != null) {
      user = JSON.parse(user);
      console.log(user)
      if (user.username !== undefined) {
        console.log('true');
        return true;
      }
    }
    console.log('false')
    return false;
  }

}
