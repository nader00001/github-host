import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  nbr : number[] = this.service.note ;
  constructor(  private route : Router , private service : ServiceService){}
  
  ngOnInit(){
	
   
	this.nombreDeFoix1();
	this.nombreDeFoix2();
	this.nombreDeFoix3();
	
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

}


