import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/lessee';
import * as UpdateContact from 'src/app/models/vo/contact';
import { LessorService } from 'src/app/services/lessor.service';

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
    private service: LessorService,
    public dialogRef: MatDialogRef<UpdateContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Contact
  ) {
    this.group = this.builder.group({
      name: [this.data.Name, [Validators.required]],
      value: [this.data.Value, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.updateSubscription.unsubscribe();
  }

  sendContact(): void {
    if (this.group.valid) {
      const contact = new UpdateContact.Contact(this.group.get('name')?.value, this.group.get('value')?.value);
      this.updateContact(this.data.ID, contact)   
    }
  }

  updateContact(id: number, contact: UpdateContact.Contact) {
    this.updateSubscription = this.service.updateContact(id, contact).subscribe(
      (data) => {
        this.close();
      }
    );
  }

  close(): void {
    this.dialogRef.close();
  }
}
