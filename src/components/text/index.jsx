import React from "react";
import { TextObject } from "./style";

const Text = ({value, color, width, height, size, lineHeight, fontWeight, variant, marginLeft, marginRight, marginTop, marginBottom}) => {
  return (
    <TextObject 
    width={width} 
    height={height} 
    color={color}
    size={size} 
    ineHeight={lineHeight} 
    fontWeight={fontWeight} 
    variant={variant} 
    marginLeft={marginLeft} 
    marginRight={marginRight}
    marginTop={marginTop}
    marginBottom={marginBottom}
    >{value}</TextObject>
  );
}

export default Text;