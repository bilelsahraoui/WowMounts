import React from 'react';
import styled from 'styled-components/native';

const KeystoneTime = ({keystone}) => {
  return (
    <KeyContainer>
      <KeyTime>
        <Time>+ {keystone.upgrade_level}</Time>
      </KeyTime>
      <TimeNeeded>
        {'< '}
        {new Date(keystone.qualifying_duration).getMinutes()} min
      </TimeNeeded>
    </KeyContainer>
  );
};

const KeyTime = styled.TouchableOpacity`
  height: 64px;
  width: 64px;
  align-items: center;
  justify-content: center;
  background-color: #f4d2a1;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 34px;
  border-width: 0.8px;
`;

const KeyContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  margin-top: 10px;
`;

const Time = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const TimeNeeded = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export default KeystoneTime;
