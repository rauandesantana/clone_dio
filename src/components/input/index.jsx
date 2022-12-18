import React from 'react';
import { InputContainer, InputIconContainer, InputObject } from './style';

const Input = ({width, height, variant, leftIcon, marginLeft, marginRight, marginTop, marginBottom, ...rest}) => {
  return (
    <InputContainer
    width={width} 
    height={height}
    variant={variant}
    marginLeft={marginLeft} 
    marginRight={marginRight}
    marginTop={marginTop}
    marginBottom={marginBottom}
    >{(leftIcon) ? <InputIconContainer variant={variant}>{leftIcon}</InputIconContainer> : null}
      <InputObject variant={variant} {...rest} />
    </InputContainer>
  );
}

export default Input;