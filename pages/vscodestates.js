import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Checkbox from './../components/VSC/Check';
import TabTab from '../components/VSC/Tab';
import Letter from '../components/VSC/newLetter';
import Members from '../components/VSC/teamMembers';
import SideBar from '../components/VSC/Sidebar';
import TerminalSpace from '../components/VSC/Terminal';
import BottomLine from '../components/VSC/BottomLine';
import WriteSpace from '../components/VSC/WriteLetter';
import RightBoxes from '../components/VSC/RightBox';
import ButtonCP from '../components/VSC/Button';

const Body = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1e1e1e;
  overflow: hidden;
`;

const VscContain = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const CheckContain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-left: 200px;
`;

const TextBox = styled.div`
  margin: -100px 0 20px 0;
`;

const VscWelcomeTxt = styled.h1`
  font-size: 50px;
  font-weight: 400;
  color: white;
`;
const VscSubTxt = styled.h1`
  color: rgb(142, 142, 142);
  font-weight: 400;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 10px;
  margin-bottom: 50px;
  color: rgb(142, 142, 142);
`;

const Label = styled.label`
  margin-left: 0.4rem;
  font-size: 1rem;
`;

const VSC = () => {
  const [check, setCheck] = useState(true);
  const [write, setWrite] = useState(false);

  useEffect(() => {
    if (!check) {
      //route
    }
  }, [check]);

  return (
    <Body>
      <SideBar />
      <VscContain>
        <TabTab />
        <CheckContain>
          <TextBox>
            <VscWelcomeTxt>Visual Studio Codestates</VscWelcomeTxt>
            <VscSubTxt> 편집 향상 됨</VscSubTxt>
          </TextBox>
          <Letter />
          <Members />
        </CheckContain>
        <CheckboxContainer>
          <Checkbox checked={check} setCheck={setCheck}></Checkbox>
          <Label htmlFor="check">
            {check
              ? '체크를 풀면... 신기한 일이 일어날지도?'
              : '별🌟은 눌러 주셨나요?'}
          </Label>
        </CheckboxContainer>
        <BottomLine />
      </VscContain>
      <RightBoxes />
      <ButtonCP />
    </Body>
  );
};

export default VSC;
