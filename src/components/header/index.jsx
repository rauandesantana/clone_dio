import React from 'react';
import LogoDio from "../../assets/images/logo_dio.svg";
import { 
    HeaderContainer, 
    HeaderContent, 
    HeaderLogo, 
} from './style';
import { Row } from '../../style/global_style';

const Header = ({leftContent, rightContent}) => {
  return (
    <HeaderContainer>
        <HeaderContent>
            <HeaderLogo src={LogoDio} />
            {(leftContent) ? <Row>{leftContent}</Row> : null}
        </HeaderContent>
        <HeaderContent>
            {(rightContent) ? <Row>{rightContent}</Row> : null}
        </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;