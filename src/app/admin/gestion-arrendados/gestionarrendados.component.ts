import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionarrendados',
  templateUrl: './gestionarrendados.component.html',
  styleUrls: ['./gestionarrendados.component.css']
})
export class GestionarrendadosComponent implements OnInit {

  constructor() { }
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
