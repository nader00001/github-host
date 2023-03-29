import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-hessi',
  templateUrl: './hessi.component.html',
  styleUrls: ['./hessi.component.css']
})
export class HessiComponent {
  constructor(private router :Router){}
  goTo(){
    this.router.navigate(['toAl3eb']);
  }
}
