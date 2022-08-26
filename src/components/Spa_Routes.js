import React from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import Workspace from "./Workspace";

const Spa_Routes = () => {
  return (
    <Routes>
      <Route path="/" index element={<Form />} />
      <Route path="/workspace" element={<Workspace />} />
      <Route path="/workspace" element={<Workspace />} />
      {/* <Route path="/workspace" element={<Workspace />} /> */}
    </Routes>
  );
};

export default Spa_Routes;
