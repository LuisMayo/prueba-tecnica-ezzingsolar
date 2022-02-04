import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../bean/user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserForm {
  @Input() users: User[] | undefined;
  @ViewChild('userForm')
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }
}