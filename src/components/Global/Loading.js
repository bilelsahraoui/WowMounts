import React from 'react';
import styled from 'styled-components/native';

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingDialog>Chargement en cours...</LoadingDialog>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const LoadingDialog = styled.Text`
  font-size: 15px;
  text-align: center;
`;

export default Loading;
