"use strict";

module.exports = function (app) {
  // MASTER
  var pelanggan = require("./controller/pelanggan");
  app.route("/api/master/pelanggan").get(pelanggan.get);
  app.route("/api/master/pelanggan").put(pelanggan.insert);
  app.route("/api/master/pelanggan").post(pelanggan.update);
  app.route("/api/master/pelanggan").delete(pelanggan.delete);
};
