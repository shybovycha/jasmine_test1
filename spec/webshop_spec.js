var Webshop = require('../webshop');

describe("Getting all products", function() {
    it("returns all products", function() {
        var shop = new Webshop();
        var given = shop.getAllProducts(),
            expected = [
                { id: 1, name: 'szampon', price: 12, amount: 4 },
                { id: 2, name: 'żel pod pryśnic', price: 19, amount: 7 },
                { id: 3, name: 'deodorant nivea', price: 25.5, amount: 19 }
            ];

        expect(given).toEqual(expected);
    });
});

describe("Get total price", function() {
    it("returns sum of product price times product amount", function() {
        var shop = new Webshop();

        var given = shop.getTotalPrice(),
            expected = 665.5;

        expect(given).toEqual(expected);
    });
});