import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./services/AuthContext";
import Form from "./Components/Form";
import Quizz from "./Components/Quizz";
import Podium from "./Components/Podium";
import Navbar from "./Components/Navbar";
import Modal from "./Components/Modal";

function App() {
  const [score, setScore] = useState(0);
  const [user, setUser] = useState(false);
  const [userReady, setUserReady] = useState(false);
  const [dataModal, setDataModal] = useState({
    title: "",
    content: "",
    icon: "",
    callback: () => {},
  });
  return (
    <AuthContextProvider
      value={{
        user: [user, setUser],
        userReady: [userReady, setUserReady],
        dataModal: [dataModal, setDataModal],
        score: [score, setScore],
      }}
    >
      <div className="App">
        <Navbar />
        <Modal />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/quizz" element={<Quizz />} />
          <Route path="/podium" element={<Podium />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
