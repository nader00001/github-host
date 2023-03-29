import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basari',
  templateUrl: './basari.component.html',
  styleUrls: ['./basari.component.css']
})
export class BasariComponent {
  constructor(private router: Router ){}
  goTo(){
    this.router.navigate(['toAl3eb']);
  }
}
