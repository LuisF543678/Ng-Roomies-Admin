import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from 'src/app/services/http-client.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private user: UserService, private httpClient: HttpClientService) { }

  ngOnInit(): void {
  }
  //NO ES ESTE

  onSubmit() {
    // console.log(this.profileForm.value);
    // let val = this.httpClient.get('https://reqres.in/api/user');
    // console.log(val);
    this.user.auth(this.profileForm.value).subscribe((res: any) => {
      console.log(res);
      res.success ? localStorage.setItem('user', atob(res.data)) : console.log('Fallo en el inicio de sesión');
    });
  }

}
