import { Component, OnInit } from '@angular/core';
import  {ServiceService} from '../service.service'

import * as $ from 'jquery';
import 'bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:object[]=[];
  pageOne:object[]=[];
  pageTwo:object[]=[];

  constructor(_ServiceService:ServiceService) {

    
      this.pageOne = _ServiceService.pageOne
      this.pageTwo = _ServiceService.pageTwo

    

    




   }

  ngOnInit() {
    $( "#one" ).click(function() {
     $(".one").show();
     $(".two").hide()
    });
    $( "#two" ).click(function() {
      $(".two").show();
      $(".one").hide()
     });

}
}