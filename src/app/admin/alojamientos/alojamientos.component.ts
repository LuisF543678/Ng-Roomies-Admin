import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.css']
})
export class AlojamientosComponent implements OnInit {

  constructor(private router:Router) { }
  public loader: Boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = true; 
    }, 1000);
  }

  borrarS() {
    localStorage.removeItem('user');
    //this.router.navigate(['/']);
  }

  navigateToCreate(): void {
    this.router.navigate(['/admin', 'alojamientos', 'create']);
  }
}
