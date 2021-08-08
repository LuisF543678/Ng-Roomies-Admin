import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/main-components/register/confirm-dialog/confirm-dialog.component';
import { Accommodation } from 'src/app/models/accomodation';
import { AccommodationService } from 'src/app/services/accommodation.service';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.css']
})
export class GeneralFormComponent implements OnInit {
  @Input()
  accommodation: Accommodation;
  
  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private accommodationService: AccommodationService,
    private dialog: MatDialog,
  ) {
  }
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.builder.group({
      name: [this.accommodation.name, [Validators.required]],
      price: [this.accommodation.price, [Validators.required]],
      rooms: [this.accommodation.rooms, [Validators.required]],
      startDay: [this.accommodation.schedule.startDay, [Validators.required]],
      endDay: [this.accommodation.schedule.endDay, [Validators.required]],
      startHour: [this.accommodation.schedule.startHour, [Validators.required]],
      endHour: [this.accommodation.schedule.endHour, [Validators.required]]   
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
    this.accommodation.name = this.form.get('name').value;
    this.accommodation.price = this.form.get('price').value;
    this.accommodation.rooms = this.form.get('rooms').value;
    this.accommodation.schedule.startDay = this.form.get('startDay').value;
    this.accommodation.schedule.endDay = this.form.get('endDay').value;
    this.accommodation.schedule.startHour = this.form.get('startHour').value;
    this.accommodation.schedule.endHour = this.form.get('endHour').value;
  }

  async saveChanges(): Promise<void> {
    this.updateAccommodationModel();
    await this.accommodationService.updateAccommodation(this.accommodation);
    
    const dialogRef = this.dialog.open(
      ConfirmDialogComponent,
      {
        data: {
          title: 'Felicidades',
          message: 'Se ha actualizado la información general'
        }
      }
    );

    dialogRef.afterClosed().subscribe(
      () => {
        console.log('Dialog closed');
        this.disableForm();
      },
      console.error
    );
  }


}
