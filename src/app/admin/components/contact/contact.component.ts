import { OnChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Contact, User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { DeleteContactDialogComponent } from '../delete-contact-dialog/delete-contact-dialog.component';
import { UpdateContactDialogComponent } from '../update-contact-dialog/update-contact-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnChanges {
  @Input()
  contact: Contact;

  @Input()
  user: User;

  dialogSubscriber: Subscription;

  constructor(
    private matDialog: MatDialog,
    private authService: AuthService,
  ) { }

  ngOnChanges(): void {
    if (this.dialogSubscriber) {
      this.dialogSubscriber.unsubscribe();
      this.dialogSubscriber = null;
    }
  }

  ngOnInit(): void {
  }

  showUpdateDialog(): void {
    const dialogRef = this.matDialog.open(UpdateContactDialogComponent, {
      data: this.contact,
    });

    this.dialogSubscriber = dialogRef.afterClosed().subscribe(
      (data: Contact) => {
        if (data) {
          const id = this.user.contacts.indexOf(this.contact);
          this.user.contacts[id] = data;
          localStorage.setItem('user', JSON.stringify(this.user));
          this.authService.updateUser(this.user);
        }
      },
      console.error
    );
  }

  showDeleteDialog(): void {
    const dialogRef = this.matDialog.open(DeleteContactDialogComponent);

    this.dialogSubscriber = dialogRef.afterClosed().subscribe(
      (data: boolean) => {
        if (data) {
          const contactsFiltered = this.user.contacts.filter(e => (e.name != this.contact.name && e.value != this.contact.value));
          this.user.contacts = contactsFiltered;
          localStorage.setItem('user', JSON.stringify(this.user));
          this.authService.updateUser(this.user);
        }
      },
      console.error
    );
  }
}
