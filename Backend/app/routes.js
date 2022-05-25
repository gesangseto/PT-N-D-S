"use strict";

module.exports = function (app) {
  // MASTER
  var pelanggan = require("./controller/pelanggan");
  app.route("/api/master/pelanggan").get(pelanggan.get);
  app.route("/api/master/pelanggan").put(pelanggan.insert);
  app.route("/api/master/pelanggan").post(pelanggan.update);
  app.route("/api/master/pelanggan").delete(pelanggan.delete);

  var product = require("./controller/product");
  app.route("/api/master/product").get(product.get);
  app.route("/api/master/product").put(product.insert);
  app.route("/api/master/product").post(product.update);
  app.route("/api/master/product").delete(product.delete);
};
