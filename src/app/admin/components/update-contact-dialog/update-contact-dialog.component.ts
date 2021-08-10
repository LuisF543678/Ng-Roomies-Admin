import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Contact, User } from 'src/app/models/user';
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
    @Inject(MAT_DIALOG_DATA) private data: Contact,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.updateSubscription.unsubscribe();
  }

  initForm(): void {
    this.group = this.builder.group({
      name: [this.data.name, [Validators.required]],
      contactValue: [this.data.value, [Validators.required]],
    });
  }

  sendContact(): void {
    if (this.group.valid) {
      const contact: Contact = {
        name: this.group.get('name').value,
        value: this.group.get('contactValue').value,
      }

      this.dialogRef.close(contact);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
