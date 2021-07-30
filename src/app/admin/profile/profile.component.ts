import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { DeleteContactDialogComponent } from '../components/delete-contact-dialog/delete-contact-dialog.component';
import { PickPhotoDialogComponent } from '../components/pick-photo-dialog/pick-photo-dialog.component';
import { UpdateContactDialogComponent } from '../components/update-contact-dialog/update-contact-dialog.component';
import { UpdateprofileComponent } from '../components/updateprofile/updateprofile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  lesseeSubscription: Subscription = new Subscription();
  userSubscription: Subscription = new Subscription();
  add: boolean = false;
  public loader: Boolean = false;

  constructor(
    private dialog: MatDialog,
  ) { }
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = true;
    }, 1000);
  }

 
}
