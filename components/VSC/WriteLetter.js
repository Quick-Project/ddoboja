import React from 'react';
import styled from 'styled-components';

const WriteContain = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 300px;
`;

const FunctionTitle = styled.div`
  color: #a075be;
  margin-right: 0.5em;
`;

const FunctionName = styled.div`
  color: #709ef1;
  margin-right: 0.5em;
`;
const YellowCase = styled.div`
  color: #fdcf2e;
`;

const WriteSpace = () => {
  return (
    <WriteContain>
      <FunctionTitle>function</FunctionTitle>
      <FunctionName>FE40Letter from</FunctionName>
      <YellowCase>`(data)`</YellowCase>
    </WriteContain>
  );
};

export default WriteSpace;
