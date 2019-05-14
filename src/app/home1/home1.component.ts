import { Component, OnInit } from '@angular/core';
import  {ServiceService} from '../service.service';

var $;

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  products:object[]=[];
  pageone:object[]=[];
  pagetwo:object[]=[];

  constructor(_ServiceService:ServiceService) {

    
      this.pageone = _ServiceService.pageOne
      this.pagetwo = _ServiceService.pageTwo

    

    




   }

  ngOnInit() {

    console.log(this.pageone)
    console.log(this.pagetwo)
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