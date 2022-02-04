import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../bean/user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserForm {
  @Input() users: User[] | undefined;
  // form: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }
}