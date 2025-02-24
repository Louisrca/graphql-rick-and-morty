import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Character from "./pages/Character/Character";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </>
  );
}

export default App;
