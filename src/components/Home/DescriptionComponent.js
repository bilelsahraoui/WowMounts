import React, {useState} from 'react';
import styled from 'styled-components/native';
import ClosedComponent from './ClosedComponent';

const DescriptionComponent = () => {
  const [open, setOpen] = useState(true);

  return open ? (
    <Container>
      <Logo source={require('../../assets/images/wow-logo.png')} />
      <StyledText>WowMounts</StyledText>
      <Description>
        <StyledDesc>Bienvenue en Azeroth soldat !</StyledDesc>
        <StyledDesc>
          Ici vous retrouverez tout ce qu'il faut pour devenir un vrai guerrier
          et survivre dans ce monde
        </StyledDesc>
        <StyledDesc>
          Montures, Métiers, et même un petit jeton pour vous aider à garder
          l'oeil sur le cours du PO
        </StyledDesc>
        <StyledDesc>Si vous avez tout compris, commencons !</StyledDesc>
        <ClosedComponent onPress={() => setOpen(false)} />
      </Description>
    </Container>
  ) : null;
};

const Logo = styled.Image`
  margin-top: 5px;
  width: 100%;
  height: 140px;
`;

const Container = styled.View`
  height: 95%;
  background-color: rgba(255, 255, 255, 0.8);
  width: 85%;
  align-self: center;
  margin-top: 5%;
  border-radius: 10px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 10px;
  align-self: center;
  color: black;
`;

const Description = styled.View`
  height: 100%;
  padding-left: 5%;
  padding-right: 5%;
`;

const StyledDesc = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  color: black;
`;

export default DescriptionComponent;
