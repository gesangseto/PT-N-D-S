import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Question_1() {
  const [result, setResult] = useState("");
  const [inputVal, setInputVal] = useState("");

  const handleChangeText = (e) => {
    let val = e.target.value;
    if (val >= 1 && val <= 20) {
      setInputVal(e.target.value);
    } else {
      setInputVal("");
    }
  };

  const handleClickSubmit = () => {
    if (inputVal <= 0) {
      return;
    }
    var res = [];
    if (inputVal > 9) {
      res.push("Apa?");
    } else {
      let str = "";
      for (var i = 0; i < inputVal; i++) {
        for (var x = 1; x <= inputVal; x++) {
          if (x != inputVal) {
            str += `${x} `;
          } else {
            str += `hop! `;
          }
        }
      }
      res.push(str);
    }
    setResult(res);
    setInputVal("");
  };
  return (
    <div style={{ padding: 20 }}>
      <h3>
        1 2 hop! <hr /> <br /> Story
      </h3>
      <p>
        Lie adalah seorang guru TK yang baik. Dia telah mengajar anak-anak untuk
        menghitung angka dari 1 sampai 9 menggunakan sebuah permainan sederhana.
        Berikut adalah permainan: Lie akan mengatakan nomor ke anak-anak. Untuk
        nomor yang dikatakannya, dia ingin anak-anak untuk menghitung dari 1
        sampai N untuk N kali, dengan jumlah setiap N diganti dengan berteriak
        "hop!" Sebagai contoh: Jika ia mengatakan 3, maka anak akan menghitung:
        "1 2 hop! 1 2 hop! 1 2 hop!" Jika ia mengatakan 4, maka anak akan
        menghitung: "1 2 3 hop! 1 2 3 hop! 1 2 3 hop! 1 2 3 hop!" Namun jika dia
        mengatakan setiap nomor lebih besar dari 9, maka anak akan berteriak:
        "Apa?" Sekarang, tulis sebuah program untuk mensimulasikan pengajaran
        Lie.
      </p>
      <h3>Input</h3>
      <p>
        Setiap kasus uji berisi satu bilangan bulat N (1 {"<="} N {"<="} 20),
        jumlah yang Lie katakan.
      </p>
      <h3>Output</h3>
      <p>
        Untuk setiap kasus, cetak teriakan anak-anak dalam satu baris. Setiap
        penghitungan harus dipisahkan dengan spasi tunggal.
      </p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Input Nilai N</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter N"
            onChange={(e) => handleChangeText(e)}
            value={inputVal}
          />
          <Form.Text className="text-muted">
            N (1 {"<="} N {"<= "}20)
          </Form.Text>
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
