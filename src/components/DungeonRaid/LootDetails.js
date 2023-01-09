import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import axiosClient from '../../config/axiosClient';
import ErrorComponent from '../../components/Global/ErrorComponent';

const LootDetails = ({loot}) => {
  const [item, setItem] = useState({});
  const [itemImage, setItemImage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    axiosClient
      .get(loot.item?.key.href)
      .then(res => {
        setItem(res.data);
        axiosClient
          .get(res.data?.media.key.href)
          .then(resultat => {
            setItemImage(resultat.data.assets[0].value);
          })
          .catch(() => {
            setError(true);
          });
      })
      .catch(() => {
        setError(true);
      });
  }, [loot]);
  return (
    <Container>
      {error ? (
        <ErrorComponent />
      ) : (
        <LootContainer>
          <LootImage
            source={
              itemImage
                ? {uri: itemImage}
                : require('../../assets/images/no-image.png')
            }
          />
          {item.name?.fr_FR.length >= 30 ? (
            <SmallText>{item.name?.fr_FR}</SmallText>
          ) : (
            <LootText>{item.name?.fr_FR}</LootText>
          )}
          <InfoContainer>
            <ArmorType>{item.item_subclass?.name.fr_FR} </ArmorType>
            <RareQuality>{item.quality?.name.fr_FR}</RareQuality>
          </InfoContainer>
        </LootContainer>
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

const LootImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 50px;
  margin-right: 10px;
`;

const LootText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-right: 10px;
`;

const SmallText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  margin-right: 10px;
`;

const LootContainer = styled.View`
  align-self: flex-start;
  height: auto;
  width: 100%;
  padding-bottom: 10px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfoContainer = styled.View`
  width: 100px;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const RareQuality = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: purple;
`;

const ArmorType = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export default LootDetails;
