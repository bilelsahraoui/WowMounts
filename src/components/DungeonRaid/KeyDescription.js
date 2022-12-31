import React, {useState} from 'react';
import styled from 'styled-components/native';
import KeystoneTime from './KeystoneTime';

const KeyDescription = ({dungeon}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Container>
      <ToggleOpen onPress={() => setIsOpen(!isOpen)}>
        <ToggleContainer>
          {isOpen ? (
            <ArrowImage source={require('../../assets/images/toggle-on.png')} />
          ) : (
            <ArrowImage source={require('../../assets/images/toggle.png')} />
          )}

          <KeyTitle>Timers Mythiques +</KeyTitle>
        </ToggleContainer>
      </ToggleOpen>
      {isOpen ? (
        <KeyContainer>
          <KeyTimingText>Temps à atteindre pour passer la clé en</KeyTimingText>
          <KeyTimingContainer>
            {dungeon.keystone_upgrades.map(key => {
              return <KeystoneTime keystone={key} key={key.id} />;
            })}
          </KeyTimingContainer>
        </KeyContainer>
      ) : null}
    </Container>
  );
};

const Container = styled.View`
  height: auto;
  width: auto;
  padding-bottom: 20px;
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

const KeyTimingText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const KeyTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const KeyTimingContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const KeyContainer = styled.View`
  align-self: center;
  height: auto;
  width: auto;
  background-color: lightgray;
  border-radius: 16px;
  padding: 10px;
  margin-top: 10px;
`;

export default KeyDescription;
