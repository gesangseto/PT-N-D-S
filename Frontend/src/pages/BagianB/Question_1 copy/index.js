import React, { useEffect, useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import { getPelanggan } from "../../../models/pelanggan";

export default function Question_1() {
  const [datas, setDatas] = useState([]);

  const get_data = async () => {
    let data = await getPelanggan();
    setDatas([...data]);
    console.log(data);
  };

  useEffect(() => {
    get_data();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h3>
        MasterPelanggan
        <hr />
      </h3>
      <Button variant="success"> Add</Button>
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
                <td>{item.telp_pelanggan}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
