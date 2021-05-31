import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  public loader: Boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = true;
    }, 300);
  }

}
