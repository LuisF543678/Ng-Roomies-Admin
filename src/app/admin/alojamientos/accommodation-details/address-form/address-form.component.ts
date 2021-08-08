import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Accommodation } from 'src/app/models/accomodation';

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

}
