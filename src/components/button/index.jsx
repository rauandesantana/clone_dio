import React from 'react';
import { ButtonContainer, ButtonObject } from './style';

const Button = ({title, onClick, variant = false, width, height, marginLeft, marginRight, marginTop, marginBottom}) => {
  const disabled = (onClick === undefined);
  
  return (
    <ButtonContainer
    width={width} 
    height={height}
    marginLeft={marginLeft} 
    marginRight={marginRight}
    marginTop={marginTop}
    marginBottom={marginBottom}
    variant={variant}
    ><ButtonObject onClick={onClick} variant={variant} disabled={disabled}>{title}</ButtonObject>
    </ButtonContainer>
  );
}

export default Button;