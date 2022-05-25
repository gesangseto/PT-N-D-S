import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Question_2() {
  const [result, setResult] = useState("");
  const [inputVal, setInputVal] = useState("");

  const handleChangeText = (e) => {
    let val = e.target.value;
    val = val.replace(/[^a-zA-Z ]/g, "");
    val = val.toLocaleLowerCase();
    if (val.length == 100) {
      return;
    }
    setInputVal(val);
  };

  const handleClickSubmit = () => {
    setResult(inputVal);
    let val = inputVal;
    val = val
      .split("")
      .filter((c) => c !== " ")
      .sort((a, b) => val.indexOf(a) - val.indexOf(b))
      .join("");
    setResult(val);
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Sort Berdasarkan Posisi</h3>
      <hr /> <br />
      <h3>Input</h3>
      <p>Input merupakan semua jenis karakter dengan maksimum 100 karakter.</p>
      <h3>Output</h3>
      <p>
        Untuk setiap input urutkan berdasarkan posisi munculnya karakter
        tersebut, karakter spasi diabaikan.
      </p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Input Karakter</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => handleChangeText(e)}
            value={inputVal}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Result in here"
            style={{ height: "100px" }}
            value={result}
            readOnly
          />
        </Form.Group>
        <Button variant="primary" onClick={() => handleClickSubmit()}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
