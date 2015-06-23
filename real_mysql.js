'use strict';

class RealMysql {
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
        return this.query("select * from products;");
    }

    getProductById(id) {
        return this.query(`select * from products where id = ${id};`);
    }
}

module.exports = RealMysql;