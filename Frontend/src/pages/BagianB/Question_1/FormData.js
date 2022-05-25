import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  createPelanggan,
  getPelanggan,
  updatePelanggan,
} from "../../../models/pelanggan";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const required = {
  nama_pelanggan: false,
  alamat_pelanggan: false,
  telp_pelanggan: false,
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
      id_pelanggan: param.id ?? null,
    };
    let item = await getPelanggan(par);
    setData({ ...item[0] });
  };

  useEffect(() => {
    if (param.type !== "create") {
      get_data_by_id();
    }
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
        send = await updatePelanggan(data);
      } else {
        send = await createPelanggan(data);
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
        Master Pelanggan ({param.type})
        <hr />
      </h3>
      <Form.Group className="mb-3">
        <Form.Label>Nama</Form.Label>
        <Form.Control
          type="text"
          readOnly={param.type == "read"}
          defaultValue={data.nama_pelanggan}
          isInvalid={isError.nama_pelanggan}
          onChange={(e) => setData({ ...data, nama_pelanggan: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Alamat</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          readOnly={param.type == "read"}
          defaultValue={data.alamat_pelanggan}
          isInvalid={isError.alamat_pelanggan}
          onChange={(e) =>
            setData({ ...data, alamat_pelanggan: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>No Telp</Form.Label>
        <Form.Control
          type="number"
          readOnly={param.type == "read"}
          defaultValue={data.telp_pelanggan}
          isInvalid={isError.telp_pelanggan}
          onChange={(e) => setData({ ...data, telp_pelanggan: e.target.value })}
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
