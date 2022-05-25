import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/layout/Header.js";
import Home from "./pages/Home.js";
import Question_A_1 from "./pages/BagianA/Question_1";
import Question_A_2 from "./pages/BagianA/Question_2";
import Question_A_3 from "./pages/BagianA/Question_3";
import Question_B_1 from "./pages/BagianB/Question_1/ListData";
import Question_B_1_F from "./pages/BagianB/Question_1/FormData";
import Question_B_2 from "./pages/BagianB/Question_2/ListData";
import Question_B_2_F from "./pages/BagianB/Question_2/FormData";

const App = () => (
  <Router>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <Header />
    <Routes>
      <Route path="/dashboard" element={<Home />} />
      <Route path="/bagian-a/Question_1" element={<Question_A_1 />} />
      <Route path="/bagian-a/Question_2" element={<Question_A_2 />} />
      <Route path="/bagian-a/Question_3" element={<Question_A_3 />} />
      {/* Pelanggan */}
      <Route path="/bagian-b/Question_1" element={<Question_B_1 />} />
      <Route path="/bagian-b/Question_1/:type" element={<Question_B_1_F />} />
      <Route
        path="/bagian-b/Question_1/:type/:id"
        element={<Question_B_1_F />}
      />
      {/* End Of Pelanggan */}

      {/* Product */}
      <Route path="/bagian-b/Question_2" element={<Question_B_2 />} />
      <Route path="/bagian-b/Question_2/:type" element={<Question_B_2_F />} />
      <Route
        path="/bagian-b/Question_2/:type/:id"
        element={<Question_B_2_F />}
      />
      {/* End Of Product */}
    </Routes>
  </Router>
);

export default App;
