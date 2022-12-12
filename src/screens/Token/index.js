import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const Token = () => {
  const [token, setToken] = useState(0);
  useEffect(() => {
    axios
      .get(
        'https://eu.api.blizzard.com/data/wow/token/index?namespace=dynamic-eu&locale=fr_FR&access_token=EUclt1NLzwNE3NmGlDndFqDTFIsp85g6z6',
      )
      .then(res => setToken(res.data));
  });
  return (
    <Container>
      <BackgroundContainer source={require('../../assets/images/bank.jpg')} />
      <DataContainer>
        <DescriptionContainer>
          <Description>Dernière mise à jour :</Description>
          <TimeStamp>
            {`${new Date(
              token.last_updated_timestamp,
            ).toLocaleDateString()} à ${new Date(
              token.last_updated_timestamp,
            ).toLocaleTimeString()}`}
          </TimeStamp>
          <Price>{token.price / 100 / 100} pièces d'or</Price>
        </DescriptionContainer>
      </DataContainer>
    </Container>
  );
};

const BackgroundContainer = styled.Image`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
`;

const Container = styled.View`
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

const DataContainer = styled.View`
  align-items: center;
  height: 100px;
  width: 40%;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 60px;
`;

const DescriptionContainer = styled.View`
  background-color: whitesmoke;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 4px;
`;

const Description = styled.Text`
  font-size: 15px;
  text-decoration: underline;
`;

const Price = styled.Text`
  font-size: 15px;
  padding: 10px;
  font-style: italic;
`;

const TimeStamp = styled.Text`
  font-size: 15px;
`;

export default Token;
