import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private backgrounds: string[] = ['../assets/images/photo.jpg',  '../assets/images/img2.jpg','../assets/images/9atous.jpg'];

  private currentIndex = 0;
  getNextBackground(): string {
    const nextIndex = (this.currentIndex + 1) % this.backgrounds.length;
    this.currentIndex = nextIndex;
    return this.backgrounds[nextIndex];
  }
}
