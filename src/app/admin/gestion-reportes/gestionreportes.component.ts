import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Accommodation } from 'src/app/models/accomodation';
import { AccommodationService } from 'src/app/services/accommodation.service';

@Component({
  selector: 'app-gestionreportes',
  templateUrl: './gestionreportes.component.html',
  styleUrls: ['./gestionreportes.component.css']
})
export class GestionreportesComponent implements OnInit {
reports;
accommodationSubscription: Subscription;
accommodation;
id;
  public loader: Boolean = false;
  constructor(private accommodationService: AccommodationService, private route:ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get("id");
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = true;
    }, 1000);
    this.fetchAccommodation();
  }
  
  signOff() {
    localStorage.removeItem('user');
    //this.router.navigate(['/']);
  }
  fetchAccommodation(): void {
    this.accommodationSubscription = this.accommodationService
      .getAccommodationByIdString(this.id)
      .subscribe(
        (data: Accommodation) => {
          this.accommodation = data;
          this.reports = Object.values(this.accommodation.reports);
          console.log(this.reports)
        },
        console.error
      );
  }
	

}
