import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
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
  user: User;
  add: boolean = false;
  public loader: Boolean = false;
  dialogSubscription: Subscription;

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.fetchUserData();
    setTimeout(() => {
      this.loader = true;
    }, 1000);
  }
  
  ngOnDestroy(): void {
    if (this.dialogSubscription) {
      this.dialogSubscription.unsubscribe();
    }
  }

  fetchUserData(): void {
    this.user = this.authService.getCurrentUser();
  }

  displayOrHide(value: boolean): void {
    this.add = value;
  }

  openPhotoDialog(): void {
    const dialogRef = this.dialog.open(PickPhotoDialogComponent, {
      data: this.user.id,
      width: '500px',
    });

    this.dialogSubscription = dialogRef.afterClosed().subscribe(
      (data: string) => {
        console.log(data);
        if (data) {
          this.user.photo = data;
          localStorage.setItem('user', JSON.stringify(this.user));
          this.authService.updateUser(this.user);
        }
      }
    );

  }
}
