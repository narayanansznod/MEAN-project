import { Component, OnInit, Input, NgModule } from '@angular/core';

import { MdDatepickerModule, MdNativeDateModule } from "@angular/material";
import { Observable } from "rxjs/Observable";


import {FormControl, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);
    
  //For gender selection
  myControl: FormControl = new FormControl();
  
    options = [
      'Male',
      'Female',
      'Transgender'
     ];
  

  ngOnInit() {
  }

}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: './snack-bar-component-example-snack.html',
  styleUrls: ['./home.component.css'],
})
export class PizzaPartyComponent {}

