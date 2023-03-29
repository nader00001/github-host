import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sam3i',
  templateUrl: './sam3i.component.html',
  styleUrls: ['./sam3i.component.css']
})
export class Sam3iComponent {
  constructor(private router : Router){}
  goTo(){
    this.router.navigate(['toAl3eb']);
  }
}
