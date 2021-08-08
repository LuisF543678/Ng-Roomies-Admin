import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeticionesService } from '../services/peticiones.service';

import { User } from 'src/app/models/user';

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

  requestList: Request[];

  constructor(private router: Router, private fb: FormBuilder, private peticiones: PeticionesService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = true;
    }, 1000);

    /* 
        this.messageform = this.fb.group({
          'reason': new FormControl('', [Validators.required]),
        });
     */

    this.peticiones.getRequest()
      .snapshotChanges()
      .subscribe(item => {
      this.requestList =[];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.requestList.push(x as Request);
      })
      })
  }



  getRequest(accommodation_id: any): void {

  }

  signOff() {
    localStorage.removeItem('user');
  }



}
