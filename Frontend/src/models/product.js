import $axios from "./Api";
import { toast } from "react-toastify";

/*
 VERSI 2 API
Ini adalah kumpulan api versi 2 yang digunakan android untuk auto fill header 
dan juga akan auto update timmer logout (Update token)
*/

export const getProduct = async (property = {}, use_alert = true) => {
  var query_string = new URLSearchParams(property).toString();
  let url = `/api/master/product?${query_string}`;
  console.log(url);
  return new Promise((resolve) => {
    $axios
      .get(url, JSON.stringify(property))
      .then((result) => {
        result = result.data;
        if (result.error) {
          if (use_alert) toast(result.message);
          return resolve(false);
        } else {
          return resolve(result.data);
        }
      })
      .catch((e) => {
        if (use_alert) toast(e.message);
        return resolve(false);
      });
  });
};

export const createProduct = async (property = {}, use_alert = true) => {
  console.log(property);
  let url = `/api/master/product`;
  console.log(url);
  return new Promise((resolve) => {
    $axios
      .put(url, property)
      .then((result) => {
        result = result.data;
        if (result.error) {
          if (use_alert) toast(result.message);
          return resolve(false);
        } else {
          return resolve(result.data);
        }
      })
      .catch((e) => {
        if (use_alert) toast(e.message);
        return resolve(false);
      });
  });
};
export const updateProduct = async (property = {}, use_alert = true) => {
  console.log(property);
  let url = `/api/master/product`;
  console.log(url);
  return new Promise((resolve) => {
    $axios
      .post(url, property)
      .then((result) => {
        result = result.data;
        if (result.error) {
          if (use_alert) toast(result.message);
          return resolve(false);
        } else {
          return resolve(result.data);
        }
      })
      .catch((e) => {
        if (use_alert) toast(e.message);
        return resolve(false);
      });
  });
};
