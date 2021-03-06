import { Injectable } from '@angular/core';
 
@Injectable()
export class Configuration {
    public Server: string = "http://localhost:8081/";
    public ApiUrl: string = "getAllBalances";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}