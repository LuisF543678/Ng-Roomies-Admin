import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Accommodation, createEmptyAccommodation } from 'src/app/models/accomodation';
import { InformationFormData } from 'src/app/models/vo/InformationFormData';

@Component({
  selector: 'app-create-accommodation',
  templateUrl: './create-accommodation.component.html',
  styleUrls: ['./create-accommodation.component.css']
})
export class CreateAccommodationComponent implements OnInit {
  form: FormGroup;
  addressForm: FormGroup;
  coordinatesForm: FormGroup;
  accommodation: Accommodation = createEmptyAccommodation();

  constructor(private builder: FormBuilder) {
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

    this.coordinatesForm = this.builder.group({
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]]
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

  }
}
