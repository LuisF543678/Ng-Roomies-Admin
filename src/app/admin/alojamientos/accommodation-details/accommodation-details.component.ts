import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Accommodation } from 'src/app/models/accomodation';
import { AccommodationService } from 'src/app/services/accommodation.service';
import { PhotoDialogComponent } from './photo-dialog/photo-dialog.component';

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
    private dialog: MatDialog,
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

  openPickUpDialog(): void {
    const dialogRef = this.dialog.open(PhotoDialogComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(
      (result: string) => {
        if (result) {
          this.accommodation.firstPhoto = result;
          this.accommodationService.updateAccommodation(this.accommodation);
        }
      }
    );
  }
}
