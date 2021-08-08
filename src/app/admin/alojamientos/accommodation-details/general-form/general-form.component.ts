import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Accommodation } from 'src/app/models/accomodation';

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

  saveChanges(): void {
    
  }
}
