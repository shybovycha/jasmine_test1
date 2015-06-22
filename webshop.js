'use strict';

class Webshop {
    constructor() {
        var mysql = require('mysql');

        this.connection = mysql.createConnection({
          host: 'localhost',
          database: 'tdd_test',
          user: 'root',
          //password : 's3kreee7'
        });

        this.connection.connect();
    }

    destruct() {
        this.connection.end();
    }

    __query(sql, callback) {
        this.connection.query(sql, callback);
    }

    getAllProducts() {
        // TODO
    }

    getProductById(id) {
        // TODO
    }

    getTotalPrice() {
        // TODO
    }
}

(function() {
    var shop = new Webshop();

    console.log('All products: ', shop.getAllProducts());
    console.log('Product #2: ', shop.getProductById(2));
    console.log('Total price: ', shop.getTotalPrice());
})();