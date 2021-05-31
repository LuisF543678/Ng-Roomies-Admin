import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listaarrendados',
  templateUrl: './listaarrendados.component.html',
  styleUrls: ['./listaarrendados.component.css']
})
export class ListaarrendadosComponent implements OnInit {

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
