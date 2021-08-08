import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AccommodationService } from 'src/app/services/accommodation.service';

@Component({
  selector: 'app-photo-dialog',
  templateUrl: './photo-dialog.component.html',
  styleUrls: ['./photo-dialog.component.css']
})
export class PhotoDialogComponent implements OnInit {

  preview: string | ArrayBuffer;
  form: FormGroup;
  url: string;
  file: any;

  constructor(
    public dialogRef: MatDialogRef<PhotoDialogComponent>,
    private accommodationService: AccommodationService,
    private builder: FormBuilder
    ) {
      this.initForm();
    }

  ngOnInit(): void {
  }

  initForm(): void {
    this.form = this.builder.group({
      photo: ['', [Validators.required]],
    });
  }

  onChange(event: any): void {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.preview = reader.result;
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  async uploadPhoto(): Promise<void> {
    this.url = await this.accommodationService.addFirstPhoto(this.file);
    this.dialogRef.close(this.url);
  }
}
