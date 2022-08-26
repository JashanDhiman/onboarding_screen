import { BrowserRouter, Route, Routes } from "react-router-dom";
import Congo from "./components/Congo";
import Form from "./components/Form";
import Workspace from "./components/Workspace";
import WorkspaceFor from "./components/WorkspaceFor";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/workspace-for" element={<WorkspaceFor />} />
          <Route path="/congratulations" element={<Congo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
