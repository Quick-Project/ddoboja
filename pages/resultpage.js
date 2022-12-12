import React from 'react';
import styled from 'styled-components';
import Result_Header from '../components/ResultPage/Header';
import Result_Main from '../components/ResultPage/Main';
import Result_Aside from '../components/ResultPage/IDECompo';

const ResultPage = () => {
  return (
    <Wrapper>
      <Result_Header />
      <MainDiv>
        <Result_Main />
        <Result_Aside />
      </MainDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100vh;
  width: 100vw;
  min-height: 600px;
`;

const MainDiv = styled.div`
  display: flex;
`;

export default ResultPage;
