import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  constructor(private router: Router) { }
  public loader: Boolean = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.loader = true;
    }, 1000);
  }
  
  signOff() {
    localStorage.removeItem('user');
    //this.router.navigate(['/']);
  }


}
