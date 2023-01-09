import React, {useState} from 'react';
import styled from 'styled-components/native';
import LootDetails from './LootDetails';

const LootDescription = ({loots}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <ToggleOpen onPress={() => setIsOpen(!isOpen)}>
        <ToggleContainer>
          <ArrowImage
            source={
              isOpen
                ? require('../../assets/images/toggle-on.png')
                : require('../../assets/images/toggle.png')
            }
          />
          <LootDetailText>Butin</LootDetailText>
          <LootImage source={require('../../assets/images/loot.png')} />
        </ToggleContainer>
      </ToggleOpen>
      {isOpen ? (
        <>
          {loots.map(loot => {
            return <LootDetails loot={loot} key={loot.id} />;
          })}
        </>
      ) : null}
    </Container>
  );
};

const Container = styled.View`
  align-self: center;
  height: auto;
  width: 100%;
  padding-bottom: 10px;
`;

const LootImage = styled.Image`
  height: 48px;
  width: 48px;
  margin-left: 10px;
`;

const LootDetailText = styled.Text`
  font-size: 22px;
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
  margin-left: 100px;
`;

const ArrowImage = styled.Image`
  margin-right: 25px;
  margin-top: 4px;
  height: 20px;
  width: 20px;
`;

const ToggleOpen = styled.TouchableOpacity``;

export default LootDescription;
