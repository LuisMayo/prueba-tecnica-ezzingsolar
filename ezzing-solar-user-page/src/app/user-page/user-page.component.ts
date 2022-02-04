import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './bean/user';
import { UserForm } from './user-form/user-form.component';

@Component({
  selector: 'user-page',
  template: `
  <p>User page</p>
  <user-form [users]="users"></user-form>
  <button (click)="checkValidForm()">Validate</button>
  `,
  styleUrls: ['./user-page.component.css']
})
export class UserPage {
  @ViewChild(UserForm)
  userForm!: UserForm;
  users: User[] = [
    { id: '1', name: 'Vanesa' },
    { id: '2', name: 'Gaspar' },
    { id: '3', name: 'Ignacio' },
    { id: '4', name: 'Laura' },
    { id: '5', name: 'Ramiro' }
  ];

  checkValidForm() {
    console.log(`El formulario es ${this.userForm.form.valid ? 'valido' : 'invalido'}`);
  }
}
