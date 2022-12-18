import React from 'react';
import { LinkObject } from './style';

const Link = ({title, href, target, variant, noEfect, onClick}) => {
  const disabled = (onClick === undefined && href === undefined);

  return (
    <LinkObject 
    href={href} 
    target={(target) ? target : "_blank"} 
    variant={variant} 
    onClick={onClick} 
    disabled={disabled}
    noEfect={noEfect}
    >{title}</LinkObject>
  );
}

export default Link;