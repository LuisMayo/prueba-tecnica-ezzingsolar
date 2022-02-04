import { Component, OnInit } from '@angular/core';
import { User } from './bean/user';

@Component({
  selector: 'user-page',
  template: `
  <p>User page</p>
  <user-form [users]="users">
  <button (click)="checkValidForm()">
  `,
  styleUrls: ['./user-page.component.css']
})
export class UserPage {
  users: User[] = [
    { id: '1', name: 'Vanesa' },
    { id: '2', name: 'Gaspar' },
    { id: '3', name: 'Ignacio' },
    { id: '4', name: 'Laura' },
    { id: '5', name: 'Ramiro' }
  ];

  checkValidForm() {
    
  }
}
