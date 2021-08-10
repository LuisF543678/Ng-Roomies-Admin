import { OnDestroy } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UploadImage } from 'src/app/models/vo/upload-image';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pick-photo-dialog',
  templateUrl: './pick-photo-dialog.component.html',
  styleUrls: ['./pick-photo-dialog.component.css']
})
export class PickPhotoDialogComponent implements OnInit, OnDestroy {
  reader: FileReader;
  file: File;
  fileBin: string | ArrayBuffer;
  imageSubscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<PickPhotoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private authService: AuthService,
  ) {
    this.reader = new FileReader();
    this.imageSubscription = new Subscription();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.imageSubscription.unsubscribe();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  pickFile(event: Event): void {
    const files = (event?.target as HTMLInputElement).files;
    this.file = files ? files[0] : null;

    if (this.file) {
      if (!this.file.type.includes('image')) {
        throw new Error('pick only images');
      }

      this.reader.readAsDataURL(this.file);
      this.reader.onloadend = () => {
        this.fileBin = this.reader.result;
      }
    }
  }

  async uploadImage(): Promise<void> {
    if (this.file) {
      const url = await this.authService.uploadProfilePhoto(this.file, this.data);
      this.dialogRef.close(url);
    }
  }
}
