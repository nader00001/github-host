import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-al3eb',
  templateUrl: './to-al3eb.component.html',
  styleUrls: ['./to-al3eb.component.css']
})
export class ToAl3ebComponent {
  constructor( private router : Router){}
  goTo(){
    this.router.navigate(['nal3bou']);
  }
}
