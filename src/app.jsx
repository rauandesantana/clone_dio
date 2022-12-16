import React from "react";
import BannerDio from "./assets/images/banner.png";
import { 
  Row,
  Column, 
  Container,
} from "./style/global_style";
import { 
  ImageBanner, 
  Text, 
} from "./style/app";
import Button from "./components/button";
import Header from "./components/header";

const rightContent = <Row alignVertical="center">
  <Text marginRight="10px">Home</Text>
  <Button title="Entrar" />
  <Button title="Cadastrar" />
</Row>;

const App = () => {
  return (
    <Container>
      <Column>
        <Header rightContent={rightContent} />
        <Column>
          <Row alignHorizontal="space-around">
            <Column width="368px" alignVertical="center">
              <Text width="368px" fontWeight="700" size="32px" variant={true}>Implemente</Text>
              <Text width="368px" fontWeight="700" size="32px" >o seu futuro global agora!</Text>
              <Text width="368px" size="16px" marginTop="15px" marginBottom="50px">
                Domine as tecnologias utilizadas pelas 
                empresas mais inovadoras do mundo e encare 
                seu novo desafio profissional, evoluindo 
                em comunidade com os melhores experts.
              </Text>
              <Button title="Começar agora" variant={true} />
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

export default App;