import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/lessee';
import { LessorService } from 'src/app/services/lessor.service';

@Component({
  selector: 'app-delete-contact-dialog',
  templateUrl: './delete-contact-dialog.component.html',
  styleUrls: ['./delete-contact-dialog.component.css']
})
export class DeleteContactDialogComponent implements OnInit, OnDestroy {
  responseSubscription: Subscription = new Subscription();

  constructor(
    private dialogRef: MatDialogRef<DeleteContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact,
    private service: LessorService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.responseSubscription.unsubscribe();
  }

  deleteContact(): void {
    this.responseSubscription = this.service.deleteContact(this.data.ID).subscribe(
      (data) => {
        this.close();
      }
    );
  }

  close(): void {
    this.dialogRef.close();
  }
}
