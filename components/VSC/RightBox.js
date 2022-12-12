import React, { useState } from 'react';
import styled from 'styled-components';
import BottomLine from './BottomLine';

const Boxes = styled.div`
  @media screen and (max-width: 1560px) {
    display: none;
  }
`;

const Box1 = styled.div`
  position: absolute;
  top: 260px;
  right: 200px;
  margin: 50px;
  width: 550px;
  height: 80px;
  color: white;
  font-size: 16px;
  text-align: center;
  padding: 25px 0 15px 0;
  border-radius: 0 15px 0 0;
  background-color: none;
  background-image: linear-gradient(
    145deg,
    transparent 30px,
    rgb(20, 20, 20) 0
  );
  &:hover {
    background-image: linear-gradient(
      145deg,
      transparent 30px,
      rgb(28, 28, 28) 0
    );
    cursor: pointer;
  }
`;
const Box2 = styled.div`
  position: absolute;
  color: black;
  font-size: x-large;
  font-weight: bold;
  padding-left: 5px;
  top: 310px;
  right: 730px;
  width: 70px;
  height: 90px;
  background-color: #67aba5;
  border-radius: 15px 0 0 15px;
`;
const Box3 = styled.div`
  position: absolute;
  top: 260px;
  right: 200px;
  margin: 50px;
  width: 500px;
  height: 90px;
  background-color: #1e1e1e;
  border: 1px solid black;
  border-radius: 0 30px 15px 0;
`;
const RightBoxes = () => {
  return (
    <Boxes>
      <Box3></Box3>
      <Box2>☆</Box2>
      <Box1>
        우리 안에 있는 사랑은 표현을 원한다. 편지는 우정의 지속적인 표현이다.
        <br /> - 안셀름 그륀, "삶의 기술"
      </Box1>
    </Boxes>
  );
};

export default RightBoxes;
