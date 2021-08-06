import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-accommodation',
  templateUrl: './create-accommodation.component.html',
  styleUrls: ['./create-accommodation.component.css']
})
export class CreateAccommodationComponent implements OnInit {
  informationForm: FormGroup;
  addressForm: FormGroup;
  coordinatesForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.initForms();
  }

  ngOnInit(): void {
  }

  initForms(): void {
    this.informationForm = this.builder.group({
      name: ['', [Validators.required]],
      price: [0, [Validators.required]],
      rooms: [0, [Validators.required]],
      startDay: ['', [Validators.required]],
      endDay: ['', [Validators.required]],
      startHour: ['', [Validators.required]],
      endHour: ['', [Validators.required]]
    });

    this.addressForm = this.builder.group({
      city: ['', [Validators.required]],
      district: ['', [Validators.required]],
      outdoorNumber: ['', [Validators.required, Validators.min(3)]],
      state: ['', [Validators.required]],
      street: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]]
    });

    this.coordinatesForm = this.builder.group({
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]]
    });
  }

}
