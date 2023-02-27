import { Component, OnInit } from '@angular/core';

import { GameEnfant } from '../game-enfant';

@Component({
  selector: 'app-game',
  template: `
    <div *ngIf="gameModel">
      <h1>Click the shapes!</h1>
      <p>Score: {{ gameModel.score }}</p>
      <p>Time left: {{ gameModel.timeLeft }} seconds</p>
      <div (click)="shapeClicked($event)" [ngClass]="shape" *ngFor="let shape of gameModel.shapes"></div>
    </div>
  `
})
export class JeuComponent implements OnInit {
  private shapes = ['circle', 'square', 'triangle'];

  private timer: any;

  gameModel: GameEnfant | undefined;

  ngOnInit() {
    this.gameModel = {
      shapes: [],
      score: 0,
      timeLeft: 15,
      gameStarted: false
    };
  }

  startGame() {
    if (this.gameModel) {
      this.gameModel.shapes = [];

      this.timer = setInterval(() => {
        if (this.gameModel) {
          this.gameModel.timeLeft -= 1;

          if (this.gameModel.timeLeft === 0) {
            clearInterval(this.timer);
            this.gameModel.gameStarted = false;
          } else {
            this.addShape();
          }
        }
      }, 1000);

      this.gameModel.gameStarted = true;
    }
  }

  stopGame() {
    clearInterval(this.timer);

    if (this.gameModel) {
      this.gameModel.gameStarted = false;
    }
  }

  shapeClicked(event: any) {
    const target = event.target || event.srcElement || event.currentTarget;

    if (target.classList.contains('circle') || target.classList.contains('square') || target.classList.contains('triangle')) {
      target.remove();

      if (this.gameModel) {
        this.gameModel.score += 1;
      }
    }
  }

  private addShape() {
    if (this.gameModel) {
      const randomIndex = Math.floor(Math.random() * this.shapes.length);
      const shape = this.shapes[randomIndex];

      this.gameModel.shapes.push(shape);
    }
  }
}
