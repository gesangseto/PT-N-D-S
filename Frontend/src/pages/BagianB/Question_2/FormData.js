import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  createProduct,
  getProduct,
  updateProduct,
} from "../../../models/product";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const required = {
  nama_product: false,
  harga_product: false,
};

export default function FormData(props) {
  const {} = props;
  let navigate = useNavigate();
  const param = useParams();
  const [data, setData] = useState({});
  const [initialLoad, setInitialLoad] = useState(true);
  const [isError, setIsError] = useState(required);

  const get_data_by_id = async () => {
    let par = {
      id_product: param.id ?? null,
    };
    let item = await getProduct(par);
    setData({ ...item[0] });
  };

  useEffect(() => {
    if (param.type !== "create") {
      get_data_by_id();
    }
    console.log("Test");
  }, []);

  useEffect(() => {
    if (!initialLoad) {
      validation();
    }
  }, [data]);

  const validation = () => {
    let err = required;
    let next = true;
    for (const key in required) {
      if (!data[key]) {
        next = false;
      }
      err[key] = !data[key];
    }
    setIsError({ ...err });
    return next;
  };

  const handleChangeSubmit = async () => {
    setInitialLoad(false);
    if (!validation()) {
      return toast("Silahkan lengkapi data");
    } else {
      let send = false;
      if (param.id) {
        send = await updateProduct(data);
      } else {
        send = await createProduct(data);
      }
      if (send) {
        toast(`Success ${param.type}`);
        navigate(-1);
        return;
      }
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>
        Master product ({param.type})
        <hr />
      </h3>
      <Form.Group className="mb-3">
        <Form.Label>Nama</Form.Label>
        <Form.Control
          type="text"
          readOnly={param.type == "read"}
          defaultValue={data.nama_product}
          isInvalid={isError.nama_product}
          onChange={(e) => setData({ ...data, nama_product: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Harga</Form.Label>
        <Form.Control
          type="number"
          readOnly={param.type == "read"}
          defaultValue={data.harga_product}
          isInvalid={isError.harga_product}
          onChange={(e) => setData({ ...data, harga_product: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Deskripsi</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          readOnly={param.type == "read"}
          defaultValue={data.desc_product}
          isInvalid={isError.desc_product}
          onChange={(e) => setData({ ...data, desc_product: e.target.value })}
        />
      </Form.Group>
      <Button
        size="sm"
        variant="danger"
        onClick={() => {
          navigate(-1);
        }}
      >
        Cancel
      </Button>
      &nbsp;
      {param.type !== "read" && (
        <Button
          size="sm"
          variant="success"
          onClick={() => {
            handleChangeSubmit();
          }}
        >
          Save
        </Button>
      )}
    </div>
  );
}
