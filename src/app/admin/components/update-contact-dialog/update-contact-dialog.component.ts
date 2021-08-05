import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import * as UpdateContact from 'src/app/models/vo/contact';

@Component({
  selector: 'app-update-contact-dialog',
  templateUrl: './update-contact-dialog.component.html',
  styleUrls: ['./update-contact-dialog.component.css']
})
export class UpdateContactDialogComponent implements OnInit, OnDestroy {
  builder: FormBuilder = new FormBuilder();
  group: FormGroup;
  updateSubscription = new Subscription();

  constructor(
    public dialogRef: MatDialogRef<UpdateContactDialogComponent>,
  ) {
    
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.updateSubscription.unsubscribe();
  }

  sendContact(): void {
    if (this.group.valid) {
      const contact = new UpdateContact.Contact(this.group.get('name')?.value, this.group.get('value')?.value);
    }
  }

  updateContact(id: number, contact: UpdateContact.Contact) {
    
  }

  close(): void {
    this.dialogRef.close();
  }
}
