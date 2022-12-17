import React from "react";
import { useNavigate } from "react-router-dom";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { Container, Row, Column } from "../../style/global_style";
import Button from "../../components/button";
import Header from "../../components/header";
import Text from "../../components/text";

const Cadastrar = () => {
  const navigate = useNavigate();

  const rightContent = <Row alignItems="center">
  <Text marginRight="10px"value="Home" />
    <Button title="Entrar" />
    <Button title="Cadastrar" />
  </Row>;

  return (
    <>
      
    </>
  );
}

export default Cadastrar;