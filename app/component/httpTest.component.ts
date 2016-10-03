import {Component, Input} from '@angular/core'
import {HttpService} from "../service/http-test.service"
import {BalanceModel} from "../models/balance.model"

@Component({
    selector: 'httpTest',
    template: `
    <h2>http test</h2>
    <button (click)="getAllBalances()">Get all balances</button>
	<button (click)="getBalanceById()">Get balance by id</button>
		<input  [(ngModel)]="balanceId" placeholder="balanceId"/>
	<ul>
		<li *ngFor="let balance of balances">{{balance.card_serial}} : {{balance.balance}}</li>
	</ul>
    `,
	providers: [HttpService]
})

export class HttpTestComponent{ 
	httpResult :String;
	balances : BalanceModel[];
	balanceId : String;

	constructor(private _httpService : HttpService){}
	getAllBalances(){
		this._httpService.getAllBalances()
			.subscribe(
				data => this.balances = data,
				error => alert(error),
				() => console.log("finish")
			);
	}

	getBalanceById() {
		
		this._httpService.getBalanceById(this.balanceId)
			.subscribe(
				data => this.balances = data,
				error => alert(error),
				() => console.log("finish")
			);
	}
}