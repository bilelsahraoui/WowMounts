import React from 'react';
import styled from 'styled-components/native';

const DetailsProfession = ({profession, professionImage}) => {
  return (
    <>
      <ScrollContainer>
        <Container>
          <ImageContainer>
            <StyledImage
              source={{uri: professionImage ? professionImage : null}}
            />
          </ImageContainer>
          <MetierContainer>
            <MetierType>
              Le métier {profession.name} est un des métiers{' '}
              {profession.type.name}
            </MetierType>
            <MetierDescription>{profession.description}</MetierDescription>
          </MetierContainer>
        </Container>
      </ScrollContainer>
    </>
  );
};

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const ScrollContainer = styled.ScrollView`
  height: 100%;
  width: 100%;
`;

const ImageContainer = styled.View`
  height: 160px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
`;

const StyledImage = styled.Image`
  height: 100%;
  width: 95%;
  border-radius: 10px;
`;

const MetierContainer = styled.View`
  height: 100%;
  width: 100%;
  margin-top: 5px;
  align-items: center;
`;

const MetierType = styled.Text`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

const MetierDescription = styled.Text`
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export default DetailsProfession;
