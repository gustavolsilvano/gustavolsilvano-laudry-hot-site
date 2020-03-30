import React from "react";
import {
  Title,
  BackgroundImage,
  TransparencyBackground,
  Card,
  CardContainer,
  TitleContainer
} from "./stylesMobile";

import useWindowsDimension from "./hooks/useWindowsDimension";

export default () => {
  const { width, height } = useWindowsDimension();
  return (
    <BackgroundImage>
      <TransparencyBackground>
        <CardContainer>
          <Card />
          <Card />
          <Card />
        </CardContainer>
        <TitleContainer>
          <Title>laudry.me Browser</Title>
        </TitleContainer>
      </TransparencyBackground>
    </BackgroundImage>
  );
};
