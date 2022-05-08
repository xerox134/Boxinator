
import Nav from "./Components/Nav/Nav";
import Boxes from "./Components/Boxes/Boxes";
import Form from "./Components/Form/Form";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">

    <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/Boxlist" element={<Boxes />} />
          <Route path="/Boxform" element={<Form />} />
        </Routes>
    </Router>
          </div>

  );
}

export default App;
