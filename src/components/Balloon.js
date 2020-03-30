import React from "react";
import { Img, SubImageContainer, SubText } from "./styles";

export default ({ upperText, text, img, height, width }) => {
  return (
    <SubImageContainer>
      <SubText>{upperText}</SubText>
      <Img img={img} height={height} width={width} />
      <SubText>{text}</SubText>
    </SubImageContainer>
  );
};
