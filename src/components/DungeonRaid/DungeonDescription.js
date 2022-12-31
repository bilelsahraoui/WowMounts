import React, {useState} from 'react';
import styled from 'styled-components/native';

const DungeonDescription = ({dungeon}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <DescriptionContainer>
      <ToggleOpen onPress={() => setIsOpen(!isOpen)}>
        <ToggleContainer>
          {isOpen ? (
            <ArrowImage source={require('../../assets/images/toggle-on.png')} />
          ) : (
            <ArrowImage source={require('../../assets/images/toggle.png')} />
          )}

          <DescriptionTitle>Informations globales</DescriptionTitle>
        </ToggleContainer>
      </ToggleOpen>
      {isOpen ? (
        <>
          <DungeonDescriptionText>
            {dungeon.description?.fr_FR}
          </DungeonDescriptionText>
          <LocationContainer>
            <LocationImage
              source={require('../../assets/images/locationMap.jpg')}
            />
            <LocationMap>{dungeon.location?.name.fr_FR}</LocationMap>
          </LocationContainer>
          <Expansion>
            Il s'agit d'un donjon de l'extension {dungeon.expansion?.name.fr_FR}{' '}
            et le niveau requis pour le faire en Mythique + est{' '}
            {dungeon.minimum_level}.
          </Expansion>
        </>
      ) : null}
    </DescriptionContainer>
  );
};

const DescriptionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Expansion = styled.Text`
  font-size: 18px;
  text-align: center;
  align-self: center;
  font-weight: bold;
`;

const LocationContainer = styled.View`
  height: auto;
  width: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: row;
  justify-content: center;
`;

const LocationImage = styled.Image`
  height: 32px;
  width: 48px;
  border-radius: 14px;
  border-width: 1px;
  margin-right: 20px;
`;

const LocationMap = styled.Text`
  font-size: 18px;
  text-align: center;
  align-self: center;
  font-weight: bold;
`;

const ToggleContainer = styled.View`
  align-self: center;
  height: auto;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

const ArrowImage = styled.Image`
  margin-right: 25px;
  justify-self: flex-end;
  margin-top: 4px;
  height: 20px;
  width: 20px;
`;

const ToggleOpen = styled.TouchableOpacity``;

const DescriptionContainer = styled.View`
  height: auto;
  width: auto;
  padding-bottom: 20px;
  background-color: ${props => props.image};
  /* background-image: url(${props => props.image}); */
  /* background-size: cover;
  background-position: center; */
`;

const DungeonDescriptionText = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export default DungeonDescription;
