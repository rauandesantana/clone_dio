import React from 'react';
import { useNavigate } from "react-router-dom";
import LogoDio from "../../assets/images/logo_dio.svg";
import { HeaderContainer, HeaderContent, HeaderLogo } from './style';
import { Row } from '../../style/global_style';
import Link from "../../components/link";

const Header = ({leftContent, rightContent}) => {
  const navigate = useNavigate();
  
  return (
    <HeaderContainer>
        <HeaderContent>
            <Link noEfect={true} title={<HeaderLogo src={LogoDio} />}  onClick={ () => navigate("/") } />
            {(leftContent) ? <Row>{leftContent}</Row> : null}
        </HeaderContent>
        <HeaderContent>
            {(rightContent) ? <Row>{rightContent}</Row> : null}
        </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;