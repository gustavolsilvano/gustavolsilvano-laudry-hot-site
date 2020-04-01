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
  Img
} from './stylesMobile';

import playstore from './assets/google-play-pt.png';
import appstore from './assets/appstore.png';
import scrollDown from './assets/scroll-down.png';

import CardPerks from './components/CardPerks';
import CardPrices from './components/CardPrices';
import CardsPlans from './components/CardPlans';

import Form from './components/Form';

import useWindowsDimension from './hooks/useWindowsDimension';

import Loader from 'react-loader-spinner';

export default () => {
  const cardPerksRef = useRef(null);

  const { height } = useWindowsDimension();

  const isBottom = el => {
    return el.getBoundingClientRect().bottom <= window.inner;
  };

  if (cardPerksRef.current) console.log(isBottom(cardPerksRef.current));
  console.log(window.innerHeight);

  // Check scroll position

  const [scrollY, setScrollY] = useState(0);
  const [showCardPerks, setShowCardPerks] = useState(false);
  const [showCardPrices, setShowCardPrices] = useState(false);
  const [showCardPlans, setShowCardPlans] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (scrollY > 0 && !showCardPerks) setShowCardPerks(true);
  if (scrollY > height * 0.3 && !showCardPrices) setShowCardPrices(true);
  if (scrollY > height * 0.3 * 2 && !showCardPlans) setShowCardPlans(true);

  return (
    <Container>
      <BackgroundImage>
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
          {show =>
            show &&
            (props => (
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
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
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
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <CardsPlans />
              </animated.div>
            ))
          }
        </Transition>
      </CardContainer>

      {!showCardPlans ? (
        <div style={{ height: 80 }} />
      ) : (
        <Form setIsLoading={setIsLoading} />
      )}
      {isLoading ? (
        <div
          style={{
            position: 'fixed',
            height: '100%',
            width: '100%',
            background: 'rgba(100,100,100,.6)'
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
              top: 'calc(50% - 50px)'
            }}
          />
        </div>
      ) : null}
    </Container>
  );
};
