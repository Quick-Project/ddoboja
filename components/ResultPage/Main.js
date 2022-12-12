import React from 'react';
import styled from 'styled-components';

const dummyData = [
  {
    receiver: '테스트',
    title: '프로게이머스',
    content:
      '맥주 온라인 편지는 컴퓨터 프로그래밍 알고리즘 편지 예약 서비스를 제공해주는 웹사이트이다.',
  },
  {
    receiver: '트스테',
    title: 'VSCODESTATES',
    content:
      '코딩메일서비스를 찾는다면? 개발자를 위한 책임있는 예약 메일 시스템! VSCodestates를 소개합니다.',
  },
];

const ResultPage = () => {
  return (
    <Result_Container>
      <MainDiv>
        <ResultDiv>
          <div className="left">
            <p className="tag">보낸사람</p>
            {dummyData.map((data) => (
              <p key={data.receiver}>{data.receiver}</p>
            ))}
          </div>
          <div className="mainLeft">
            <p className="tag">제목</p>
            {dummyData.map((data) => (
              <p key={data.title}>{data.title}</p>
            ))}
          </div>
          <div className="main">
            <p className="tag">내용</p>
            {dummyData.map((data) => (
              <p key={data.content}>{data.content}</p>
            ))}
          </div>
          <div className="main">
            <p className="tag">제출시간</p>
            {dummyData.map((data) => (
              <p key={data.receiver}>{data.receiver}</p>
            ))}
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
