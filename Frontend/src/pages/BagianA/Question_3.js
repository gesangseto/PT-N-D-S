import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Question_3() {
  const [result, setResult] = useState("");
  const [inputVal, setInputVal] = useState("");

  const handleChangeText = (e) => {
    let val = e.target.value;
    val = val.replace(/[^a-zA-Z ]/g, "");
    val = val.toLocaleLowerCase();
    if (val.length == 200) {
      return;
    }
    setInputVal(val);
  };
  const makeUnique = (str) => {
    return String.prototype.concat(...new Set(str));
  };

  const handleClickSubmit = () => {
    let val = inputVal.replace(/ /g, "");
    val = makeUnique(val);
    setResult(val.length);
  };
  return (
    <div style={{ padding: 20 }}>
      <h3>
        Kamus Panda <hr /> <br /> Story
      </h3>
      <p>
        Panda Buku, setelah membaca sekian banyak kamus (berbahasa Panda),
        memutuskan untuk menciptakan sebuah kamus Panda yang baru. Panda Buku
        mengajukan suatu cara pengurutan kata dalam kamusnya, yaitu berdasarkan
        jenis karakter unik yang ada pada kata. Walaupun rumit, cara ini
        dipakainya agar tidak dituduh mencontek kamus buatan Kutu Buku, yang
        terurut secara alfabetis. Berikut ini adalah beberapa contoh cara
        menghitung jenis karakter unik dari sebuah kata yang dilakukan oleh
        Panda Buku: “lalala” terdiri dari 2 jenis karakter, yaitu “l” dan “a‟.
        “panda” terdiri dari 4 jenis karakter, yaitu “p‟, “a‟, “n‟, dan “d‟.
        Adapun, dalam bahasa Panda, semua kata hanya terdiri dari huruf kecil
        dari “a‟ sampai “z‟. Semua karakter lain tidak dihitung sebagai bagian
        dari kata. Karena Panda Buku sudah agak rabun dan kata yang dimilikinya
        amat banyak, anda diminta membuat program untuk menghitung jenis
        karakter unik untuk setiap kata yang diberikan oleh Panda Buku, agar ia
        dapat segera menyusun kamusnya.
      </p>
      <h3>Input</h3>
      <p>
        Input hanya berisi satu kata. Setiap kata terdiri dari maksimal 200
        karakter.
      </p>
      <h3>Output</h3>
      <p>Output merupakan jenis karakter unik yang dimiliki setiap kata.</p>
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
