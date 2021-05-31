import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

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
  constructor(private fb: FormBuilder, private user: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  utf8_to_b64(str: string) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }
  
  onSubmit() {
    this.user.auth(this.profileForm.value).subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        localStorage.setItem('user', this.utf8_to_b64(JSON.stringify(res.data)))
        console.log(res.data);
        this.router.navigate(['/admin/menu']);
      } else {
        console.log('Fallo en el inicio de sesión');
      }
    });
  }

  borrarS() {
    localStorage.removeItem('user');
    //this.router.navigate(['/']);
  }

}
