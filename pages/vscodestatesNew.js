import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OnSideBar from '../components/VSC/OnSidebar';
import BottomLine from '../components/VSC/BottomLine';
import TerminalSpace from '../components/VSC/Terminal';
import FolderLine from '../components/VSC/LeftFolderLine';
import MainInput from '../components/VSC/MainInput';
import NewTabTab from '../components/VSC/NewLetterTab';
import ButtonCP from '../components/VSC/Button';

const body = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1e1e1e;
`;
const Body = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1e1e1e;
`;
const VscContain = styled.div`
  margin-left: 240px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const NewLetter = () => {
  return (
    <Body>
      <OnSideBar />
      <FolderLine />
      <VscContain>
        <NewTabTab />
        <MainInput />
        <ButtonCP />
        <TerminalSpace />
        <BottomLine />
      </VscContain>
    </Body>
  );
};

export default NewLetter;
