import React from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { Container, Row, Column } from "../../style/global_style";
import Button from "../../components/button";
import Header from "../../components/header";
import Text from "../../components/text";
import Input from "../../components/input";
import Link from "../../components/link";

const Login = () => {
  const navigate = useNavigate();

  const rightContent = <Row alignItems="center">
  <Text marginRight="10px"value="Home" />
    <Button title="Entrar" />
    <Button title="Cadastrar" onClick={ () => navigate("/cadastrar") } />
  </Row>;

  return (
    <Container>
      <Column>
        <Header rightContent={rightContent} />
        <Column>
          <Row alignContent="space-around">
            <Column width="565px" alignContent="center">
              <Text fontWeight="700" size="32px"  value={
                "A plataforma para você aprender com experts, dominar as principais " +
                "tecnologias e entrar mais rápido nas empresas mais desejadas."
              } />
            </Column>
            <Row width="600px" alignContent="center">
              <Column width="300px" alignContent="center">
                <Text fontWeight="700" size="32px" marginBottom="10px" value="Faça seu cadastro" />
                <Text fontWeight="400" size="18px" marginBottom="35px" value="Faça seu login e make the change._" />
                <Input placeholder="E-mail" leftIcon={<MdEmail />} type="email" marginBottom="15px" />
                <Input placeholder="Password" leftIcon={<MdLock />} type="password" marginBottom="35px" />
                <Button title="Entrar" variant={true} marginBottom="45px" onClick={() => {}} />
                <Row height="40px" alignContent="space-between">
                  <Link title="Esqueci minha senha" variant={true} />
                  <Link title="Criar conta" />
                </Row>
              </Column>
            </Row>
          </Row>
        </Column>
      </Column>
    </Container>
  );
}

export default Login;