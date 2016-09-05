import {Component} from '@angular/core'
import {HttpService} from "../service/http-test.service"
import {BalanceModel} from "../models/balance.model"

@Component({
    selector: 'httpTest',
    template: `
    <h2>http test</h2>
	<button (click)="onTestGet()">Test http</button>
	<ul>
		<li *ngFor="let balance of balances">{{balance.card_serial}} : {{balance.balance}}</li>
	</ul>
    `,
	providers: [HttpService]
})

export class HttpTestComponent{ 
	httpResult :String;
	balances : BalanceModel[];
	
	constructor(private _httpService : HttpService){}
	onTestGet(){
		this._httpService.getCurrentTime()
			.subscribe(
				data => this.balances = data,
				error => alert(error),
				() => console.log("finish")
			);
	}
}