import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import { MdMenuTrigger } from "@angular/material/typings";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
  // someMethod() {
  //   this.trigger.openMenu();
  // }
  myData: Array<any>;
  constructor(private http:Http) {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
    .map(response => response.json())
    .subscribe(res => this.myData = res); 
  }

  ngOnInit() {
  }

}
