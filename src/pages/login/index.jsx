import React from "react";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { Container, Row, Column } from "../../style/global_style";
import Button from "../../components/button";
import Header from "../../components/header";
import Text from "../../components/text";

const rightContent = <Row alignVertical="center">
  <Text marginRight="10px"value="Home" />
  <Button title="Entrar" />
  <Button title="Cadastrar" />
</Row>;

const Login = () => {
  return (
    <Container>
      <Column>
        <Header rightContent={rightContent} />
        <Column>
          <Row alignHorizontal="space-around">
            <Column width="368px" alignVertical="center">
              <Text width="368px" fontWeight="700" size="32px" variant={true} value={
                "A plataforma para você aprender com experts, dominar as principais " +
                "tecnologias e entrar mais rápido nas empresas mais desejadas."
              } />
            </Column>
            <Column width="563px" alignVertical="center">
              

                asdasdada


            </Column>
          </Row>
        </Column>
      </Column>
    </Container>
  );
}

export default Login;