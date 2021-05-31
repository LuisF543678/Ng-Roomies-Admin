import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Contact, Lessee } from 'src/app/models/lessee';
import { User } from 'src/app/models/user';
import { LessorService } from 'src/app/services/lessor.service';
import { UserService } from 'src/app/services/user.service';
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
  user: User = User.createVoid();
  lessee: Lessee = Lessee.createVoid();
  lesseeSubscription: Subscription = new Subscription();
  userSubscription: Subscription = new Subscription();
  add: boolean = false;
  public loader: Boolean = false;

  constructor(
    private service: LessorService,
    private dialog: MatDialog,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = true;
    }, 1000);
    this.user = this.decodeUser();
    this.getLesseeData(this.user.ID);
  }

  signOff() {
    localStorage.removeItem('user');
    //this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.lesseeSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  getLesseeData(id: number) {
    this.lesseeSubscription = this.service.getLesseeByUserID(id).subscribe(
      (data: any) => {
        this.lessee = data.data;
      }
    );
  }

  cancelUpdate() {
    window.location.reload();
  }

  decodeUser(): User {
    let user: User = User.createVoid();
    const userEncoded = localStorage.getItem('user');
    if (userEncoded) {
      user = JSON.parse(atob(userEncoded)).user;
    }
    return user;
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(UpdateprofileComponent, {
      width: '600px',
      data: this.user,
    });

    dialogRef.afterClosed().subscribe(
      data => {
        this.getUser(this.user.ID);
      }
    );
  }

  openPhotoDialog(): void {
    let dialogRef = this.dialog.open(PickPhotoDialogComponent, {
      width: '500px',
      data: this.user.ID
    })

    dialogRef.afterClosed().subscribe(data => {
      this.getUser(this.user.ID);
    })
  }

  getUser(id: number): void {
    this.userSubscription = this.userService.getUserByID(id).subscribe(
      (data: any) => {
        this.user = data.data;
      }
    );
  }

  displayOrHide(value: boolean) {
    this.add = value;
    if (!value) {
      this.getLesseeData(this.user.ID);
    }
  }

  openUpdateDialog(contact: Contact): void {
    const dialogRef = this.dialog.open(UpdateContactDialogComponent, {
      width: '500px',
      data: contact
    });

    dialogRef.afterClosed().subscribe((data) => {
      this.getLesseeData(this.user.ID);
    });
  }

  openDeleteDialog(contact: Contact): void {
    const dialogRef = this.dialog.open(DeleteContactDialogComponent, {
      data: contact,
    });

    dialogRef.afterClosed().subscribe(
      (data) => {
        this.getLesseeData(this.user.ID);
      }
    );
  }
}
