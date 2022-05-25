import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { getPelanggan } from "../../../models/pelanggan";
import { Link, useLocation } from "react-router-dom";
import { LinkButton } from "../../../components/atoms";

export default function ListData() {
  const [datas, setDatas] = useState([]);
  const location = useLocation();

  const get_data = async () => {
    let data = await getPelanggan();
    setDatas([...data]);
  };

  useEffect(() => {
    get_data();
  }, []);

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
                    to={`${location.pathname}/update/${item.id_pelanggan}`}
                  ></LinkButton>
                  &nbsp;
                  <LinkButton
                    title="Read"
                    variant="info"
                    to={`${location.pathname}/read/${item.id_pelanggan}`}
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
