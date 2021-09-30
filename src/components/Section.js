import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section(props) {
  return (
    <Container bgImage={props.backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{props.leftBtnText}</LeftButton>
            {props.rightBtnText && (
              <RightButton>{props.rightBtnText}</RightButton>
            )}
          </ButtonGroup>
          <DownArrow src='/images/down-arrow.svg' />
        </Fade>
      </Buttons>
    </Container>
  );
}

export default Section;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${props => `url('/images/${props.bgImage}')`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  border-radius: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.85;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  margin-top: 10px;
  padding-left: 252px;
`;

const Buttons = styled.div``;
