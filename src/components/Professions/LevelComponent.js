import React from 'react';
import styled from 'styled-components/native';

const LevelComponent = ({item}) => {
  return (
    <Container>
      <Title>{item.name}</Title>
    </Container>
  );
};

const Container = styled.View`
  margin-top: 10px;
  height: 130px;
  width: 100%;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export default LevelComponent;
