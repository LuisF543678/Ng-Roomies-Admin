import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UserSignUp } from 'src/app/models/vo/usersignup';
import { AuthService } from 'src/app/services/auth.service';
import { passwordFormat, PASSWORD_REGEXP } from 'src/app/services/utils';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  dialogSubscription: Subscription;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {
    this.initForm();
  }
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.dialogSubscription) {
      this.dialogSubscription.unsubscribe();
    }
  }
  
  async onSubmit(): Promise<void> {
    if (this.registerForm.valid && this.areSamePasswords()) {
      const data = this.parseFormDataToUserSignup();
      const result = await this.authService.signUp(data);
      if (result) {
        this.openDialog('Felicidades, tu cuenta se ha creado', `Se ha enviado un correo de verificación a la dirección ${data.username}`);
      } else {
        this.openDialog('Lo siento mucho', 'Tu cuenta no ha sido creada.');
      }
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
      admin: true
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

  openDialog(title: string, message: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title,
        message
      }
    });

    this.dialogSubscription = dialogRef.afterClosed().subscribe(() => {
      this.registerForm.reset();
    });
  }
}
