import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor() { }
  public loader: Boolean = false;


  ngOnInit(): void {
    setTimeout(() => {
      this.loader = true;
    }, 1000);
  }

}
