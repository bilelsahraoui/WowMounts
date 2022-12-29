import React from 'react';
import styled from 'styled-components/native';

const ClosedComponent = ({onPress}) => {
  return (
    <CloseContainer onPress={onPress}>
      <CloseText>X</CloseText>
    </CloseContainer>
  );
};

const CloseContainer = styled.TouchableOpacity`
  align-self: center;
`;

const CloseText = styled.Text`
  color: red;
  font-size: 30px;
`;

export default ClosedComponent;
