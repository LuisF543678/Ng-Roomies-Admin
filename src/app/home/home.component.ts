import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profileForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  async onGoogleLogin() {
    try {
      this.auth.loginGoogle();
    }
    catch (error) {
      console.log(error)
    }
  }

  utf8_to_b64(str: string) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  onSubmit() {
    this.auth.signIn(this.profileForm.value.username, this.profileForm.value.password)
    this.router.navigate(['/admin/menu']);
  }



  borrarS() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

}
