import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Contact } from 'src/app/models/vo/contact';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  @Input() user: User;
  @Output() closeForm: EventEmitter<boolean>;

  builder: FormBuilder = new FormBuilder();
  group: FormGroup;

  constructor(
    private authService: AuthService,
  ) {
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
      const contact: Contact = {
        name: this.group.get('name').value,
        value: this.group.get('contactValue').value,
      };

      this.sendContact(contact);
    }
  }

  sendContact(contact: Contact): void {
    if (!this.user.contacts) {
      this.user.contacts = [];
    }

    this.user.contacts.push(contact);

    localStorage.setItem('user', JSON.stringify(this.user));
    this.authService.updateUser(this.user);
    this.close();
  }

  close(): void {
    this.closeForm.emit(false);
  }
}
