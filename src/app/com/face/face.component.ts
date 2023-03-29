import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundService } from 'src/app/background.service';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent {
  backgroundImage: string | undefined;

  constructor(private backgroundService: BackgroundService , private router : Router) { }
  ngOnInit() {
    this.backgroundImage = this.backgroundService.getNextBackground();
  }
  goTo(){
    this.router.navigate(['question']);
  }
}
