import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LinkButton } from "../../../components/atoms";
import { deletePelanggan, getPelanggan } from "../../../models/pelanggan";

export default function ListData() {
  const location = useLocation();
  let navigate = useNavigate();
  const [datas, setDatas] = useState([]);

  const get_data = async () => {
    let data = await getPelanggan();
    setDatas([...data]);
  };

  useEffect(() => {
    get_data();
  }, []);

  const handleClickDelete = async (id) => {
    let par = {
      id_pelanggan: id,
    };
    let del = await deletePelanggan(par);
    if (!del) {
      return;
    }
    toast("Success delete pelanggan");
    get_data();
    return;
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>
        Master Pelanggan
        <hr />
      </h3>
      <LinkButton title="Add" to={`${location.pathname}/create`} />
      <br />
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>No Telp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.nama_pelanggan}</td>
                <td>{item.alamat_pelanggan}</td>
                <td>{item.telp_pelanggan}</td>
                <td>
                  <LinkButton
                    title="Update"
                    variant="warning"
                    onClick={() =>
                      navigate(
                        `${location.pathname}/update/${item.id_pelanggan}`
                      )
                    }
                  ></LinkButton>
                  &nbsp;
                  <LinkButton
                    title="Read"
                    variant="info"
                    onClick={() =>
                      navigate(`${location.pathname}/read/${item.id_pelanggan}`)
                    }
                  ></LinkButton>
                  &nbsp;
                  <LinkButton
                    title="Delete"
                    variant="danger"
                    onClick={() => handleClickDelete(item.id_pelanggan)}
                  ></LinkButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
