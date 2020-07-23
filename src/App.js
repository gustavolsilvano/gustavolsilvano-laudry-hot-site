import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import React, { useEffect, useState, useRef } from 'react';
import { Transition, animated } from 'react-spring/renderprops';
import {
  Title,
  BackgroundImage,
  TransparencyBackground,
  CardContainer,
  Container,
  Text,
  ButtonContainer,
  Button,
  Img,
} from './stylesMobile';

import playstore from './assets/google-play-pt.png';
import appstore from './assets/appstore.png';
import scrollDown from './assets/scroll-down.png';

import CardPerks from './components/CardPerks';
import CardPrices from './components/CardPrices';
import CardsPlans from './components/CardPlans';

import Form from './components/Form';

import Loader from 'react-loader-spinner';

export default () => {
  const offset = 100;

  const mainDivRef = useRef(null);
  const cardPerksRef = useRef(null);
  const cardPlansRef = useRef(null);
  const cardPricesRef = useRef(null);

  const isBottom = (el) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight - offset;
  };

  // Check scroll position

  const [showCardPerks, setShowCardPerks] = useState(false);
  const [showCardPrices, setShowCardPrices] = useState(false);
  const [showCardPlans, setShowCardPlans] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (mainDivRef.current && isBottom(mainDivRef.current))
        setShowCardPerks(true);
      if (cardPerksRef.current && isBottom(cardPerksRef.current))
        setShowCardPrices(true);
      if (cardPricesRef.current && isBottom(cardPricesRef.current))
        setShowCardPlans(true);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      <BackgroundImage ref={mainDivRef}>
        <TransparencyBackground>
          <Title>laudry.me</Title>
          <Text>Tenha uma vida mais livre!</Text>
          <ButtonContainer>
            <Button
              height={'calc(60px * 0.8)'}
              width={'calc(200px * 0.8)'}
              img={playstore}
              onClick={() =>
                alert('Desculpe. Ainda estamos trabalhando no app para android')
              }
            />
            <Button
              height={'calc(60px * .96)'}
              width={'calc(200px * .96)'}
              img={appstore}
              onClick={() =>
                alert('Desculpe. Ainda estamos trabalhando no app para iOS')
              }
            />
          </ButtonContainer>
          <Img img={scrollDown} />
        </TransparencyBackground>
      </BackgroundImage>

      <CardContainer>
        <Transition
          native
          items={showCardPerks}
          from={{ marginLeft: -500 }}
          enter={{ marginLeft: 0 }}
        >
          {(show) =>
            show &&
            ((props) => (
              <animated.div style={props} ref={cardPerksRef}>
                <CardPerks />
              </animated.div>
            ))
          }
        </Transition>

        <Transition
          native
          items={showCardPrices}
          from={{ marginLeft: -500 }}
          enter={{ marginLeft: 0 }}
        >
          {(show) =>
            show &&
            ((props) => (
              <animated.div style={props} ref={cardPricesRef}>
                <CardPrices />
              </animated.div>
            ))
          }
        </Transition>

        <Transition
          native
          items={showCardPlans}
          from={{ marginLeft: -500 }}
          enter={{ marginLeft: 0 }}
        >
          {(show) =>
            show &&
            ((props) => (
              <animated.div style={props} ref={cardPlansRef}>
                <CardsPlans />
              </animated.div>
            ))
          }
        </Transition>
      </CardContainer>

      {!showCardPlans ? (
        <div style={{ height: offset }} />
      ) : (
        <Form setIsLoading={setIsLoading} />
      )}
      {isLoading ? (
        <div
          style={{
            position: 'fixed',
            height: '100%',
            width: '100%',
            background: 'rgba(100,100,100,.6)',
          }}
        >
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={30000} //3 secs
            style={{
              position: 'fixed',
              left: 'calc(50% - 50px)',
              top: 'calc(50% - 50px)',
            }}
          />
        </div>
      ) : null}
    </Container>
  );
};
