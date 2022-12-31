import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import axiosClient from '../../config/axiosClient';
import Loading from '../../components/Global/Loading';
import ErrorComponent from '../../components/Global/ErrorComponent';
import LootDescription from './LootDescription';

const BossDetails = ({boss}) => {
  const [bossDetails, setBossDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axiosClient
      .get(boss?.key.href)
      .then(res => {
        setBossDetails(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [boss]);
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorComponent />
      ) : (
        <>
          <ToggleOpen onPress={() => setIsOpen(!isOpen)}>
            <ToggleContainer>
              {isOpen ? (
                <ArrowImage
                  source={require('../../assets/images/toggle-on.png')}
                />
              ) : (
                <ArrowImage
                  source={require('../../assets/images/toggle.png')}
                />
              )}
              <BossDetailText>{boss.name.fr_FR}</BossDetailText>
            </ToggleContainer>
          </ToggleOpen>
          {isOpen ? (
            <>
              <BossContainer>
                <ImageContainer>
                  <BossImage
                    source={{
                      uri: `https://render.worldofwarcraft.com/eu/npcs/zoom/creature-display-${bossDetails.creatures[0].creature_display.id}.jpg`,
                    }}
                  />
                </ImageContainer>
                <BossDescriptionContainer>
                  <BossDetailDescriptionText>
                    {bossDetails.description.fr_FR}
                  </BossDetailDescriptionText>
                </BossDescriptionContainer>
              </BossContainer>
              <LootContainer>
                <LootDescription loots={bossDetails?.items} />
              </LootContainer>
            </>
          ) : null}
        </>
      )}
    </Container>
  );
};

const Container = styled.View`
  align-self: center;
  height: auto;
  width: 100%;
  padding-bottom: 20px;
  margin-top: 20px;
`;

const BossDescriptionContainer = styled.View`
  height: auto;
  width: 70%;
`;

const BossContainer = styled.View`
  align-self: center;
  height: auto;
  width: auto;
  padding-bottom: 20px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LootContainer = styled.View`
  align-self: center;
  height: auto;
  width: auto;
  padding-bottom: 20px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

const ImageContainer = styled.View`
  width: 100px;
  height: auto;
`;

const BossImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-right: 10px;
`;

const BossDetailText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
`;

const BossDetailDescriptionText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const ToggleContainer = styled.View`
  align-self: center;
  height: auto;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 60px;
`;

const ArrowImage = styled.Image`
  margin-right: 25px;
  margin-top: 4px;
  height: 20px;
  width: 20px;
`;

const ToggleOpen = styled.TouchableOpacity``;

export default BossDetails;
