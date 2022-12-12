import React from 'react';
import styled from 'styled-components';

const ThemeButton = styled.button`
  position: absolute;
  right: 50px;
  bottom: 110px;
  width: 150px;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
`;
const SubmitButton = styled.button`
  position: absolute;
  right: 50px;
  bottom: 50px;
  width: 150px;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
`;

const ButtonCP = () => {
  return (
    <>
      <ThemeButton>Theme change</ThemeButton>
      <SubmitButton>CodePush 하기</SubmitButton>
    </>
  );
};

export default ButtonCP;
