"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_test_service_1 = require("../service/http-test.service");
var HttpTestComponent = (function () {
    function HttpTestComponent(_httpService) {
        this._httpService = _httpService;
    }
    HttpTestComponent.prototype.getAllBalances = function () {
        var _this = this;
        this._httpService.getAllBalances()
            .subscribe(function (data) { return _this.balances = data; }, function (error) { return alert(error); }, function () { return console.log("finish"); });
    };
    HttpTestComponent.prototype.getBalanceById = function () {
        var _this = this;
        this._httpService.getBalanceById(this.balanceId)
            .subscribe(function (data) { return _this.balances = data; }, function (error) { return alert(error); }, function () { return console.log("finish"); });
    };
    HttpTestComponent = __decorate([
        core_1.Component({
            selector: 'httpTest',
            template: "\n    <h2>http test</h2>\n    <button (click)=\"getAllBalances()\">Get all balances</button>\n\t<button (click)=\"getBalanceById()\">Get balance by id</button>\n\t\t<input  [(ngModel)]=\"balanceId\" placeholder=\"balanceId\"/>\n\t<ul>\n\t\t<li *ngFor=\"let balance of balances\">{{balance.card_serial}} : {{balance.balance}}</li>\n\t</ul>\n    ",
            providers: [http_test_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_test_service_1.HttpService])
    ], HttpTestComponent);
    return HttpTestComponent;
}());
exports.HttpTestComponent = HttpTestComponent;
//# sourceMappingURL=httpTest.component.js.map