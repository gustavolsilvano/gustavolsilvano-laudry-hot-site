import styled from 'styled-components';
import home from './assets/homeMobile.jpg';

export const BackgroundImage = styled.section`
  display: flex;
  width: 100vw;
  flex-direction: column;
  background-image: ${`url(${home})`};
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  flex: 1;
`;

export const TransparencyBackground = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100vw;
  height: 100vh;
  background: rgba(104, 180, 248, 0.6);
`;

export const Title = styled.h1`
  display: flex;
  color: #fcfcfc;
  font-size: 2em;
  border: solid;
  border-width: 0px 0px 1px 0px;
  padding-bottom: 5px;
  margin: 40px 20px 6px 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Text = styled.div`
  display: flex;
  color: #fcfcfc;
  margin: 0px 20px 0px 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
`;

export const Button = styled.div`
  display: flex;
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  height: ${props => props.height};
  width: ${props => props.width};
`;

export const Img = styled.div`
  display: flex;
  background-image: url(${props => props.img});
  background-size: cover;
  align-self: center;
  justify-content: center;
  height: 100px;
  width: 100px;
`;
