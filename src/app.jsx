import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Cadastrar from "./pages/cadastrar";
import Feed from "./pages/feed";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Home /> } path="/" />
        <Route element={ <Login /> } path="/login" />
        <Route element={ <Cadastrar /> } path="/cadastrar" />
        <Route element={ <Feed /> } path="/feed" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;