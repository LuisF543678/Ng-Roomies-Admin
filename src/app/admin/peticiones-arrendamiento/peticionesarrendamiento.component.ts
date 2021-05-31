import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestsService } from 'src/app/services/requests.service';

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


  constructor(private requestService: RequestsService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = true;
    }, 1000);
    //this.getRequest(this.accommodation_id);
    /*  this.requestService.getRequestsAccommodation(this.id).subscribe(data => {
       console.log(data);
       this.requests_Accommodation = data;
     }); */

    this.messageform = this.fb.group({
      'reason': new FormControl('', [Validators.required]),
    });


  }



  getRequest(accommodation_id: any): void {
    this.requestService.getRequestsAccommodation(accommodation_id).subscribe(res => {
      console.log(res);
      this.requests_Accommodation = this.Accommodation;
    });
  }

  signOff() {
    localStorage.removeItem('user');
    //this.router.navigate(['/']);
  }


  sendMessage() {
    /* console.log(this.messageform.value);
    this.accommodation_id = this.messageform.value;
    if (this.messageform.valid) {
      this.requestService.RejectRequests().subscribe(
        (resp) => {
          console.warn(this.messageform.value);
        },
        err => {
          console.error(err);
          this.error = true;

        }

      );
    }
     */
  }

}
