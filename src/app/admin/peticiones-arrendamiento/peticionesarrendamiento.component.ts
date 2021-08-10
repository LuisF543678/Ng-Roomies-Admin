import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionesService } from '../services/peticiones.service';

import { User } from 'src/app/models/user';
import { map } from 'rxjs/operators';
import { Accommodation } from 'src/app/models/accomodation';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { AccommodationService } from 'src/app/services/accommodation.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-peticionesarrendamiento',
  templateUrl: './peticionesarrendamiento.component.html',
  styleUrls: ['./peticionesarrendamiento.component.css']
})
export class PeticionesarrendamientoComponent implements OnInit {

  public requests_Accommodation: any = []
  public accommodation_id = 0;
  //public id=0;
  Accommodation: any;
  public loader: Boolean = false;
  messageform: FormGroup;
  error: boolean;
  id;
  alojamientoList: Accommodation[];
  accommodations: Accommodation[];
  accommodationSubscription: Subscription;
  accommodation;
  requests;
  user;
  constructor(
    private router: Router,
    private route:ActivatedRoute, 
    private fb: FormBuilder, 
    private accommodationService: AccommodationService,
    private peticiones: PeticionesService, 
    private authService:AuthService,
    private datePipe:DatePipe) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = true;
    }, 1000);
    this.fetchAccommodation();
  }

  
  signOff() {
    localStorage.removeItem('user');
  }
  
  searchPeticiones(){
    console.log(this.requests[0].name); 
   
  }
  fetchAccommodation(): void {
    this.accommodationSubscription = this.accommodationService
      .getAccommodationByIdString(this.id)
      .subscribe(
        (data: Accommodation) => {
          this.accommodation = data;
          console.log(this.accommodation);
          this.requests = Object.values(this.accommodation.requests);
          console.log(this.requests)
        },
        console.error
      );
  }
  navigateToUser(uid){
    this.router.navigate(['/admin', 'user-details', String(uid)]);
  }
   rechazar(user,id){
    const r ={
      status:false
    }
    const date = new Date();
    const message = {
      content : "Has sido rechazado por la socieda y por el dueño del alojamiento",
      from:{
        fatherSurname:this.user.fatherSurname,
        motherSurname:this.user.motherSurname,
        firstName:this.user.firstName
      },
      sendAt:  this.datePipe.transform(date, "HH:mm"),
      title:"Solicitud Rechazado",
      viewed:false
    }
     this.accommodationService.updateStatus(r,this.accommodation,id).then((res)=>{
      console.log(res);
    });

     this.accommodationService.sendMessageRejected(user,message).then((res)=>{
      console.log(res);
    });
  }
  aceptar(user,id){
    const r ={
      status:true
    }
    const date = new Date();
    const message = {
      content : "Has sido aceptado al alojamiento que solicitaste ",
      from:{
        fatherSurname:this.user.fatherSurname,
        motherSurname:this.user.motherSurname,
        firstName:this.user.firstName
      },
      sendAt:  this.datePipe.transform(date, "HH:mm"),
      title:"Solicitud Aceptada",
      viewed:false
    }
    const alojamiento = {
      firstPhoto: this.accommodation.firstPhoto,
      id: this.accommodation.key,
      name:this.accommodation.name,
      price:this.accommodation.price
    }
    console.log(user)
    this.accommodationService.updateStatus(r,this.accommodation,id).then((res)=>{
      console.log(res);
    });
    this.accommodationService.sendMessageAccepted(user,message,alojamiento).then((res)=>{

    })
    console.log(message);
  }
}
