import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccommodationService } from 'src/app/services/accommodation.service';

@Component({
  selector: 'app-delete-accommodation-dialog',
  templateUrl: './delete-accommodation-dialog.component.html',
  styleUrls: ['./delete-accommodation-dialog.component.css']
})
export class DeleteAccommodationDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteAccommodationDialogComponent>,
    private accommodationService: AccommodationService,
    @Inject(MAT_DIALOG_DATA) private key: string,
  ) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  delete(): void {
    this.accommodationService.deleteAccommodation(this.key);
    this.closeDialog();
  }
}
