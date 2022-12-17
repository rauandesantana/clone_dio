import React from "react";
import { useNavigate } from "react-router-dom";
import BannerDio from "../../assets/images/banner.png";
import { Row, Column, Container } from "../../style/global_style";
import { ImageBanner } from "./style";
import Button from "../../components/button";
import Header from "../../components/header";
import Text from "../../components/text";

const Home = () => {
  const navigate = useNavigate();

  const rightContent = <Row alignVertical="center">
    <Text marginRight="10px"value="Home" />
    <Button title="Entrar" onClick={ () => navigate("/login") } />
    <Button title="Cadastrar" onClick={ () => navigate("/cadastrar") } />
  </Row>;

  return (
    <Container>
      <Column>
        <Header rightContent={rightContent} />
        <Column>
          <Row alignHorizontal="space-around">
            <Column width="368px" alignVertical="center">
              <Text width="368px" fontWeight="700" size="32px" variant={true} value="Implemente" />
              <Text width="368px" fontWeight="700" size="32px" value="o seu futuro global agora!" />
              <Text width="368px" size="16px" marginTop="15px" marginBottom="50px" value={
                "Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare " +
                "seu novo desafio profissional, evoluindo em comunidade com os melhores experts."
              } />
              <Button title="Começar agora" variant={true} onClick={ () => navigate("/cadastrar") } />
            </Column>
            <Column width="563px" alignVertical="center">
              <ImageBanner src={BannerDio} />
            </Column>
          </Row>
        </Column>
      </Column>
    </Container>
  );
}

export default Home;