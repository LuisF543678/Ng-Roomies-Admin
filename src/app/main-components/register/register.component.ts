import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordFormat, PASSWORD_REGEXP } from 'src/app/services/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.initForm();
  }
  
  ngOnInit(): void {
  }
  
  onSubmit(): void {
    
  }
  
  initForm(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      fatherSurname: ['', Validators.required],
      motherSurname: ['', Validators.required],
      gender: ['male', Validators.required],
      password: ['', [Validators.required, passwordFormat(PASSWORD_REGEXP)]],
      confirmPassword: ['', [Validators.required, passwordFormat(PASSWORD_REGEXP)]],
    });
  }

}
