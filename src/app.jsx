import { MdPerson, MdEmail, MdLock } from "react-icons/md";

import React from "react";
import Button from "./components/button";
import Input from "./components/input";

const App = () => {
  return (
    <>
      <Input placeholder="Nome Completo" leftIcon={<MdPerson />} type="text" />
      <Input placeholder="E-mail" leftIcon={<MdEmail />} type="email" />
      <Input placeholder="Senha" leftIcon={<MdLock />} type="password" />
      <Button title="Entrar" variant={true} onClick={() => {}} />
    </>
  );
}

export default App;
