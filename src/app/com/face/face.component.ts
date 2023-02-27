import { Component } from '@angular/core';
import { BackgroundService } from 'src/app/background.service';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent {
  backgroundImage: string | undefined;

  constructor(private backgroundService: BackgroundService) { }
  ngOnInit() {
    this.backgroundImage = this.backgroundService.getNextBackground();
  }

}
