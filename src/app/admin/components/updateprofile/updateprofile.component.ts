import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UpdateProfile } from 'src/app/models/vo/update-profile';
import { UserService } from 'src/app/services/user.service';

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
    @Inject(MAT_DIALOG_DATA) public data: User, private service: UserService) {
    this.group = this.builder.group({
      username: [data.user_name, [Validators.required, Validators.email]],
      name: [data.name, [Validators.required]],
      fatherSurname: [data.father_surname, [Validators.required]],
      motherSurname: [data.mother_surname, [Validators.required]],
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
      
      this.updateProfileHelper(this.data.ID, updateProfile);
    }
  }

  updateProfileHelper(id: number, user: UpdateProfile): void {
    this.responseSubscription = this.service.updateProfile(id, user).subscribe(
      (data: any) => {
        this.closeDialog();
      }
    );
  }
}
