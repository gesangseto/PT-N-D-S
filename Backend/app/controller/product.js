"use strict";
const moment = require("moment");
const response = require("../response");
const models = require("../models");
const sp = require("../sp");
const utils = require("../utils");
const perf = require("execution-time")();

const structure_product = {
  id_product: "INT",
  nama_product: "varchar(100)",
  harga_product: "int",
  desc_product: "varchar(100)",
};
exports.get = async function (req, res) {
  var data = { data: req.query };
  try {
    perf.start();
    var query = `
    SELECT * FROM mst_product AS a 
    WHERE 1+1=2 `;
    for (const k in req.query) {
      if (k != "page" && k != "limit") {
        query += ` AND a.${k}='${req.query[k]}'`;
      }
    }
    if (req.query.page || req.query.limit) {
      var start = 0;
      if (req.query.page > 1) {
        start = parseInt((req.query.page - 1) * req.query.limit);
      }
      var end = parseInt(start) + parseInt(req.query.limit);
      query += ` LIMIT ${start},${end} `;
    }
    query = await models.exec_query(query);
    return response.response(query, res);
  } catch (error) {
    data.error = true;
    data.message = `${error}`;
    return response.response(data, res);
  }
};

exports.insert = async function (req, res) {
  var data = { data: req.body };
  try {
    perf.start();
    const require_data = ["nama_product", "harga_product"];
    for (const row of require_data) {
      if (!req.body[`${row}`]) {
        data.error = true;
        data.message = `${row} is required!`;
        return response.response(data, res);
      }
    }
    let insert = models.insert_query({
      data: req.body,
      key: "id_product",
      table: "mst_product",
    });
    return response.response(insert, res);
  } catch (error) {
    data.error = true;
    data.message = `${error}`;
    return response.response(data, res);
  }
};

exports.update = async function (req, res) {
  var data = { data: req.body };
  try {
    perf.start();
    const require_data = ["id_product", "nama_product", "harga_product"];
    for (const row of require_data) {
      if (!req.body[`${row}`]) {
        data.error = true;
        data.message = `${row} is required!`;
        return response.response(data, res);
      }
    }
    let update = models.update_query({
      data: req.body,
      key: "id_product",
      table: "mst_product",
    });
    return response.response(update, res);
  } catch (error) {
    data.error = true;
    data.message = `${error}`;
    return response.response(data, res);
  }
};
exports.delete = async function (req, res) {
  var data = { data: req.body };
  try {
    perf.start();
    const require_data = ["id_product"];
    for (const row of require_data) {
      if (!req.body[`${row}`]) {
        data.error = true;
        data.message = `${row} is required!`;
        return response.response(data, res);
      }
    }
    let del = models.delete_query({
      data: req.body,
      key: "id_product",
      table: "mst_product",
      force_delete: true,
    });
    return response.response(del, res);
  } catch (error) {
    data.error = true;
    data.message = `${error}`;
    return response.response(data, res);
  }
};
