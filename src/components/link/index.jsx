import React from 'react';
import { LinkObject } from './style';

const Link = ({title, href, target, variant, onClick}) => {
  const disabled = (onClick === undefined && href === undefined);

  return (
    <LinkObject 
    href={href} 
    target={(target) ? target : "_blank"} 
    variant={variant} 
    onClick={onClick} 
    disabled={disabled}
    >{title}</LinkObject>
  );
}

export default Link;