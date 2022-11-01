import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// react-router-dom 의 버전이 6 버전 으로 올라가며 Swich => Routes 명령어로 변경됨.
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
    <Routes>
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>;
}

export default App;