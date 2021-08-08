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
  id:number;
  alojamientoList: Accommodation[];
  accommodations: Accommodation[];
  accommodationSubscription: Subscription;
  accommodation;
  requests;
  constructor(
    private router: Router,
    private route:ActivatedRoute, 
    private fb: FormBuilder, 
    private accommodationService: AccommodationService,
    private peticiones: PeticionesService, 
    private authService:AuthService) {
    this.id = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = true;
    }, 1000);
    this.fetchAccommodation();
    /* 
        this.messageform = this.fb.group({
          'reason': new FormControl('', [Validators.required]),
        });
     */
    // this.mostrarAlojamientos();
  }

// mostrarAlojamientos() {
//   this.peticiones.getAlojamientos().snapshotChanges().subscribe(item => {
//     this.alojamientoList=[];
//     item.forEach(element =>{
//       let x = element.payload.toJSON();
//       x["$keyRegistro"] = element.key;
//       this.alojamientoList.push(x as Accommodation);
//     });
//   }); 
// }
  
  signOff() {
    localStorage.removeItem('user');
  }
  
  searchPeticiones(){
    console.log(this.requests[0].name); 
   
  }
  fetchAccommodation(): void {
    this.accommodationSubscription = this.accommodationService
      .getAccommodationById(this.id)
      .subscribe(
        (data: Accommodation) => {
          this.accommodation = data;
          this.requests = Object.values(this.accommodation.requests);
          console.log(this.requests)
        },
        console.error
      );
  }
}
