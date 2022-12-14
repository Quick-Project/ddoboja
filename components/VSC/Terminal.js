import React from 'react';
import styled from 'styled-components';

const Terminalbox = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  height: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
`;
const TerminalTxt = styled.div`
  font-size: 14px;
  margin: 10px 15px;
  color: white;
`;
const TerminalOn = styled.div`
  font-size: 14px;
  margin: 10px 15px;
  color: white;
  border-bottom: 1.5px solid #69b0a9;
  height: 20px;
`;

const TerminalSpace = () => {
  return (
    <>
      <Terminalbox>
        <TerminalTxt>문제</TerminalTxt>
        <TerminalTxt>출력</TerminalTxt>
        <TerminalOn>터미널</TerminalOn>
        <TerminalTxt>디버그 콘솔</TerminalTxt>
      </Terminalbox>
    </>
  );
};

export default TerminalSpace;
