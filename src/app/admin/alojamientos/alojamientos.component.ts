import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Accommodation } from 'src/app/models/accomodation';
import { User } from 'src/app/models/user';
import { AccommodationService } from 'src/app/services/accommodation.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.css']
})
export class AlojamientosComponent implements OnInit, OnDestroy {

  accommodations: Accommodation[];
  accommodationSubscription: Subscription;

  constructor(
    private router: Router,
    private accommodationService: AccommodationService,
    private authService: AuthService,
    ) { }

  public loader: Boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = true; 
    }, 1000);

    this.loadAccommodations();
  }

  ngOnDestroy(): void {
    if (this.accommodationSubscription) {
      this.accommodationSubscription.unsubscribe();
    }
  }

  borrarS() {
    localStorage.removeItem('user');
    //this.router.navigate(['/']);
  }

  public signOut(): void {
    this.authService.signOut();
  }

  navigateToCreate(): void {
    this.router.navigate(['/admin', 'alojamientos', 'create']);
  }

  loadAccommodations(): void {
    const manager: User = this.authService.getCurrentUser();
    console.log(manager);
    this.accommodationSubscription = this.accommodationService
      .getAccommodationsByManager(manager)
      .subscribe(
        (data: Accommodation[]) => {
          this.accommodations = data;
          console.log(this.accommodations);
        },
        console.error
      );      
  }

  navigateToDetails(accommodation: Accommodation): void {
    this.router.navigate(['/admin', 'alojamientos', String(accommodation.id)]);
  }
  navigateToPeticiones(accommodation: Accommodation): void {
    this.router.navigate(['/admin', 'peticiones-arrendamientos', String(accommodation.id)]);
  }
}
