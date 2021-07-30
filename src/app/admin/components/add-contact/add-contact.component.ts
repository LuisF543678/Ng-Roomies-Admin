import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/vo/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  @Input() id: number = -1;
  @Output() closeForm: EventEmitter<boolean>;

  builder: FormBuilder = new FormBuilder();
  group: FormGroup;
  contactSubscription: Subscription = new Subscription();

  constructor() {
    this.group = this.builder.group({
      name: ['', [Validators.required]],
      contactValue: ['', [Validators.required]]
    });

    this.closeForm = new EventEmitter();
  }

  ngOnInit(): void {
  }

  submitContact(): void {
    if (this.group.valid) {
      const contact = new Contact(this.group.get('name')?.value, this.group.get('contactValue')?.value);
      this.sendContact(this.id, contact);
    }
  }

  sendContact(id: number, contact: Contact): void {
  }

  close(): void {
    this.closeForm.emit(false);
  }
}
