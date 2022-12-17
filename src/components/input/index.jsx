import React from 'react';
import { InputContainer, InputIconContainer, InputObject } from './style';

const Input = ({width, height, leftIcon, marginLeft, marginRight, marginTop, marginBottom, ...rest}) => {
  return (
    <InputContainer
    width={width} 
    height={height}
    marginLeft={marginLeft} 
    marginRight={marginRight}
    marginTop={marginTop}
    marginBottom={marginBottom}
    >{(leftIcon) ? <InputIconContainer>{leftIcon}</InputIconContainer> : null}
      <InputObject {...rest} />
    </InputContainer>
  );
}

export default Input;