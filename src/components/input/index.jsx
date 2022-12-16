import React from 'react';
import { InputContainer, InputIconContainer, InputObject } from './style';

const Input = ({leftIcon, ...rest}) => {
  return (
    <InputContainer>
        {(leftIcon) ? <InputIconContainer>{leftIcon}</InputIconContainer> : null}
        <InputObject {...rest} />
    </InputContainer>
  );
}

export default Input;