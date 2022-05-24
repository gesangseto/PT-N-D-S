import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header.js";
import Home from "./pages/Home.js";
import Question_1 from "./pages/BagianA/Question_1";
import Question_2 from "./pages/BagianA/Question_2";
import Question_3 from "./pages/BagianA/Question_3";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route exact path="/dashboard" element={<Home />} />
      <Route exact path="/bagian-a/Question_1" element={<Question_1 />} />
      <Route exact path="/bagian-a/Question_2" element={<Question_2 />} />
      <Route exact path="/bagian-a/Question_3" element={<Question_3 />} />
      {/* <Route path="*" element={<NotFound/>}/> */}
    </Routes>
  </Router>
);

export default App;
