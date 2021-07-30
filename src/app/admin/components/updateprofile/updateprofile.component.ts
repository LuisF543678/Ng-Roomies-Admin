import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UpdateProfile } from 'src/app/models/vo/update-profile';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  builder = new FormBuilder();
  group: FormGroup;
  responseSubscription: Subscription;

  constructor(public dialogRef: MatDialogRef<UpdateprofileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {
    this.group = this.builder.group({
      username: [data.username, [Validators.required, Validators.email]],
      name: [data.firstName, [Validators.required]],
      fatherSurname: [data.fatherSurname, [Validators.required]],
      motherSurname: [data.motherSurname, [Validators.required]],
      gender: [data.gender, [Validators.required]]    
    });
    this.responseSubscription = new Subscription();
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  updateProfile(): void {
    if (this.group.valid) {
      const updateProfile = new UpdateProfile(
        this.group.get('username')?.value,
        this.group.get('name')?.value,
        this.group.get('fatherSurname')?.value,
        this.group.get('motherSurname')?.value,
        this.data.gender
      );
      
      this.updateProfileHelper(this.data.id, updateProfile);
    }
  }

  updateProfileHelper(id: string, user: UpdateProfile): void {
   
  }
}
