import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  @Input()
  user: User;

  form: FormGroup;

  constructor(
    private builder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.builder.group({
      firstName: [this.user.firstName, [Validators.required]],
      fatherSurname: [this.user.fatherSurname, [Validators.required]],
      motherSurname: [this.user.motherSurname, [Validators.required]],
      birthDate: [this.user.birthDate, [Validators.required]],
      gender: [this.user.gender, [Validators.required]],
    });

    this.form.disable();
  }

  enableForm(): void {
    this.form.enable();
  }

  disableForm(): void {
    this.form.disable();
  }
}
