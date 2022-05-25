"use strict";
const moment = require("moment");
const response = require("../response");
const models = require("../models");
const sp = require("../sp");
const utils = require("../utils");
const perf = require("execution-time")();

const structure_trx = {
  id_trx: "INT",
  kode_trx: "INT",
  id_pelanggan: "varchar(100)",
  total: "int",
};
const structure_trx_det = {
  id_product: "INT",
  qty: "varchar(100)",
  harga_product: "int",
  id_trx: "int",
};
exports.get = async function (req, res) {
  var data = { data: req.query };
  try {
    perf.start();
    var query = `
    SELECT * FROM trx AS a 
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
    if (!query) {
      data.error = true;
      data.message = `Opps!`;
      return response.response(data, res);
    }
    if (req.query.id_trx) {
      let _data = query.data[0];
      let get_detail = `SELECT * FROM trx_detail where id_trx='${_data.id_trx}'`;
      get_detail = await models.exec_query(get_detail);
      query.data[0].detail = get_detail.data;
    }
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
    const require_data = ["id_pelanggan", "items"];
    for (const row of require_data) {
      if (!req.body[`${row}`]) {
        data.error = true;
        data.message = `${row} is required!`;
        return response.response(data, res);
      }
    }

    let items = req.body.items;
    if (!Array.isArray(items)) {
      data.error = true;
      data.message = `Items is not array!`;
      return response.response(data, res);
    }

    var insert = models.generate_query_insert({
      structure: structure_trx,
      table: "trx",
      values: req.body,
    });

    insert += `\nSET @last_id = LAST_INSERT_ID();`;
    for (const it of items) {
      if (!it.id_product || !it.qty) {
        data.error = true;
        data.message = `Id Product Or Qty is required!`;
        return response.response(data, res);
      }
      insert += `\nINSERT INTO trx_detail ( id_trx, id_product, qty) VALUES (@last_id, '2', '3');`;
    }
    console.log(insert);
    insert = await models.exec_query(insert);
    return response.response(insert, res);
  } catch (error) {
    data.error = true;
    data.message = `${error}`;
    return response.response(data, res);
  }
};
