import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeticionesService } from '../services/peticiones.service';

import { User } from 'src/app/models/user';
import { map } from 'rxjs/operators';
import { Accommodation } from 'src/app/models/accomodation';

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

  alojamientoList: Accommodation[];

  constructor(private router: Router, private fb: FormBuilder, private peticiones: PeticionesService) {
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = true;
    }, 1000);

    /* 
        this.messageform = this.fb.group({
          'reason': new FormControl('', [Validators.required]),
        });
     */
    this.mostrarAlojamientos();
  }

mostrarAlojamientos() {
  this.peticiones.getAlojamientos().snapshotChanges().subscribe(item => {
    this.alojamientoList=[];
    item.forEach(element =>{
      let x = element.payload.toJSON();
      x["$keyRegistro"] = element.key;
      this.alojamientoList.push(x as Accommodation);
    });
  }); 
}
  
  signOff() {
    localStorage.removeItem('user');
  }



}
