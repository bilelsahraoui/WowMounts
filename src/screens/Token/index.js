import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import ErrorComponent from '../../components/Global/ErrorComponent';
import Loading from '../../components/Global/Loading';
import axiosClient from '../../config/axiosClient';

const Token = () => {
  const [token, setToken] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axiosClient
      .get(
        'https://eu.api.blizzard.com/data/wow/token/index?namespace=dynamic-eu&locale=fr_FR',
      )
      .then(res => {
        setToken(res.data);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorComponent />
      ) : (
        <>
          <BackgroundContainer
            source={require('../../assets/images/bank.jpg')}
          />
          <DataContainer>
            <DescriptionContainer>
              <Description>Dernière mise à jour:</Description>
              <TimeStamp>
                {`${new Date(
                  token.last_updated_timestamp,
                ).toLocaleDateString()} à ${new Date(
                  token.last_updated_timestamp,
                ).toLocaleTimeString()}`}
              </TimeStamp>
              <GoldContainer>
                <WowGold source={require('../../assets/images/wow-gold.png')} />
                <Price>{token.price / 100 / 100} pièces d'or</Price>
              </GoldContainer>
            </DescriptionContainer>
          </DataContainer>
        </>
      )}
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

const GoldContainer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
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
  width: 50%;
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

const WowGold = styled.Image`
  height: 20px;
  width: 20px;
`;

export default Token;
