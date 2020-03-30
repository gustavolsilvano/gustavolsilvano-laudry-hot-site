import React from "react";
import { Text, Card, ImageContainer } from "./styles";
import solteiro from "../assets/solteiro.png";
import casal from "../assets/casal.png";
import familia from "../assets/familia.png";

import Balloon from "./Balloon";

export default () => {
  return (
    <Card>
      <Text>Assine um de nossos planos</Text>
      <ImageContainer>
        <Balloon
          img={solteiro}
          upperText="Plano solteiro"
          text={`20 peças por semana\n\nR$ 180,00 / mês`}
          height={"50px"}
          width={"60px"}
        />
        <Balloon
          img={casal}
          upperText="Plano casal"
          text={`40 peças por semana\n\nR$ 340,00 / mês`}
          height={"50px"}
          width={"55px"}
        />
        <Balloon
          img={familia}
          upperText="Plano família"
          text={`80 peças por semana\n\nR$ 640,00 / mês`}
          height={"50px"}
          width={"55px"}
        />
      </ImageContainer>
    </Card>
  );
};
