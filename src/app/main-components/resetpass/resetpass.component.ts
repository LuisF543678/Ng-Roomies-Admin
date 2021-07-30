import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css']
})
export class ResetpassComponent implements OnInit {

  resetForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  })
  constructor(private fb: FormBuilder) { }
  data: any;// = {fefse: "dfgdf"};
  ngOnInit(): void {
  }

  refreshComponent(): void {
    window.location.reload();
  }

  onSubmit(): void {
    console.log("Enviando");
    
    /* this.user.changePasswordLink(this.resetForm.value.email).subscribe(data => { console.log(data);
      this.data = data;
    }) */
  }
  
}
