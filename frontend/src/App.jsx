import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Quizz from "./Components/Quizz";
import Podium from "./Components/Podium";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizz" element={<Quizz />} />
        <Route path="/podium" element={<Podium />} />
      </Routes>
    </div>
  );
}

export default App;
