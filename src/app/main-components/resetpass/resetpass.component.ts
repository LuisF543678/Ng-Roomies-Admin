import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css']
})
export class ResetpassComponent implements OnInit {

  resetForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  })
  constructor(private fb: FormBuilder, private auth: AuthService) { }
  data: any;// = {fefse: "dfgdf"};
  ngOnInit(): void {
  }

  refreshComponent(): void {
    window.location.reload();
  }

  onSubmit(): void {
    this.auth.resetPassword(this.resetForm.value.email)
    .then((res) => {
      this.data = res;
    })
    // console.log(this.resetForm.value.email)
    /* this.user.changePasswordLink(this.resetForm.value.email).subscribe(data => { console.log(data);
      this.data = data;
    }) */
  
  }
  
}
