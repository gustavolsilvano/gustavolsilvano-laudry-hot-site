import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 100vw;
  height: 44vh;
  background: #362929;
  padding: 20px 0px 20px 0px;
  flex-direction: column;
`;

export const Img = styled.div`
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  height: ${props => props.height};
  width: ${props => props.width};
  align-self: center;
  justify-content: center;
  margin: 10px 0px 10px 0px;
`;

export const Text = styled.div`
  text-align: center;
  color: #fcfcfc;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  margin-top: 30px;
  justify-content: space-around;
`;

export const SubImageContainer = styled.div`
  display: flex;
  border: solid;
  flex-direction: column;
  align-items: center;
  height: 30vh;
  border-radius: 4vh;
  width: 30vw;
  justify-content: center;
  color: #fcfcfc;
  padding: 10px 0px 10px 0px;
`;

export const SubText = styled.div`
  text-align: center;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
  color: #fcfcfc;
  white-space: pre-line;
`;
