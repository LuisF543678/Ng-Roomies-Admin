import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/main-components/register/confirm-dialog/confirm-dialog.component';
import { Accommodation } from 'src/app/models/accomodation';
import { AccommodationService } from 'src/app/services/accommodation.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  @Input()
  accommodation: Accommodation;

  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private accommodationService: AccommodationService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.builder.group({
      street: [this.accommodation.location.street, [Validators.required]],
      outdoorNumber: [this.accommodation.location.outdoorNumber, [Validators.required]],
      district: [this.accommodation.location.district, [Validators.required]],
      zipCode: [this.accommodation.location.zipCode, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      city: [this.accommodation.location.city, [Validators.required]],
      state: [this.accommodation.location.state, [Validators.required]]
    });

    this.form.disable();
  }

  enableForm(): void {
    this.form.enable();
  }

  disableForm(): void {
    this.form.disable();
  }

  updateAccommodationModel(): void {
    this.accommodation.location = this.form.value;
  }

  async saveChanges(): Promise<void> {
    this.updateAccommodationModel();
    await this.accommodationService.updateAccommodation(this.accommodation);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Felicidades',
        message: 'Se actualizó la dirección del alojamiento'
      }
    });

    dialogRef.afterClosed().subscribe(
      () => {
        this.disableForm();
      }
    );
  }
}
