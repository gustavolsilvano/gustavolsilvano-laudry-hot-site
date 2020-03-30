import React from "react";
import { Text, Card, ImageContainer } from "./styles";
import deliver from "../assets/deliver.png";
import laudry from "../assets/laudry.png";
import phone from "../assets/phone.png";

import Balloon from "./Balloon";

export default () => {
  return (
    <Card>
      <Text>Cansado de ter que lavar suas roupas?</Text>
      <ImageContainer>
        <Balloon
          img={laudry}
          text="Sua roupa será lavada por profissionais qualificados!"
          height={"50px"}
          width={"60px"}
        />
        <Balloon
          img={deliver}
          text="Buscamos e entregamos sua roupa em sua residência no horário que você
        definir!"
          height={"50px"}
          width={"100px"}
        />
        <Balloon
          img={phone}
          text="Tudo isso sem sair de casa e com apenas alguns toques através de nosso App!"
          height={"50px"}
          width={"55px"}
        />
      </ImageContainer>
    </Card>
  );
};
