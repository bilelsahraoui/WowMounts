import React, {useState} from 'react';
import styled from 'styled-components/native';
import BossDetails from './BossDetails';

const BossDescription = ({encounters}) => {
  const [isOpen, setIsOpen] = useState(true);
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
          <BossDescTitle>Liste des boss</BossDescTitle>
          <MythicImage source={require('../../assets/images/mythic.png')} />
        </ToggleContainer>
      </ToggleOpen>
      {isOpen ? (
        <StyledFlatList
          data={encounters}
          keyExtractor={item => item.id}
          renderItem={({item}) => <BossDetails boss={item} />}
        />
      ) : null}
    </Container>
  );
};

const Container = styled.View`
  height: auto;
  width: auto;
  padding-bottom: 20px;
`;

const MythicImage = styled.Image`
  height: 48px;
  width: 48px;
  margin-left: 10px;
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
  justify-self: flex-start;
  margin-top: 4px;
  height: 20px;
  width: 20px;
`;

const BossDescTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const ToggleOpen = styled.TouchableOpacity``;

const StyledFlatList = styled.FlatList`
  height: auto;
  width: auto;
`;

export default BossDescription;
