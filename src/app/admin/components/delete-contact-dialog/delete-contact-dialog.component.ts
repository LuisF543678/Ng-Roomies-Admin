import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-delete-contact-dialog',
  templateUrl: './delete-contact-dialog.component.html',
  styleUrls: ['./delete-contact-dialog.component.css']
})
export class DeleteContactDialogComponent implements OnInit, OnDestroy {
  responseSubscription: Subscription = new Subscription();

  constructor(
    private dialogRef: MatDialogRef<DeleteContactDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.responseSubscription.unsubscribe();
  }

  deleteContact(): void {
  }

  close(): void {
    this.dialogRef.close();
  }
}
