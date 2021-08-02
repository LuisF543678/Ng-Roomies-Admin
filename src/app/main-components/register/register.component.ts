import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSignUp } from 'src/app/models/vo/usersignup';
import { AuthService } from 'src/app/services/auth.service';
import { passwordFormat, PASSWORD_REGEXP } from 'src/app/services/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.initForm();
  }
  
  ngOnInit(): void {
  }
  
  async onSubmit(): Promise<void> {
    if (this.registerForm.valid && this.areSamePasswords()) {
      const data = this.parseFormDataToUserSignup();
      const result = await this.authService.signUp(data);
      if (result) {
        console.log('Se ha creado la cuenta de usuario');
      } else {
        console.log('No se pudo crear la cuenta de usuario');
      }
<<<<<<< HEAD
    } else {
      console.log('form invalid');
=======
>>>>>>> da3f03c4157405f26fc5e4bc59a79393d483a663
    }
  }
  
  private areSamePasswords(): boolean {
    return this.registerForm.get('password').value == this.registerForm.get('confirmPassword').value;
  }

  private parseFormDataToUserSignup(): UserSignUp {
    return {
      username: this.registerForm.get('username').value,
      firstName: this.registerForm.get('firstName').value,
      fatherSurname: this.registerForm.get('fatherSurname').value,
      motherSurname: this.registerForm.get('motherSurname').value,
      gender: this.registerForm.get('gender').value,
      birthDate: this.registerForm.get('birthDate').value,
      password: this.registerForm.get('password').value,
<<<<<<< HEAD
      role: {
        name: 'Arrendador',
        slugName: 'A'
      }
=======
      admin: true
>>>>>>> da3f03c4157405f26fc5e4bc59a79393d483a663
    }
  }

  initForm(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      fatherSurname: ['', Validators.required],
      motherSurname: ['', Validators.required],
      gender: ['male', Validators.required],
      birthDate: ['', [Validators.required]],
      password: ['', [Validators.required, passwordFormat(PASSWORD_REGEXP)]],
      confirmPassword: ['', [Validators.required, passwordFormat(PASSWORD_REGEXP)]],
    });
  }

}
