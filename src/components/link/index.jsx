import React from 'react';
import { LinkObject } from './style';

const Link = ({title, href}) => {
  return (
    <LinkObject href={href}>{title}</LinkObject>
  );
}

export default Link;