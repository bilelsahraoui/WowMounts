import React from 'react';
import styled from 'styled-components/native';

const ErrorComponent = () => {
  return (
    <ErrorContainer>
      <ErrorDialog>
        Une erreur est survenue, veuillez réessayer ultérieurement.
      </ErrorDialog>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const ErrorDialog = styled.Text`
  font-size: 14px;
  text-align: center;
  color: red;
`;

export default ErrorComponent;
