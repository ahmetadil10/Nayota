import { Component, OnInit } from '@angular/core';
import  {ServiceService} from '../service.service';


var $;
import 'bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:object[]=[];
  pageone:object[]=[];
  pagetwo:object[]=[];

  constructor(_ServiceService:ServiceService) {

    
      this.pageone = _ServiceService.pageOne
      this.pagetwo = _ServiceService.pageTwo

    

    




   }

  ngOnInit() {

    console.log("pageone")
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