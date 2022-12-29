import React from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';

const Loading = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export default Loading;
