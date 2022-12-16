import React from 'react';
import { ButtonContainer, ButtonObject } from './style';

const Button = ({title, onClick, variant = false}) => {
  return (
    <ButtonContainer variant={variant}>
      <ButtonObject onClick={onClick} variant={variant}>{title}</ButtonObject>
    </ButtonContainer>
  );
}

export default Button;