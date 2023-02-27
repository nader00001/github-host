import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  template: `
    <canvas #canvas></canvas>
  `,
  styles: [
    'canvas { border: 1px solid black; }'
  ]
})
export class AnimationComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement> ;
  private ctx!: CanvasRenderingContext2D ;
  private x = 50;
  private y = 50;
  private dx = 5;
  private dy = 2;
  private radius = 20;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    setInterval(() => this.animate(), 20);
  }

  animate() {
    // Effacer le canvas
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    // Dessiner le ballon
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = 'red';
    this.ctx.fill();
    this.ctx.closePath();

    // Mettre à jour la position du ballon
    this.x += this.dx;
    this.y += this.dy;

    // Faire rebondir le ballon sur les bords du canvas
    if (this.x + this.radius > this.ctx.canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > this.ctx.canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
  }
}
