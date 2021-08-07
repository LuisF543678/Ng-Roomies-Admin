import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {
  @Output()
  emitData: EventEmitter<FormGroup>;

  form: FormGroup;
  
  constructor(private builder: FormBuilder) {
    this.emitData = new EventEmitter();
    this.initForm();
  }

  ngOnInit(): void {
  }

  sendForm(): void {
    if (this.form.valid) {
      this.emitData.emit(this.form);
    }
  }

  initForm(): void {
    this.form = this.builder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      rooms: ['', [Validators.required]],
      startDay: ['', [Validators.required]],
      endDay: ['', [Validators.required]],
      startHour: ['', [Validators.required]],
      endHour: ['', [Validators.required]]
    });
  }
}
