import React from 'react';
import { LinkObject } from './style';

const Link = ({title, href, variant}) => {
  return (
    <LinkObject href={href} variant={variant}>{title}</LinkObject>
  );
}

export default Link;