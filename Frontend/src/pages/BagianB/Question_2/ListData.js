import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LinkButton } from "../../../components/atoms";
import { deleteProduct, getProduct } from "../../../models";

export default function ListData() {
  const location = useLocation();
  let navigate = useNavigate();
  const [datas, setDatas] = useState([]);

  const get_data = async () => {
    let data = await getProduct();
    setDatas([...data]);
  };

  useEffect(() => {
    get_data();
  }, []);

  const handleClickDelete = async (id) => {
    let par = {
      id_product: id,
    };
    let del = await deleteProduct(par);
    if (!del) {
      return;
    }
    toast("Success delete product");
    get_data();
    return;
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>
        Master Product
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
            <th>Harga</th>
            <th>Deskripsi</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.nama_product}</td>
                <td>{item.harga_product}</td>
                <td>{item.desc_product}</td>
                <td>
                  <LinkButton
                    title="Update"
                    variant="warning"
                    onClick={() =>
                      navigate(`${location.pathname}/update/${item.id_product}`)
                    }
                  ></LinkButton>
                  &nbsp;
                  <LinkButton
                    title="Read"
                    variant="info"
                    onClick={() =>
                      navigate(`${location.pathname}/read/${item.id_product}`)
                    }
                  ></LinkButton>
                  &nbsp;
                  <LinkButton
                    title="Delete"
                    variant="danger"
                    onClick={() => handleClickDelete(item.id_product)}
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
