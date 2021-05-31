import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from 'src/app/services/http-client.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    username: ['', Validators.required],
    name: ['', Validators.required],
    father_surname: ['', Validators.required],
    mother_surname: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    gender: ['male', Validators.required]
  });

  passMatches = false;

  constructor(private fb: FormBuilder, private httpClient: HttpClientService, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.registerForm.value);
    // let val = this.httpClient.get('https://reqres.in/api/user');
    // console.log(val);
    const newUser = {
      "username": this.registerForm.value.username,
      "name": this.registerForm.value.name,
      "father_surname": this.registerForm.value.father_surname,
      "mother_surname": this.registerForm.value.mother_surname,
      "password": this.registerForm.value.password,
      "user_role_id": 2
    }
    console.log('Raw form \n', this.registerForm.value, '\n');
    console.log(newUser);

    this.userService.registerUser(newUser).subscribe((a) => console.log(a));
  }

  passMatch() {
    this.registerForm.value.password === this.registerForm.value.confirmPassword ? this.passMatches = true : this.passMatches = false;
    console.log(this.passMatches);
    console.log('form is valid', this.registerForm.valid);

  }

}
