import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Accommodation } from 'src/app/models/accomodation';
import { AccommodationService } from 'src/app/services/accommodation.service';

@Component({
  selector: 'app-accommodation-details',
  templateUrl: './accommodation-details.component.html',
  styleUrls: ['./accommodation-details.component.css']
})
export class AccommodationDetailsComponent implements OnInit, OnDestroy {
  id: number;
  accommodationSubscription: Subscription;
  accommodation: Accommodation;

  constructor(
    private route: ActivatedRoute,
    private accommodationService: AccommodationService,
  ) {
    this.id = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.fetchAccommodation();
  }

  ngOnDestroy(): void {
    if (this.accommodationSubscription) {
      this.accommodationSubscription.unsubscribe();
    }
  }

  fetchAccommodation(): void {
    this.accommodationSubscription = this.accommodationService
      .getAccommodationById(this.id)
      .subscribe(
        (data: Accommodation) => {
          this.accommodation = data;
        },
        console.error
      );
  }

}
