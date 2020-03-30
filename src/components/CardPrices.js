import React from "react";
import { Text, Card, ImageContainer } from "./styles";
import normal from "../assets/normal.png";
import cama from "../assets/cama.png";
import passar from "../assets/passar.png";

import Balloon from "./Balloon";

export default () => {
  return (
    <Card>
      <Text>Veja nossos preços</Text>
      <ImageContainer>
        <Balloon
          img={normal}
          upperText="Lavagem do dia-a-dia"
          text={`20 peças\nR$ 39,99`}
          height={"50px"}
          width={"60px"}
        />
        <Balloon
          img={passar}
          upperText="Lavar-e-passar"
          text="Iremos cobrar por peça de roupa"
          height={"50px"}
          width={"55px"}
        />
        <Balloon
          img={cama}
          upperText="Roupas-de-cama"
          text="Lavagem de roupa-de-cama, cobrado por peça"
          height={"50px"}
          width={"55px"}
        />
      </ImageContainer>
    </Card>
  );
};
