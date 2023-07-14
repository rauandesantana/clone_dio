import React from "react";
import { MdSearch, MdKeyboardArrowDown } from "react-icons/md";
import CardBanner1 from "../../assets/images/banner_card_1.jpg";
import CardBanner2 from "../../assets/images/banner_card_2.jpg";
import UserAvatar from "../../assets/images/avatar_user.png"
import UserAvatarLarge from "../../assets/images/avatar_user_large.png"
import { AvatarContent, AvatarImage, BarraFundo, BarraInterna } from "./style";
import { Container, Row, Column } from "../../style/global_style";
import Card from "../../components/card";
import Header from "../../components/header";
import Text from "../../components/text";
import Input from "../../components/input";
import Link from "../../components/link";

const Feed = () => {

  const leftContent = <Row alignItems="center">
    <Input width="290px" placeholder="Pesquisar" leftIcon={<MdSearch size="25.5px" />} type="text" marginLeft="35px" variant={true} />
    <Link noEfect={true} onClick={() => alert("Acessando Live Code!") } title={
      <Text size="20px" fontWeight="700" marginLeft="25px" value="Live Code" />
    } />
    <Link noEfect={true} onClick={() => alert("Acessando Global!") } title={
      <Text size="20px" fontWeight="700" marginLeft="25px" value="Global" />
    } />
  </Row>;

  const rightContent = <Row alignItems="center">
    <Link noEfect={true} onClick={() => alert("Acessando Menu!") } title={
      <Row alignItems="center">
        <AvatarContent>
          <AvatarImage src={UserAvatar} />  
        </AvatarContent>
        <MdKeyboardArrowDown size="30px" />
      </Row>
    } />
  </Row>;

  const posts = {
    "2": {
      "title": "Clone DIO",
      "resume": "Criando um Clone da Plataforma DIO em React.js, JavaScript, Node.js e Styled-Comonents.",
      "tags": "#React #JavaScript #Node #StyledComonents",
      "hots": 3405,
      "comments": 192,
      "banner": CardBanner2,
      "timeInfo": "Há 8 minutos",
      "user": {
        "avatar": UserAvatar,
        "userName": "Rauan Rosa",
      },
    },
    "1": {
      "title": "Pokedex DIO",
      "resume": "Criando uma Pokedex em Desenvolvimento Web com HTML5, CSS3, JavaScript, Node.js e Consumo API.",
      "tags": "#HTML5 #CSS3 #JavaScript #Node #PokeAPI",
      "hots": 6831,
      "comments": 528,
      "banner": CardBanner1,
      "timeInfo": "Há 10 horas",
      "user": {
        "avatar": UserAvatar,
        "userName": "Rauan Rosa",
      },
    },
  };

  return (
    <Container>
      <Column>
        <Header leftContent={leftContent} rightContent={rightContent} />
        <Column>
          <Row alignContent="space-around">
            <Column width="797px" alignContent="center">
              <Text size="20px" fontWeight="700" marginLeft="15px" marginBottom="10px" value="Feed" />
              <Link noEfect={true} onClick={() => alert(`Acessando ${posts[2].title}!`) } title={
                <Card 
                  banner={posts[2].banner}
                  title={posts[2].title} 
                  resume={posts[2].resume} 
                  tags={posts[2].tags} 
                  hots={posts[2].hots} 
                  comments={posts[2].comments} 
                  timeInfo={posts[2].timeInfo} 
                  avatar={posts[2].user.avatar} 
                  userName={posts[2].user.userName} 
                />
              } />
              <Link noEfect={true} onClick={() => alert(`Acessando ${posts[1].title}!`) } title={
                <Card 
                  banner={posts[1].banner}
                  title={posts[1].title} 
                  resume={posts[1].resume} 
                  tags={posts[1].tags} 
                  hots={posts[1].hots} 
                  comments={posts[1].comments} 
                  timeInfo={posts[1].timeInfo} 
                  avatar={posts[1].user.avatar} 
                  userName={posts[1].user.userName} 
                />
              } />
            </Column>
            <Column width="600px" alignContent="flex-start" alignItems="flex-end">
              <Row width="300px" height="100px" alignItems="center">
                <Text size="20px" fontWeight="700" marginTop="20px" color="#7A869A" value="#RANKING DA SEMANA"/>
              </Row>
              {/* Rank 1 */}
              <Link noEfect={true} onClick={() => alert(`Acessando Perfil!`) } title={
                <Row width="300px" height="80px" alignItems="center">
                  <AvatarContent width="90px" height="70px" >
                    <AvatarImage src={UserAvatarLarge} />  
                  </AvatarContent>
                  <Column alignContent="center">
                    <Text fontWeight="700" marginLeft="10px" value="Rauan Rosa" />
                    <Text size="16px" marginLeft="10px" value="XP 61873 / 67224" />
                    <BarraFundo>
                      <BarraInterna percent="45" />
                    </BarraFundo>
                  </Column>
                </Row>
              } />
              {/* Rank 2 */}
              <Link noEfect={true} onClick={() => alert(`Acessando Perfil!`) } title={
                <Row width="300px" height="80px" alignItems="center">
                  <AvatarContent width="90px" height="70px" >
                    <AvatarImage src={UserAvatarLarge} />  
                  </AvatarContent>
                  <Column alignContent="center">
                    <Text fontWeight="700" marginLeft="10px" value="Rauan Rosa" />
                    <Text size="16px" marginLeft="10px" value="XP 61873 / 67224" />
                    <BarraFundo>
                      <BarraInterna percent="45" />
                    </BarraFundo>
                  </Column>
                </Row>
              } />
              {/* Rank 3 */}
              <Link noEfect={true} onClick={() => alert(`Acessando Perfil!`) } title={
                <Row width="300px" height="80px" alignItems="center">
                  <AvatarContent width="90px" height="70px" >
                    <AvatarImage src={UserAvatarLarge} />  
                  </AvatarContent>
                  <Column alignContent="center">
                    <Text fontWeight="700" marginLeft="10px" value="Rauan Rosa" />
                    <Text size="16px" marginLeft="10px" value="XP 61873 / 67224" />
                    <BarraFundo>
                      <BarraInterna percent="45" />
                    </BarraFundo>
                  </Column>
                </Row>
              } />
              {/* Rank 4 */}
              <Link noEfect={true} onClick={() => alert(`Acessando Perfil!`) } title={
                <Row width="300px" height="80px" alignItems="center">
                  <AvatarContent width="90px" height="70px" >
                    <AvatarImage src={UserAvatarLarge} />  
                  </AvatarContent>
                  <Column alignContent="center">
                    <Text fontWeight="700" marginLeft="10px" value="Rauan Rosa" />
                    <Text size="16px" marginLeft="10px" value="XP 61873 / 67224" />
                    <BarraFundo>
                      <BarraInterna percent="45" />
                    </BarraFundo>
                  </Column>
                </Row>
              } />
              {/* Rank 5 */}
              <Link noEfect={true} onClick={() => alert(`Acessando Perfil!`) } title={
                <Row width="300px" height="80px" alignItems="center">
                  <AvatarContent width="90px" height="70px" >
                    <AvatarImage src={UserAvatarLarge} />  
                  </AvatarContent>
                  <Column alignContent="center">
                    <Text fontWeight="700" marginLeft="10px" value="Rauan Rosa" />
                    <Text size="16px" marginLeft="10px" value="XP 61873 / 67224" />
                    <BarraFundo>
                      <BarraInterna percent="45" />
                    </BarraFundo>
                  </Column>
                </Row>
              } />
            </Column>
          </Row>
        </Column>
      </Column>
    </Container>
  );
}

export default Feed;