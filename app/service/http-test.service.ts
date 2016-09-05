import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {BalanceModel} from "../models/balance.model"

@Injectable()
export class HttpService{
	constructor(private _http: Http){ }

		getCurrentTime(){
			return this._http.get("http://localhost:8081/getAllBalances")
				.map(res => res.json());
		}
		
		postJSON(){
			
		}
}