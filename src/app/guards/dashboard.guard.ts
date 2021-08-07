import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private router: Router) { }
  
  canActivate(): boolean {
    let user: User;
    user = JSON.parse(localStorage.getItem('user'));
    
    if (user) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }

}
