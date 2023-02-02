import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./services/AuthContext";
import Home from "./Components/Home";
import Quizz from "./Components/Quizz";
import Podium from "./Components/Podium";
import Navbar from "./Components/Navbar";
import Modal from "./Components/Modal";

function App() {
  const [user, setUser] = useState(false);
  const [userReady, setUserReady] = useState(false);
  const [dataModal, setDataModal] = useState({
    title: "",
    content: "",
    icon: "",
  });
  return (
    <AuthContextProvider
      value={{
        user: [user, setUser],
        userReady: [userReady, setUserReady],
        dataModal: [dataModal, setDataModal],
      }}
    >
      <div className="App h-screen">
        <Navbar />
        <Modal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizz" element={<Quizz />} />
          <Route path="/podium" element={<Podium />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
