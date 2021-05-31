import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionreportes',
  templateUrl: './gestionreportes.component.html',
  styleUrls: ['./gestionreportes.component.css']
})
export class GestionreportesComponent implements OnInit {

  public loader: Boolean = false;
  constructor() { }

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
