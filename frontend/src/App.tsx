import React from "react";
import Layout from "./components/main/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/main/pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
