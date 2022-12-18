import React from "react";
import { useNavigate } from "react-router-dom";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { Container, Row, Column } from "../../style/global_style";
import Button from "../../components/button";
import Header from "../../components/header";
import Text from "../../components/text";
import Input from "../../components/input";
import Link from "../../components/link";

const Cadastrar = () => {
  const navigate = useNavigate();

  const rightContent = <Row alignItems="center">
  <Text marginRight="10px"value="Home" />
    <Button title="Entrar" onClick={() => navigate("/login") } />
    <Button title="Cadastrar" />
  </Row>;

  return (
    <Container>
      <Column>
        <Header rightContent={rightContent} />
        <Column>
          <Row alignContent="space-around">
            <Column width="565px" alignContent="center">
              <Text width="388px" fontWeight="700" size="32px" value={
                "A plataforma para você aprender com experts, dominar as principais " +
                "tecnologias e entrar mais rápido nas empresas mais desejadas."
              } />
            </Column>
            <Row width="600px" alignContent="center">
              <Column width="372px" alignContent="center">
                <Text fontWeight="700" size="32px" marginBottom="10px" value="Faça seu cadastro" />
                <Text fontWeight="400" size="18px" marginBottom="35px" value="Faça seu login e make the change._" />
                <Input width="290px" placeholder="Nome completo" leftIcon={<MdPerson />} type="text" marginBottom="15px" />
                <Input width="290px" placeholder="E-mail" leftIcon={<MdEmail />} type="email" marginBottom="15px" />
                <Input width="290px" placeholder="Password" leftIcon={<MdLock />} type="password" marginBottom="35px" />
                <Button width="270px" title="Criar minha conta" variant={true} marginBottom="35px" onClick={() => alert(`Criando Conta!`) } />
                <Text width="372px" marginBottom="15px" value={
                  'Ao clicar em "Criar minha conta", declaro que aceito ' +
                  'as Políticas de Privacidade e os Termos de Uso da DIO.'
                } />
                <Row width="290px" height="40px" alignContent="flex-start">
                  <Text fontWeight="700" marginRight="8px" value="Já tenho conta." />
                  <Link title="Fazer login" onClick={() => navigate("/login") } />
                </Row>
              </Column>
            </Row>
          </Row>
        </Column>
      </Column>
    </Container>
  );
}

export default Cadastrar;