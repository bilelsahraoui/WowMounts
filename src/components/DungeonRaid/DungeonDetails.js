import React from 'react';
import styled from 'styled-components/native';
import KeystoneTime from './KeystoneTime';

const DungeonDetails = ({dungeon}) => {
  return (
    <Container>
      <KeyTimingText>Temps à atteindre pour push la clé en </KeyTimingText>
      <KeyTimingContainer>
        {dungeon.keystone_upgrades.map(key => {
          return <KeystoneTime keystone={key} />;
        })}
      </KeyTimingContainer>
    </Container>
  );
};

const Container = styled.View`
  align-self: center;
  height: 100%;
  width: 90%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const KeyTimingText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const KeyTimingContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export default DungeonDetails;
