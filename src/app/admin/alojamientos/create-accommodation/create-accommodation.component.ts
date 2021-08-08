import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/main-components/register/confirm-dialog/confirm-dialog.component';
import { Accommodation, Coordinates, createEmptyAccommodation } from 'src/app/models/accomodation';
import { AddressFormData } from 'src/app/models/vo/addressFormData';
import { InformationFormData } from 'src/app/models/vo/InformationFormData';
import { AccommodationService } from 'src/app/services/accommodation.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-accommodation',
  templateUrl: './create-accommodation.component.html',
  styleUrls: ['./create-accommodation.component.css']
})
export class CreateAccommodationComponent implements OnInit {
  form: FormGroup;
  addressForm: FormGroup;
  photoForm: FormGroup;
  photoPreview: string | ArrayBuffer;

  accommodation: Accommodation = createEmptyAccommodation();
  coordinates: Coordinates = {
    latitude: 18.4796894,
    longitude:-97.3839689
  };

  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private accommodationService: AccommodationService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.initForms();
  }

  ngOnInit(): void {
  }

  initForms(): void {
    this.form = this.builder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      rooms: ['', [Validators.required]],
      startDay: ['', [Validators.required]],
      endDay: ['', [Validators.required]],
      startHour: ['', [Validators.required]],
      endHour: ['', [Validators.required]]
    });
    
    this.addressForm = this.builder.group({
      street: ['', [Validators.required]],
      outdoorNumber: ['', [Validators.required, Validators.min(3)]],
      district: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
    });

    this.photoForm = this.builder.group({
      firstPhoto: ['', [Validators.required]]
    });
   
  }

  sendInfoData(): void {
    const data: InformationFormData = this.form.value;
    const { name, price, rooms, startDay, endDay, startHour, endHour } = data;
    this.accommodation.name = name;
    this.accommodation.price = price;
    this.accommodation.rooms = rooms;
    this.accommodation.schedule.startDay = startDay;
    this.accommodation.schedule.endDay = endDay;
    this.accommodation.schedule.startHour = startHour;
    this.accommodation.schedule.endHour = endHour;
  }

  sendAddressData(): void {
    const data: AddressFormData = this.addressForm.value;
    this.accommodation.location = data;
  }

  onChange(event): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.photoPreview = reader.result;
    }
  }

  async uploadPhoto(): Promise<void> {
    const url = await this.accommodationService.addFirstPhoto(this.photoForm.get('firstPhoto').value);
    this.accommodation.firstPhoto = url
  }

  async createAccommodation(): Promise<void> {
    await this.uploadPhoto();
    const currentUser = this.authService.getCurrentUser();
    const { admin, firstName, fatherSurname, motherSurname, username, gender, birthDate } = currentUser;

    this.accommodation.coordinates = this.coordinates;
    this.accommodation.id = Date.now();
    this.accommodationService.createAccommodation(this.accommodation, {
      firstName,
      fatherSurname,
      motherSurname,
      username,
      admin,
      gender,
      birthDate
    });

    this.form.reset();
    this.addressForm.reset();
    
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Felicidades',
        message: 'Has creado un alojamiento',
      }
    });

    dialogRef.afterClosed().subscribe(
      data => {
        console.log('Mensaje cerrado');
        this.router.navigate(['/admin', 'alojamientos']);
      },
      console.error
    );
  }
}
