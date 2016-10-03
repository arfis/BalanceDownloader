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
var PrimeComponent = (function () {
    function PrimeComponent() {
    }
    PrimeComponent.prototype.getPrimes = function () {
        var primes = [];
        var primeNet = [false];
        var range = Math.sqrt(this.primeRange);
        if (this.primeRange != null) {
            for (var i = 0; i < this.primeRange; i++) {
                primeNet[i] = false;
            }
            for (var i = 2; i <= range; i++) {
                if (primeNet[i] == false) {
                    for (var index = i * 2; index <= this.primeRange; index = index + i) {
                        primeNet[index] = true;
                    }
                }
            }
        }
        for (var i = 2; i <= primeNet.length; i++) {
            if (!primeNet[i])
                primes.push(i);
        }
        this.primes = primes;
    };
    PrimeComponent = __decorate([
        core_1.Component({
            selector: 'prime',
            template: "\n    <h2>Prime numbers</h2>\n    Insert range of prime numbers\n\t<input type=\"text\" [(ngModel)]=\"primeRange\" />\n\t<button (click)=\"getPrimes()\">Get Primes</button><br>\n\t<div style=\"margin:5px,5px; color:blue; font-weight:bold; display: inline\" *ngFor=\"let prime of primes\">\n\t\t<a href=\"https://en.wikipedia.org/wiki/{{prime}}_(number)\" target=\"_blank\">{{prime}}</a>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], PrimeComponent);
    return PrimeComponent;
}());
exports.PrimeComponent = PrimeComponent;
//# sourceMappingURL=prime.component.js.map