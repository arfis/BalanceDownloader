"use strict";
var AuthorService = (function () {
    function AuthorService() {
    }
    AuthorService.prototype.getAuthors = function () {
        return [{ name: "author1", age: 12, address: "adress" }, { name: "author2", age: 14, address: "adress2" }];
    };
    return AuthorService;
}());
exports.AuthorService = AuthorService;
//# sourceMappingURL=author.service.js.map