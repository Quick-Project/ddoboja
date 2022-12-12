import React from 'react';
import styled from 'styled-components';
import LogoImg from './img/VSCLogo.png';
import Image from 'next/image';

const MainContain = styled.div`
  color: white;
  width: 100%;
`;
const LogoImage = styled(Image)`
  color: white;
`;
const TabContain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #69b0a9;
  width: 120px;
  height: 40px;
  background-color: #1e1e1e;
`;
const TabText = styled.div`
  margin: 0 13px 0 8px;
`;

const TabTab = () => {
  return (
    <MainContain>
      {' '}
      <TabContain>
        <LogoImage src={LogoImg} width={20} height={20} />
        <TabText>시작하기</TabText>
        <div>x</div>
      </TabContain>
    </MainContain>
  );
};

export default TabTab;
