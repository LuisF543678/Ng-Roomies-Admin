import { OnDestroy } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UploadImage } from 'src/app/models/vo/upload-image';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pick-photo-dialog',
  templateUrl: './pick-photo-dialog.component.html',
  styleUrls: ['./pick-photo-dialog.component.css']
})
export class PickPhotoDialogComponent implements OnInit, OnDestroy {
  reader: FileReader;
  upload: UploadImage;
  imageSubscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<PickPhotoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: number,
    private service: UserService  
  ) {
    this.upload = UploadImage.createVoid();
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
    const file = files ? files[0] : null;

    if (file) {
      if (!file.type.includes('image')) {
        throw new Error('pick only images');
      }

      const urlFile = this.reader.readAsDataURL(file);
      this.reader.onloadend = () => {
        this.upload = new UploadImage(`profile-${this.data}-${Date.now()}`, this.reader.result);
      }
    }
  }

  uploadImage(): void {
    if (this.upload.file) {
      const uploadClone = new UploadImage(this.upload.filename, this.upload.file.split(',')[1]);
      this.imageSubscription = this.service.uploadPhoto(this.data, uploadClone).subscribe(
        (data) => {
          this.closeDialog();
        }
      );
    }
  }
}
