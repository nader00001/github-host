import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Chart , registerables} from 'node_modules/chart.js';
import { ServiceService } from 'src/app/services/service.service';

Chart.register(...registerables);

@Component({
  selector: 'app-graphe',
  templateUrl: './graphe.component.html',
  styleUrls: ['./graphe.component.css']
})
export class GrapheComponent implements OnInit {
  constructor(private service :ServiceService , private router : Router){}
  nbr : number[] =     this.service.note ;
  
  ngOnInit(): void {
    let a ! : number ;
    let b ! : number ;
    let c ! : number ;
    
    
    a=this.nombreDeFoix1();
    
    b=this.nombreDeFoix2();
    c=this.nombreDeFoix3();
    console.log(a , b , c);
   // console.log(this.nombreDeFoix1 , this.nombreDeFoix2 )
    console.log("nader");
    this.RenderChart(a , b ,c);
   
    
      
    

  }

  nombreDeFoix1():number {
		let count1 = 0;
		
		for(let i =0 ; i< this.nbr.length ; i++){
			if(this.nbr[i]===1){
				count1++;
			}
		} return count1 ;
		
	}
	nombreDeFoix2():number {
		
		let count2 =0 ;
		
		for(let i =0 ; i< this.nbr.length ; i++){
			 if(this.nbr[i]===2){
				count2++;
			} 

		} return count2 ;

		
	}
	nombreDeFoix3():number {
		
		let count3 = 0 ;
		for(let i =0 ; i< this.nbr.length ; i++){
			 if(this.nbr[i]===3){
				count3++;
			}
		} return count3 ;
		
	}

  RenderChart(a : number , b: number , c : number){
    const canvasElement: HTMLCanvasElement | null = document.getElementById('piechart') as HTMLCanvasElement;
if (canvasElement) {
  const ctx: CanvasRenderingContext2D = canvasElement.getContext('2d')!;
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [' إن التلميذ ذو نمط تعلم بصري', ' فإن التلميذ ذو نمط تعلم سمعي', 'فإن التلميذ ذو نمط تعلم حسي-حركي'],
      datasets: [{
        label: 'الإجابات',
        data: [a, b, c],
        borderWidth: 1,
        backgroundColor: 'Turquoise'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      layout: {
        padding: {
          top: 50,
          bottom: 10,
          left: 300 ,
          right: 200,
        },
        
      }
     
    }
  });
}

  
  
  
  }
  

  goTo(){
    const value1 = this.nombreDeFoix1(); // Valeur 1
    const value2 = this.nombreDeFoix2(); // Valeur 2
    const value3 = this.nombreDeFoix3(); // Valeur 3

    let maxValue: number = Math.max(value1, value2 ,value3 );
    let targetRoute: string ='default';
    if (maxValue === value1) {
      targetRoute = 'basari';
    } else if (maxValue === value2) {
      targetRoute = 'sam3i';
    } else if (maxValue === value3) {
      targetRoute = 'hessi';
    }
    this.router.navigate([targetRoute]);
}
   
}
