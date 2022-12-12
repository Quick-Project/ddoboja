import React from 'react';
import styled from 'styled-components';

const ResultPage = () => {
  return (
    <Result_Container>
      <MainDiv>
        <ResultDiv>
          <div className="left">
            <p className="tag">보낸사람</p>
          </div>
          <div className="mainLeft">
            <p className="tag">제목</p>
          </div>
          <div className="main">
            <p className="tag">내용</p>
          </div>
          <div className="main">
            <p className="tag">제출시간</p>
          </div>
        </ResultDiv>
      </MainDiv>
    </Result_Container>
  );
};

const Result_Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70vw;
  min-height: 600px;
`;

const MainDiv = styled.div`
  display: flex;
  background: white;
  height: 100vh;
`;

const ResultDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
  & .left {
    padding-left: 230px;
    padding-top: 30px;
  }
  & .main {
    padding-top: 30px;
    padding-left: 20%;
  }
  & .mainLeft {
    padding-left: 30%;
    padding-top: 30px;
  }
  & .tag {
    width: 600%;
  }
`;

export default ResultPage;
