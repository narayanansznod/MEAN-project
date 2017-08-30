import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MdSnackBar } from "@angular/material";
import { Observable } from "rxjs/Observable";


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
    
  constructor(public snackBar: MdSnackBar) {}

  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 90000,
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: './snack-bar-component-example-snack.html',
  styleUrls: ['./home.component.css'],
})
export class PizzaPartyComponent {}

