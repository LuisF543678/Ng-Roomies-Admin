import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Accommodation } from 'src/app/models/accomodation';
import { AccommodationService } from 'src/app/services/accommodation.service';
import { AuthService } from 'src/app/services/auth.service';
import { PeticionesService } from '../services/peticiones.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
id;
user;
accommodationSubscription: Subscription;
  constructor(
    private route:ActivatedRoute, 
    private accommodationService: AccommodationService,
    private peticiones: PeticionesService,
    private location:Location, 
    private authService:AuthService) {
    this.id = this.route.snapshot.paramMap.get("id");
  }
  public loader: Boolean = false;


  ngOnInit(): void {
    setTimeout(() => {
      this.loader = true;
    }, 1000);
    this.fetchUser();
  }
  fetchUser(){
    this.accommodationSubscription = this.accommodationService
      .getUserByIdString(this.id)
      .subscribe(
        (data: Accommodation) => {
          this.user = data;
          console.log(this.user);
        },
        console.error
      );
  }
  back(){
    this.location.back();
  }
}
