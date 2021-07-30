import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  utf8_to_b64(str: string) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }
  
  onSubmit() {
    
  }

  borrarS() {
    localStorage.removeItem('user');
    //this.router.navigate(['/']);
  }

}
