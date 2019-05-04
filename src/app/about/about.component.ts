import { Component, OnInit } from '@angular/core';
 var $:any;
 import 'bootstrap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel').carousel({
      interval: 500
    })
    
}
}
