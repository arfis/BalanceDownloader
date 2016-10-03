import {Component} from '@angular/core'

@Component({
    selector: 'prime',
    template: `
    <h2>Prime numbers</h2>
    Insert range of prime numbers
	<input type="text" [(ngModel)]="primeRange" />
	<button (click)="getPrimes()">Get Primes</button><br>
	<div style="margin:5px,5px; color:blue; font-weight:bold; display: inline" *ngFor="let prime of primes">
		<a href="https://en.wikipedia.org/wiki/{{prime}}_(number)" target="_blank">{{prime}}</a>
	</div>
	`
	
})

export class PrimeComponent{ 

	primeRange : Number;

	primeNet : Boolean[];
	primes : Number[];

	getPrimes(){

		let primes : Number[] = [];
		let primeNet : Boolean[] = [false];

	
		let range = Math.sqrt(this.primeRange);

		if (this.primeRange != null){

			for (let i =0; i<this.primeRange; i++){
					primeNet[i] = false;
			}

			for (let i = 2; i <= range; i++) {
				if (primeNet[i] == false){
					for (let index = i*2; index<=this.primeRange; index = index + i){
						primeNet[index] = true;
					}
				}
			}
		}
		
		for (let i = 2; i <= primeNet.length; i++){
			if (!primeNet[i])
				primes.push(i);
		}
		
		this.primes = primes;
	}

	constructor(){
		
	}



}