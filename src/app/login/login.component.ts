import { Component, OnInit } from '@angular/core';
var $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#btnClose').click(function () {
      alert("sdffsdf")
    })
  }

}
